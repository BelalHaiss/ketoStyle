import {
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
  ModalCloseButton,
  Button
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useStore } from 'src/store';
import { isSafari } from '../UserCalories/utils';
let runOnece = false;

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const user = useStore((state) => state.user);
  const display = { isOpen, onClose };
  useEffect(() => {
    if (!isSafari(navigator) && !runOnece && !user) {
      onOpen();
    }
    runOnece = true;
  }, []);
  return (
    <Modal size='xl' isOpen={isOpen} onClose={display.onClose}>
      <ModalOverlay />
      <ModalContent borderRadius={'2xl'} bg='orange.600'>
        <Flex color='white' align='start' justify='start'>
          <ModalCloseButton
            position={'relative'}
            top='4'
            left='-3'
            fontSize='2xl'
          />
        </Flex>
        <ModalBody p='1'>
          <Flex
            gap='3'
            flexDir='column'
            align='center'
            p='7'
            className='KetoPopup'
          >
            <Text
              color='gray.100'
              my='7'
              w={{ base: '100%', md: '80%' }}
              fontWeight='bold'
              fontSize={{ base: '15px', md: '25px' }}
              align='center'
            >
              اهلا بك نرجو منك تسجيل الدخول لاكمال عملية الدفع
            </Text>
            <Button
              size={{ base: 'sm', md: 'md' }}
              borderRadius='2xl'
              _hover={{
                bg: 'white',
                color: 'orange.800'
              }}
              onClick={() => {
                onClose();
                document.getElementById('login')?.click();
              }}
              w='200px'
              bg='orange.800'
              colorScheme='orange'
              // variant='ghost'
            >
              تسجيل الدخول
            </Button>
            <Button
              onClick={() => {
                onClose();
                document.getElementById('register')?.click();
              }}
              borderRadius='2xl'
              size={{ base: 'sm', md: 'md' }}
              w='200px'
              bg='orange.800'
              colorScheme='orange'
              _hover={{
                bg: 'white',
                color: 'orange.800'
              }}
            >
              تسجيل حساب جديد{' '}
            </Button>
        
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
