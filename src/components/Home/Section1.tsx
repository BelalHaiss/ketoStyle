import { Flex, Heading, Text } from '@chakra-ui/react';
// import Image from 'next/image';

export default function Section1() {
  return (
    <Flex flexDir='column' w='100%'>
      <Flex className='ketoslider'></Flex>
      <Flex
        sx={{
          '@media (max-width:400px)': {
            height: '100px',
            '.ketoHeading': {
              fontSize: '40px'
            }
          }
        }}
        h={{ base: '130px', md: '260px' }}
        align='center'
        justify='center'
        mt='2'
      >
        <Heading
          color='orange.900'
          alignSelf={'start'}
          ml={{ base: '-3', md: '-6' }}
          fontWeight={'bold'}
          fontSize={{ base: '60px', md: '120px' }}
          className='ketoHeading'
        >
          مرحبآ
        </Heading>
        <Heading
          color='red.500'
          fontWeight={'bold'}
          fontSize={{ base: '60px', md: '120px' }}
          className='ketoHeading'
        >
          {' '}
          بكيتو
        </Heading>
        <Heading
          color='orange.300'
          fontWeight={'bold'}
          fontSize={{ base: '60px', md: '120px' }}
          className='ketoHeading'
        >
          {' '}
          ستايل
        </Heading>
      </Flex>
    </Flex>
  );
}
