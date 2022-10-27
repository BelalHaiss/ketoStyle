import { Flex, Text, Image } from '@chakra-ui/react';
import { useStore } from 'src/store';

export function YalaSubscripe() {
  const user = useStore((state) => state.user);
  return (
    <Flex
      w='100%'
      gap='3'
      flexDir={{ base: 'column', md: 'row' }}
      align='center'
      px='30px'
    >
      <Image src='/home/pay.png' width='300px' height='300px' alt='pic' />
      <Text
        fontWeight={'bold'}
        // w={{ base: '60%', md: '30%' }}
        fontSize={{ base: '2xl', md: '5xl' }}
      >
        {`${user!.profile.name}, لا يفوتك عرضنا , ولمدة محدودة`}
      </Text>
    </Flex>
  );
}
