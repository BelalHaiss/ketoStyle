import React, { useEffect, useState } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

// import Image from 'next/image';
import { Flex, Text, Heading, Icon, Image } from '@chakra-ui/react';

function initState() {
  return window.innerWidth >= 700 ? '/home/sec6.png' : '/home/sec6-sm.png';
}
export function Section6() {
  const [imgSrc, setImageSrc] = useState(initState);
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
      // bg='orange.100'
      // gap={{ base: '4', md: '1' }}
      p='2'
      gap={{ base: '15', md: '1' }}
      py='7'
      w='100%'
      flexDir={{ base: 'column', md: 'row' }}
    >
      <Image
        mr='-25px'
        loading='lazy'
        width={{ base: '300px', md: '400px' }}
        height={{ base: '300px', md: '400px' }}
        alt={'we support you'}
        className='home-image'
        src={imgSrc}
      />
      <Flex
        w={{ base: 'auto', md: '400px' }}
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
          w={{ base: 'auto', md: '400px' }}
          color='orange.900'
          fontWeight={'normal'}
          fontSize={{ base: '2xl', md: '40.8px' }}
        >
          احنا موجودين
          <Text color='orange.500' px='3' display='inline-block'>
            عشانك
          </Text>
        </Heading>
        <Text
          className='section4-text'
          fontSize={{ base: '15px', md: '19.5px' }}
          color='orange.900'
        >
          من بداية دخولك ببرنامج كيتوستايل للكيتو، هدفك لوصولك للوزن المطلوب هو
          هدفنا أيضًا، كل فريق كيتوستايل راح يكون متواجد عشانك، واخصائي التغذية
          اللي راح يكون متواجد معاك من اليوم الأول لدعمك، وراح نكون عائلتك
          الثانية ومراح نرتاح لين ماتوصل لهدفك وتكون راضي عن النتيجة بشكل تام،
          يعني من اليوم الأول ونزولك مضمون معانا.
        </Text>
        <Text
          mt='auto'
          className='section4-text'
          fontSize={{ base: '15px', md: '19.5px' }}
          color='orange.900'
        >
          فرصة تغيير حياتك جتلك لين عندك، ابدأ من هذي اللحظة وتذكر إن مشوار
          الألف ميل يبدأ بخطوة واحده منك.
        </Text>
      </Flex>
    </Flex>
  );
}
