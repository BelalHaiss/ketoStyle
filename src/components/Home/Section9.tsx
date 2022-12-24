import React from 'react';

// import Image from 'next/image';
import { Flex, Text, Heading, Icon, Image } from '@chakra-ui/react';
import { GiPerson } from 'react-icons/gi';

export function Section9() {
  return (
    <Flex
      my='5'
      bg='orange.100'
      p='6'
      flexDirection={'column'}
      gap='4'
      w='100%'
      color='orange.900'
      justifyContent={'center'}
      alignItems='center'
    >
      <Flex
        flexDirection={'row'}
        fontSize={{ base: '4.5em', md: '5em', lg: '6em' }}
        className='more-people-icon'
      >
        <GiPerson />
        <GiPerson />
        <GiPerson />
        <GiPerson />
        <GiPerson />
        <GiPerson />
        <GiPerson />
      </Flex>
      <Text fontSize={{ base: '2xl', md: '40px' }} className='more-people'>
        أكثر من ٣٠٠٠ عميل غير حياته{' '}
        <span style={{ color: 'orange' }}>معنا</span>
      </Text>
    </Flex>
  );
}
