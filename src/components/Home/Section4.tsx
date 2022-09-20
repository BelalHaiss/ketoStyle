import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

// import Image from 'next/image';
import { Flex, Text, Heading, Icon, Image } from '@chakra-ui/react';

const checkedText = [
  'حمية بنائًا على الأكل اللذي يعجبك',
  'يمكنك تغييرها في أي وقت',
  'أكثر من ١٥٠ وصفة كيتو'
];
export function Section4() {
  return (
    <Flex
      align='center'
      my='5'
      className='section4'
      bg='orange.100'
      // gap={{ base: '4', md: '1' }}
      p='2'
      py='7'
      w='100%'
      gap={{ base: '15', md: '1' }}
      flexDir={{ base: 'column', md: 'row' }}
    >
      <Image
        mr='-25px'
        width={{ base: '200px', md: '400px' }}
        height={{ base: '200px', md: '400px' }}
        alt={'dish'}
        src={'/home/sec4.png'}
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
          نظام كيتو مخصص{' '}
          <Text color='orange.500' px='1' display='inline-block'>
            لك
          </Text>
        </Heading>
        <Text
          className='section4-text'
          fontSize={{ base: '15px', md: '19.5px' }}
          color='orange.900'
        >
          نعم هذا صحيح، فنظام الكيتو في أي مكان أخر لايمكن أن يُبنى على سلوكياتك
          في الأكل، بينما مع كيتو سايكل، يمكنك تصميم وابتكار واختيار الوجبات
          المناسبة لك بكل سهولة
        </Text>
        <Text
          className='section4-text'
          fontSize={{ base: '15px', md: '19.5px' }}
          color='orange.900'
        >
          نقوم بعمل خطة الحمية الخاصة بك بنائًا على نمط حياتك وصحتك واحتياجاتك
          التغذوية، وحالتك الكيتونية للحصول على أسرع النتائج
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
