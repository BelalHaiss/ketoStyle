import React, { useState, useEffect } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

// import Image from 'next/image';
import { Flex, Text, Heading, Icon, Image } from '@chakra-ui/react';

function initState() {
  return window.innerWidth >= 700 ? '/home/sec5.png' : '/home/sec5-sm.png';
}
export function Section5() {
  const [imgSrc, setImageSrc] = useState(initState);
  function handleResizeWindow() {
    window.innerWidth >= 700
      ? setImageSrc('/home/sec5.png')
      : setImageSrc('/home/sec5-sm.png');
  }
  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);
  return (
    <Flex gap='3' flexDir={{ base: 'column', md: 'row' }} align='center' p='4'>
      <Image
        h={{ base: '300px', md: '400px' }}
        src='/home/green.png'
        className='vegtable-img'
        loading='lazy'
        alt='vegtable'
      />
      <Flex
        color='orange.900'
        w={{ base: '100%', md: '60%' }}
        flexDir='column'
        gap='3'
      >
        <Flex gap='1' fontSize={{ base: '30px', md: '33px', lg: '50px' }}>
          <Heading fontWeight={'normal'} fontSize='1em'>
            ليش أشترك{' '}
          </Heading>
          <Heading fontWeight={'normal'} fontSize='1em' color='red.500'>
            بكيتو
          </Heading>
          <Heading fontWeight={'normal'} fontSize='1em' color='orange.300'>
            ستايل
          </Heading>
        </Flex>
        <Text fontSize='22px'>
          بكيتوستايل جلسنا مدة طويلة ندرس هالنظام بشكل صحيح وبطريقة ماتحسسك
          بالجوع او التعب او الإرهاق، لأن تطبيقك للكيتو بطريقة خاطئة مراح يعطيك
          النتيجة المطلوبة وراح يخليك بحالة تعب مستمره وراح يضيع وقتك وانت تحسب
          سعراتك وتسال عن المسموح والممنوع بالكيتو، احنا جلسنا ندرس هالنظام مع
          اخصائيين التغذية ومدربين رياضيين، عشان نطلع لكم بالنهاية بهالنظام
          المتكامل مع وجود اخصائيين تغذية ومدربيين رياضيين يدعمونك ويكملون رحلة
          الكيتو معاكم من بدايتها لغاية وصولكم للوزن المطلوب بطريقة صحية ورياضية
          ومضمونة ١٠٠٪ بدون أي تأثير على انتاجية عملكم اليومي او طاقتكم.
        </Text>
      </Flex>
    </Flex>
  );
}
