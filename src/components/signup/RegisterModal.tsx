import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Walkthrough } from './Walkthrough';
import { Controller } from './Controller';
import LoginForm from './LoginForm';
type Props = {
  isOpen: boolean;
  onClose: () => void;
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
};
export function RegisterModal({
  isOpen,
  onClose,
  isLogin = false,
  setIsLogin
}: Props) {
  const [header, setHeader] = useState('مرحبًا بك في عائلتنا');
  const [registerDetails, setRegisterDetails] = useState({});
  const [page, setPage] = useState(1);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  function navigatePage(senario: 'next' | 'prev') {
    if (senario === 'next') {
      setPage(page + 1);
      setIsPrevDisabled(false);
      setIsNextDisabled(true);
      return;
    } else {
      if (page - 1 === 1) {
        setIsPrevDisabled(true);
      }
      setPage(page - 1);

      setIsNextDisabled(false);
    }
  }
  function setButtonStatus(
    type: 'next' | 'prev',
    action: 'active' | 'disabled'
  ) {
    if (type === 'next') {
      action === 'active' ? setIsNextDisabled(false) : setIsNextDisabled(true);
    } else {
      action === 'active' ? setIsPrevDisabled(false) : setIsPrevDisabled(true);
    }
  }

  function closeModal() {
    setPage(1);
    onClose();
    if (isLogin) {
      setIsLogin(false);
    }
  }
  useEffect(() => {
    return () => closeModal();
  }, []);
  return (
    <>
      <Modal
        size={{ base: 'full', md: page === 9 ? 'full' : 'xl' }}
        isCentered
        isOpen={isOpen || isLogin}
        onClose={closeModal}
      >
        <ModalOverlay
          backdropFilter='auto'
          backgroundColor={'transparent'}
          backdropBlur='4px'
          
        />
        <ModalContent
          color={page === 9 ? 'orange.800' : 'orange.50'}
          bg={page === 9 ? 'orange.50' : 'orange.800'}
          minW={{ base: '100%', md: '500px' }}
          overflowY='auto'
          // minH='250px'
        >
          <ModalHeader fontSize='2xl' textAlign={'center'}>
            {header}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isLogin && (
              <LoginForm setHeader={setHeader} onClose={closeModal} />
            )}
            {!isLogin && (
              <Controller
                page={page}
                setButtonStatus={setButtonStatus}
                onClose={onClose}
                setHeader={setHeader}
                setRegisterDetails={setRegisterDetails}
              />
            )}{' '}
          </ModalBody>
          <ModalFooter>
            {!isLogin && (
              <Walkthrough
                page={page}
                buttonState={{ next: isNextDisabled, prev: isPrevDisabled }}
                navigatePage={navigatePage}
                registerDetails={registerDetails}
                closeModal={closeModal}
              />
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
