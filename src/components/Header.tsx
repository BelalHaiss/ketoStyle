import { Flex, Image, Button, Text } from '@chakra-ui/react';
import { RegisterModal } from './signup/RegisterModal';
import { useState } from 'react';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  return (
    <>
      <Flex
        as='header'
        align='center'
        justify='space-between'
        wrap='wrap'
        p='0.4px 6px'
      >
        <Flex align='center' mr={5}>
          <Image src='/logo.svg' w='90px' alt='Keto' />
        </Flex>
        <Flex wrap='wrap' px='3' align='center' gap='2'>
          <Button onClick={onOpen} borderRadius='2xl' colorScheme='orange'>
            انضم الينا
          </Button>
          <Button borderRadius='2xl' colorScheme='orange' variant='ghost'>
            تسجيل الدخول
          </Button>
        </Flex>
      </Flex>
      <RegisterModal isOpen={isOpen} onClose={onClose} />
      <hr style={{ border: '1px dashed #feebc8 ' }} />
    </>
  );
}
