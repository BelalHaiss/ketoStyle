import React from 'react';

// import Image from 'next/image';
import { Flex, Text, Heading, Icon, Image } from '@chakra-ui/react';

export function Section2() {
  return (
    <Flex
      my='5'
      bg='orange.100'
      p='6'
      flexDirection={'column'}
      gap='4'
      w='100%'
      color='orange.900'
    >
      <Heading fontSize={'40px'} fontWeight={'normal'}>
        أيش الكيتو دايت؟{' '}
      </Heading>
      <Text w={{ base: '100%', md: '80%' }} fontSize='22px'>
        نظام الكيتو بكل اختصار هو برنامج يقوم على خفض الكاربوهيدرات وزيادة
        الدهون والبروتين مما يضع جسمك في الحالة الكيتونية بهالحالة جسمك راح يصير
        يستهلك ويحرق من دهون جسمك مباشرة عشان يستمد الطاقة وبهالطريقة راح يتحول
        جسمك لألة لحرق الدهون بالمعنى الحرفي، هالنظام المدروس عنده القدره على
        تغيير جسمك بطرق لايستطيع أي نظام غذائي بالعالم يوصلها بأوقات قصيرة
      </Text>
    </Flex>
  );
}
