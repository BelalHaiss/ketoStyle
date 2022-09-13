import { Flex, Spinner, Text } from '@chakra-ui/react';

export default function Loader({ text }: { text?: string }) {
  return (
    <Flex
      p='3'
      flex='1'
      justifyContent={'center'}
      flexDir={'column'}
      alignItems={'center'}
    >
      <Spinner
        transform={'translate(-50%, -50%)'}
        thickness='7px'
        speed='0.65s'
        w='8rem'
        h='8rem'
        emptyColor='orange.200'
        color='orange.700'
      />
      {text && <Text>{text}</Text>}
    </Flex>
  );
}
