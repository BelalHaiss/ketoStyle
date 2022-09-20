import { Flex, Button, Text, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function CustomError() {
  const router = useRouter();
  return (
    <Flex align='center' flexDir='column' h='50vh' w='100%' justify='center'>
      <Heading
        fontWeight='bold'
        color='tomato'
        letterSpacing={'widest'}
        fontSize='100px'
      >
        4 0 4
      </Heading>

      <Text fontSize='lg'> الصفحة غير موجودة </Text>
      <Button colorScheme={'orange'} onClick={() => router.replace('/')}>
        الرجوع للصفحة الرئيسية
      </Button>
    </Flex>
  );
}
