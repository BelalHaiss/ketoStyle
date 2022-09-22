import React, { useEffect, useState } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

// import Image from 'next/image';
import { Flex, Text, Heading, Icon, Image } from '@chakra-ui/react';

const checkedText = [
  'خدمات التغذية والتدريب المضافة',
  'توقعات تقريبية لموعد وصولك للوزن المطلوب',
  'حساب احتياج الجسم وكتلة الجسم'
];
export function Section6() {
  const [imgSrc, setImageSrc] = useState('/home/sec6.png');
  function handleResizeWindow() {
    window.innerWidth >= 700
      ? setImageSrc('/home/sec6.png')
      : setImageSrc('/home/sec6-sm.png');
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
      className='section4'
      bg='orange.100'
      // gap={{ base: '4', md: '1' }}
      p='2'
      gap={{ base: '15', md: '1' }}
      py='7'
      w='100%'
      flexDir={{ base: 'column', md: 'row' }}
    >
      <Image
        mr='-25px'
        width={{ base: '300px', md: '400px' }}
        height={{ base: '300px', md: '400px' }}
        alt={'we support you'}
        className='home-image'
        src={imgSrc}
      />
      <Flex
        w={{ base: 'auto', md: '430px' }}
        gap='2'
        height={{ base: 'auto', md: '366px' }}
        mr={{ base: '0', md: '-50px' }}
        wrap='wrap'
        fontSize={{ base: 'sm', md: 'md' }}
        alignItems='center'
        flexDir={'column'}
      >
        <Heading
          as='h3'
          w={{ base: 'auto', md: '430px' }}
          color='orange.900'
          fontWeight={'normal'}
          fontSize={{ base: '2xl', md: '40.8px' }}
        >
          نحن هنا{' '}
          <Text color='orange.500' px='1' display='inline-block'>
            لدعمك
          </Text>
        </Heading>
        <Text
          className='section4-text'
          fontSize={{ base: '15px', md: '19.5px' }}
          color='orange.900'
        >
          بالطبع منذ لحظة دخولك لعالم الكيتو مع كيتو سايكل، فأنت لست لوحدك مع
          فريقنا المُحب، سيكون هناك فريقنا معك وسيهتم بأدق التفاصيل، مع خدمات
          التغذية وخدمات التدريب المضافة.
        </Text>
        <Text
          className='section4-text'
          fontSize={{ base: '15px', md: '19.5px' }}
          color='orange.900'
        >
          نحن نسعى لتوفير وخلق بيئة مساعدة لك لتتمكن من الإستمرار وتحقيق الهدف
          اللذي تريده، بطريقة علمية مدروسة{' '}
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
    </Flex>
  );
}
