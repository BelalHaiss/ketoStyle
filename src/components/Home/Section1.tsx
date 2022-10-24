import { Flex, Heading, Text } from '@chakra-ui/react';
// import Image from 'next/image';

export default function Section1() {
  return (
    <Flex flexDir='column' w='100%'>
      <Flex className='ketoslider'></Flex>
      <Flex
        fontSize={{ base: '60px', md: '100px', lg: '130px', xl: '160px' }}
        w='100%'
        flexDir='column'
        py='7'
      >
        <Flex align='center' pr='6%' justify='start'>
          <Heading
            color='red.500'
            fontWeight={'bold'}
            fontSize='1em'
            className='ketoHeading'
            letterSpacing={'5px'}
          >
            {' '}
            بكيتو
          </Heading>
          <Heading
            color='orange.300'
            fontWeight={'bold'}
            fontSize='1em'
            className='ketoHeading'
          >
            {' '}
            ستايل
          </Heading>
        </Flex>
        <Flex
          align='center'
          pr={{ base: '25%', md: '33%' }}
          w='100%'
          justify='start'
        >
          <Heading
            sx={{
              '@media (max-width:460px)': {
                fontSize: '0.5em'
              }
            }}
            color='orange.900'
            fontWeight={'bold'}
            letterSpacing='2px'
            fontSize='0.7em'
            className='ketoHeading'
          >
            تغييرك مضمون{' '}
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
}
