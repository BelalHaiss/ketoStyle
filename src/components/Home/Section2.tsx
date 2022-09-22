import React from 'react';

// import Image from 'next/image';
import { Flex, Text, Heading, Icon, Image } from '@chakra-ui/react';

export function Section2() {
  return (
    <Flex
      align='center'
      my='5'
      bg='orange.100'
      gap={{ base: '4', md: '1' }}
      p='2'
      w='100%'
      flexDir={{ base: 'column', md: 'row' }}
      justify='space-between'
    >
      <Flex flex='1' justify={'center'} order={{ base: '1', md: '2' }}>
        <Image
          width={{ base: '300px', md: '450px' }}
          height={{ base: '300px', md: '450px' }}
          alt={'diet'}
          src={'/home/bodies.png'}
        />
      </Flex>
      <Flex flex='1' order={{ base: '2', md: '1' }} justify='center'>
        <Flex
          w={{ base: 'auto', md: '350px' }}
          gap='4'
          wrap='wrap'
          fontSize={{ base: 'sm', md: 'md' }}
          alignItems='center'
          flexDir={'column'}
        >
          <Heading
            as='h3'
            fontWeight={'normal'}
            w={{ base: 'auto', md: '350px' }}
            color='orange.900'
            fontSize={{ base: 'xl', md: '50px' }}
          >
            تغيير نمط
            <Text color='orange.500' px='1' display='inline-block'>
              حياتك
            </Text>
            هو المفتاح
          </Heading>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color='orange.900'>
            كثير من الأشخاص قاموا بتغيير أجسامهم عن طريق إتباع نظام الكيتو.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
