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
      setPage(page - 1);
      if (page - 1 === 0) {
        setIsPrevDisabled(true);
      }
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
  useEffect(() => {
    return () => onClose();
  }, []);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          backdropFilter='auto'
          // backdropInvert='80%'
          backgroundColor={'transparent'}
          backdropBlur='10px'
          className='register-bg'
        />
        <ModalContent
          color='orange.50'
          bg='orange.900'
          minW={{ base: '90%', md: '600px' }}
          minH='500px'
        >
          <ModalHeader textAlign={'center'}>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Controller
              page={page}
              setButtonStatus={setButtonStatus}
              onClose={onClose}
            /> */}
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
