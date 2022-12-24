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
  ModalCloseButton
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { isSafari } from '../UserCalories/utils';
// import Image from 'next/image';
let runOnece = false;

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const display = { isOpen, onClose };
  useEffect(() => {
    if (!isSafari(navigator) && !runOnece) {
      onOpen();
    }
    runOnece = true;
  }, []);
  return (
    <Modal
      size='2xl'
      closeOnEsc={false}
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={display.onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex align='center' pr='6%' justify='center'>
            <Heading
              color='red.500'
              fontWeight={'bold'}
              fontSize='50px'
              className='ketoHeading'
              // letterSpacing={{base:}}
            >
              {' '}
              كيتو
            </Heading>
            <Heading
              color='orange.300'
              fontWeight={'bold'}
              fontSize='50px'
              className='ketoHeading'
            >
              {' '}
              ستايل
            </Heading>
          </Flex>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody p='1'>
          <Flex flexDir='column' align='center' p='7' className='KetoPopup'>
            <Text
              color='red.500'
              my='7'
              w={{ base: '100%', md: '80%' }}
              fontSize={{ base: '15px', md: '22px' }}
              align='center'
            >
              لتصفح موقعنا بشكل متكامل الرجاء الضغط على ايقونة سفاري أسفل
              المتصفح لتحويلك لمتصفح سفاري
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
                loading='lazy'
                width={{ base: '300px', md: '1500px' }}
                alt={'homePop'}
                src={'/home/HomePopup.png'}
              />
            </Flex>

            <Text
              color='orange.500'
              my='7'
              w={{ base: '100%', md: '80%' }}
              fontSize={{ base: '15px', md: '22px' }}
              align='center'
            >
              الأيقونة موجودة تحت على اليمين أو اليسار
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
