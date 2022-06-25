import { Flex, Spinner } from '@chakra-ui/react';

export default function Loader() {
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
        emptyColor='gray.200'
        color='pink.500'
      />
    </Flex>
  );
}
