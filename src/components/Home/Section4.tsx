import React, { useEffect, useState } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

// import Image from 'next/image';
import { Flex, Text, Heading, Icon, Image } from '@chakra-ui/react';

const checkedText = [
  'حمية متنوعة بنائًاً على ذوقك',
  'ضمان نزول الوزن بأسرع وقت',
  'لا تعب ولا إرهاق'
];
function initState() {
  return window.innerWidth >= 700 ? '/home/sec4.png' : '/home/sec4-sm.png';
}
export function Section4() {
  const [imgSrc, setImageSrc] = useState<string>(initState);
  function handleResizeWindow() {
    window.innerWidth >= 700
      ? setImageSrc('/home/sec4.png')
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
      className='section4'
      // bg='orange.100'
      // gap={{ base: '4', md: '1' }}
      p='2'
      py='7'
      w='100%'
      gap={{ base: '15', md: '1' }}
      flexDir={{ base: 'column', md: 'row' }}
    >
      <Image
        mr='-25px'
        className='home-image'
        loading='lazy'
        width={{ base: '300px', md: '400px' }}
        height={{ base: '300px', md: '400px' }}
        alt={'dish'}
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
          ايه زي ماسمعت، نظام الكيتو في أي موقع اخر مراح يُبنى على سلوكياتك
          ومزاجك بالاكل ، لكن معنا في كيتو ستايل، بتصمم جدولك وتبتكر وتختار
          الوجبات المناسبة لك واللي تمشي على ذوقك ومزاجك انت
        </Text>
        <Text
          className='section4-text'
          fontSize={{ base: '15px', md: '19.5px' }}
          color='orange.900'
        >
          واحنا بنسوي خطة كامله خاصة فيك بنائًا على نمط حياتك وصحتك واحتياجاتك
          التغذوية، وحالتك الكيتونية للحصول على أسرع النتائج بطريقة مضمونة{' '}
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
