import React, { useEffect, useState } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

// import Image from 'next/image';
import { Flex, Text, Heading, Icon, Image } from '@chakra-ui/react';

const checkedText = ['تمارين مقاومة', 'تمارين كمال الأجسام', 'تمارين الكارديو'];
function initState() {
  return window.innerWidth >= 700 ? '/home/sec4.png' : '/home/sec4-sm.png';
}
export function Section8() {
  const [imgSrc, setImageSrc] = useState<string>(initState);
  function handleResizeWindow() {
    window.innerWidth >= 700
      ? setImageSrc('/home/Section8.png')
      : setImageSrc('/home/sec4-sm.png');
  }
  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);
  return (
    <Flex
      align='center'
      my='5'
      className='section4 section8'
      p='2'
      py='7'
      w='100%'
      gap={{ base: '15', md: '1' }}
      flexDir={{ base: 'column', md: 'row' }}
      justifyContent='space-between'
    >
      <Flex
        w={{ base: 'auto', md: '430px' }}
        gap='2'
        height={{ base: 'auto', md: '366px' }}
        mr={{ base: '0', md: '50px' }}
        wrap='wrap'
        fontSize={{ base: 'sm', md: 'md' }}
        alignItems='center'
        flexDir={'column'}
        order={{ base: '2', md: '1' }}
      >
        <Heading
          as='h3'
          w={{ base: 'auto', md: '430px' }}
          color='orange.900'
          fontWeight={'normal'}
          fontSize={{ base: '2xl', md: '40.8px' }}
        >
          نظام رياضي متكامل{' '}
          <Text color='orange.500' px='1' display='inline-block'>
            لك
          </Text>
        </Heading>
        <Text
          className='section4-text'
          fontSize={{ base: '15px', md: '19.5px' }}
          color='orange.900'
        >
          عندنا بتاخذ نظام رياضي متكامل من اليوم الأول يناسب احتياجك وبخيارات
          متنوعه، وحتى لو ماكنت مسجل بنادي عندنا جدول منزلي متكامل مدروس من قبل
          مدربينا في كيتو ستايل وجدول للحديد وللتضخيم وجدول للكارديو
        </Text>
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
      <Image
        order={{ base: '1', md: '2' }}
        borderRadius='xl'
        className='sec8-image'
        loading='lazy'
        width={{ base: '300px', md: '400px' }}
        height={{ base: '300px', md: '400px' }}
        alt={'dish'}
        src={'/home/section8.png'}
      />
    </Flex>
  );
}
