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
type Props = {
  isOpen: boolean;
  onClose: () => void;
};
export function RegisterModal({ isOpen, onClose }: Props) {
  const [header, setHeader] = useState('مرحبًا بك في عائلتنا');
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
  }
  useEffect(() => {
    return () => closeModal();
  }, []);
  return (
    <>
      <Modal
        size={{ base: 'full', md: page === 9 ? 'full' : 'xl' }}
        isCentered
        isOpen={isOpen}
        onClose={closeModal}
      >
        <ModalOverlay
          backdropFilter='auto'
          backgroundColor={'transparent'}
          backdropBlur='15px'
          className='register-bg'
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
            <Controller
              page={page}
              setButtonStatus={setButtonStatus}
              onClose={onClose}
              setHeader={setHeader}
            />
          </ModalBody>
          <ModalFooter>
            <Walkthrough
              page={page}
              buttonState={{ next: isNextDisabled, prev: isPrevDisabled }}
              navigatePage={navigatePage}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
