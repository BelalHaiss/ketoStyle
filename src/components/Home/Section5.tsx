import React from 'react';
import img1 from '/home/before-after/1.jpeg';
import img2 from '/home/before-after/2.jpeg';
import img3 from '/home/before-after/3.jpeg';
import img4 from '/home/before-after/4.jpeg';
// import 4mage from 'next/image';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { BeforeAfterSlider } from './Before_After_Slider';

export function Section5() {
  return (
    <Flex
      p='4'
      align='center'
      justify='center'
      gap='3'
      bg='orange.100'
      flexDir={{ base: 'column', md: 'row' }}
    >
      <Flex
        order={{ base: '2', md: '1' }}
        w={{ base: '100%', md: '45%' }}
        color='orange.900'
        flexDir='column'
        gap='2'
      >
        <Flex gap='2' fontSize={{ base: '2xl', md: '37px' }}>
          <Heading fontWeight={'normal'} fontSize='1em'>
            {' '}
            كثير من الناس غيروا{' '}
          </Heading>
          <Heading fontWeight={'normal'} fontSize='1em' color='orange.500'>
            {' '}
            أجسامهم
          </Heading>
        </Flex>
        <Text fontSize={{ base: '15px', md: '22px' }}>
          نظامنا بالكيتو، من اكثر الانظمة اللي الناس خسروا فيها وزن بعد ماطبقوها
          بالشكل الصحيح، بدون مايحسون بالجوع أو ان طعم الأكل مب لذيذ، لأن كلشي
          بالكيتو لذيذ حتى الشاورما بتقدر تاكلها للشبع وبتخسر وزن كبير، تدري أنه
          فيه ناس خسروا اكثر من ٧٥كغ بالكيتو بس!
        </Text>
      </Flex>

      <Flex
        w={{ base: '100%', md: '45%' }}
        align='center'
        justify={'center'}
        order={{ base: '1', md: '2' }}
      >
        <BeforeAfterSlider />
      </Flex>
    </Flex>
  );
}
