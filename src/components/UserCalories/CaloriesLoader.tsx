import { Flex, Skeleton } from '@chakra-ui/react';

export function CaloriesLoader() {
  return (
    <Flex w='100%' flexDir='column' p='1' justify='space-around' align='center'>
      <div className='half_circle_loader'></div>

      <Flex w='100%' mt='5' justify='space-around' align='center'>
        <Flex w='45%' flexDir='column' gap='5' align='center'>
          <Skeleton startColor='purple.500' height='5px' width='100%' />
          <Skeleton startColor='red.500' height='5px' width='100%' />
          <Skeleton startColor='green.500' height='5px' width='100%' />
        </Flex>
        <Flex w='45%' flexDir='column' gap='5' align='center'>
          <Skeleton height='5px' width='100%' />
          <Skeleton height='5px' width='100%' />
          <Skeleton height='5px' width='100%' />
          <Skeleton height='5px' width='100%' />
        </Flex>
      </Flex>
    </Flex>
  );
}
