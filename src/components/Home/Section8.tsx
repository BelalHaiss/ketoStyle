import React, { useState, useEffect } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

// import Image from 'next/image';
import { Flex, Text, Heading, Icon, Image, Button } from '@chakra-ui/react';
import { useStore } from 'src/store';
const checkedText = [
  'نظام دفع آمن',
  'قبول وسائل الدفع المختلفة',
  'مرونه عالية في الإشتراك والإلغاء'
];
export function Section8() {
  const [imgSrc, setImageSrc] = useState('/home/paypal.png');
  const user = useStore((state) => state.user);
  function handleResizeWindow() {
    window.innerWidth >= 700
      ? setImageSrc('/home/paypal.png')
      : setImageSrc('/home/paypal-sm.png');
  }
  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);
  function clickRegisterButton() {
    const btn = document.getElementById('register');
    btn?.click();
  }
  return (
    <Flex
      align='center'
      bg='orange.100'
      // gap={{ base: '4', md: '1' }}
      p='2'
      gap={{ base: '15', md: '3' }}
      py='7'
      w='100%'
      flexDir={{ base: 'column', md: 'row' }}
    >
      <Image
        className='home-image'
        width={{ base: '300px', md: 'auto' }}
        height={{ base: '300px', md: '400px' }}
        alt={'paypal'}
        src={imgSrc}
      />
      <Flex
        w={{ base: 'auto', md: '400px' }}
        gap='2'
        height={{ base: 'auto', md: '400px' }}
        wrap='wrap'
        fontSize={{ base: 'sm', md: 'md' }}
        alignItems='center'
        flexDir={'column'}
      >
        <Heading
          as='h3'
          mt='5'
          color='orange.900'
          fontWeight={'normal'}
          fontSize={{ base: '2xl', md: '39.8px' }}
        >
          إدفع بكل{' '}
          <Text color='orange.500' px='1' display='inline-block'>
            آمان{' '}
          </Text>
        </Heading>
        <Text
          mb='auto'
          className='section4-text'
          fontSize={{ base: '15px', md: '19.5px' }}
          color='orange.900'
        >
          يمكنك الدفع بكل آمان عبر بطاقتك البنكية مباشرة أو عبر حسابك في بايبال،
          جميع العمليات تتم عبر وسيلة الدفع الأكثر آمانًآ في العالم بايبال
          للمدفوعات، ونظامنا المشفر المحمي بشهادات SSL.
        </Text>
        <Flex mb='2' flexDir='column' w='100%'>
          {checkedText.map((text, i) => (
            <Flex w='100%' gap='1' key={i}>
              <Icon as={BsCheck2Circle} w='5' h='5' color='green.400' />
              <Text
                className='section4-text'
                color='orange.900'
                fontWeight={'bold'}
              >
                {text}
              </Text>
            </Flex>
          ))}
        </Flex>
        {!user && (
          <Button onClick={clickRegisterButton} w='100%' colorScheme={'orange'}>
            اشترك الان
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
