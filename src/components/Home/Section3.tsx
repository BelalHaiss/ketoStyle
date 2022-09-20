import React from 'react';

// import Image from 'next/image';
import { Flex, Text, Heading, Icon, Image } from '@chakra-ui/react';

export function Section3() {
  return (
    <Flex
      align='center'
      my='5'
      //   bg='orange.100'
      gap={{ base: '4', md: '1' }}
      p='2'
      w='100%'
      flexDir={{ base: 'column', md: 'row' }}
      justify='space-between'
    >
      <Flex flex='1' justify={'center'} order={{ base: '1', md: '2' }}>
        <Image
          width={{ base: '200px', md: '250px' }}
          height={{ base: '200px', md: '250px' }}
          alt={'dish'}
          src={'/home/dish.png'}
        />
      </Flex>
      <Flex flex='1' order={{ base: '2', md: '1' }} justify='center'>
        <Flex
          w={{ base: 'auto', md: '430px' }}
          gap='4'
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
            fontSize={{ base: '2xl', md: '47.8px' }}
          >
            إبدأ الكيتو بطريقة{' '}
            <Text color='orange.500' px='1' display='inline-block'>
              ذكية
            </Text>
          </Heading>
          <Text fontSize={{ base: '15px', md: '19.5px' }} color='orange.900'>
            من الصعب جدًا عليك البدء بنظام الكيتو لوحدك كونه يتطلب الكثير من
            الأدوات اللتي نوفرها في كيتو ستايل، اترك العلم والتخطيط لنا بينما
            تركز على ما هو أكثر أهمية وهو تغيير حياتك للأجمل{' '}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
