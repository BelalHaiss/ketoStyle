import {
  Button,
  Flex,
  Heading,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
import { MouseEventHandler, useEffect, useState } from 'react';
import { FaApplePay } from 'react-icons/fa';
import { isSafari } from '../UserCalories/utils';

type Props = {
  loading: boolean;
  handlePay: (e: any) => void;
};
export function ApplePayBtn({ loading, handlePay }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const display = { isOpen, onClose };

  function handleClick(e: any) {
    if (e?.stopPropagation) {
      e.stopPropagation();
    }
    if (!isSafari(navigator)) {
      onOpen();
      return;
    }
    handlePay(e);
  }

  return (
    <>
      <Button
        w='80%'
        mx='auto'
        leftIcon={<FaApplePay fontSize='50px' />}
        isLoading={loading}
        onClick={handleClick}
        bg='black'
        py='6'
        color='white'
        dir='ltr'
        _hover={{
          bg: 'black'
        }}
        _active={{
          bg: 'black'
        }}
      ></Button>
      <Modal
        size='2xl'
        closeOnEsc={false}
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={display.onClose}
      >
        <ModalOverlay />
        <ModalContent bg='orange.400'>
          <ModalHeader textAlign='center' color='white' fontSize='3xl'>
            لاكمال العمليه
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody color='white' p='1'>
            <Flex gap='3' flexDir='column' align='center' p='7'>
              <Text
                my='7'
                w={{ base: '100%', md: '80%' }}
                fontSize={{ base: '15px', md: '22px' }}
                align='center'
              >
                الرجاء التاكد من تواجدك في متصفح سفاري لإكمال الدفع عبر أبل بي،
                وفي حال عدم انتقالك انقر على الايقونه{' '}
              </Text>
              <Flex
                bg='gray.200'
                align='center'
                justify='center'
                py='2'
                borderRadius={'xl'}
                w='100%'
              >
                <Image
                  mr='25px'
                  className='Pop-image'
                  width={{ base: '300px', md: '1500px' }}
                  alt={'homePop'}
                  src={'/home/HomePopup.png'}
                />
              </Flex>
              <Button
                w='80%'
                mx='auto'
                leftIcon={<FaApplePay fontSize='50px' />}
                isLoading={loading}
                onClick={handlePay}
                bg='black'
                color='white'
                py='6'
                dir='ltr'
                _hover={{
                  bg: 'black'
                }}
                _active={{
                  bg: 'black'
                }}
              >
                {' '}
                اكمال الدفع
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
