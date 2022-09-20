import React from 'react';

// import Image from 'next/image';
import { Flex, Text, Heading, Icon, Image } from '@chakra-ui/react';

export function Section7() {
  return (
    <Flex
      align='center'
      my='5'
      p='2'
      gap={{ base: '15', md: '1' }}
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
        src='/home/sec7.png'
      />
      <Flex
        w={{ base: 'auto', md: '550px' }}
        gap='2'
        pr='5'
        height={{ base: 'auto', md: '400x' }}
        wrap='wrap'
        order={{ base: 2, md: '1' }}
        fontSize={{ base: 'sm', md: 'md' }}
        alignItems='center'
        flexDir={'column'}
      >
        <Heading
          as='h3'
          color='orange.900'
          fontWeight={'normal'}
          fontSize={{ base: '2xl', md: '40.8px' }}
        >
          حول حمية
          <Text color='orange.500' px='1' display='inline-block'>
            الكيتو{' '}
          </Text>
        </Heading>
        <Text
          mt='5'
          fontSize={{ base: '15px', md: '20.5px' }}
          color='orange.900'
        >
          النظام الغذائي الكيتون - وهو برنامج ثوري للأكل منخفض الكربوهيدرات
          وعالي الدهون، لديه القدرة على تغيير جسمك بطرق لا يستطيع أي نظام غذائي
          آخر القيام بها.
        </Text>
        <Text
          my='3'
          fontSize={{ base: '15px', md: '20.5px' }}
          color='orange.900'
        >
          إنه يضع جسمك في الكيتوزية، الحالة المعززة للصحة حيث تحرق الدهون للحصول
          على الطاقة.
        </Text>
        <Text fontSize={{ base: '15px', md: '20.5px' }} color='orange.900'>
          إلى جانب نهج شخصي وموجه ، ستحول حمية الكيتو جسمك إلى آلة لحرق الدهون ،
          مما يمنحك كل ما تحتاجه لمستقبل صحي
        </Text>
      </Flex>
    </Flex>
  );
}
