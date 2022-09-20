import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

// import Image from 'next/image';
import { Flex, Text, Heading, Icon, Image } from '@chakra-ui/react';

const checkedText = [
  'تتبع تقدمك في البرنامج بسهولة',
  'إعداد خطة غذائية مخصصة لك',
  'توقعات لموعد وصولك للوزن المطلوب'
];
export function Section5() {
  return (
    <Flex
      align='center'
      my='5'
      gap={{ base: '15', md: '1' }}
      p='2'
      className='section5-7'
      w='100%'
      flexDir={{ base: 'column', md: 'row' }}
      justify='space-between'
    >
      <Image
        order={{ base: 1, md: '2' }}
        width={{ base: '200px', md: '300px', lg: '400px' }}
        height={{ base: '200px', md: '300px', lg: '400px' }}
        alt={'dish'}
        src='/home/sec5.png'
      />
      <Flex
        w={{ base: 'auto', md: '450px' }}
        gap='2'
        pr='5'
        order={{ base: 2, md: '1' }}
        height={{ base: 'auto', md: '366px' }}
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
          فعالية عالية بأقل
          <Text color='orange.500' px='1' display='inline-block'>
            مجهود
          </Text>
        </Heading>
        <Text fontSize={{ base: '15px', md: '19.5px' }} color='orange.900'>
          من المعروف ان نظام الكيتو هو أحد الوسائل الفعالة لخسارة الوزن، ولكن
          إذا قمت بذلك بشكل صحيح فقط، لست مضطرًا لأن تقرأ بكثرة عن الكيتو، فنحن
          قمنا بدراسة الموضوع بشكل كامل وشامل مع فريق مختص
        </Text>
        <Text fontSize={{ base: '15px', md: '19.5px' }} color='orange.900'>
          نقوم بتقديم خطة غذائية كاملة متكاملة مع وجبات تجعلك تشعر بالشبع وبجودة
          المذاق لترضي براعم التذوق لديك وتفيد جسمك بشكل كامل
        </Text>
        {checkedText.map((text, i) => (
          <Flex w='100%' gap='1' key={i}>
            <Icon as={BsCheck2Circle} w='5' h='5' color='green.400' />
            <Text color='orange.900' fontWeight={'bold'}>
              {text}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
