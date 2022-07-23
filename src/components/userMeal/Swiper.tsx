import { Skeleton, Flex, Text } from '@chakra-ui/react';
import { truncate } from 'fs';
import { MealBox } from '../meals/MealBox';
import { useEffect } from 'react';
type Props = {
  loading: boolean;
  docsCount: number;
  data: any[];
  action: 'next' | 'prev' | '';
};
export function Swiper({ loading, docsCount, data, action }: Props) {
  if (loading) {
    return (
      <Flex w='100%' align={'center'} justify='space-around' gap='2'>
        {new Array(docsCount).fill(0).map((_, index) => (
          <Skeleton key={index} w='190px' h='250px' />
        ))}
      </Flex>
    );
  }
  return (
    <Flex align={'center'} justify='space-around' w='100%' gap='1'>
      {data.map((doc, index) => (
        <MealBox
          className={
            action === 'next'
              ? 'nextAnimation'
              : action === 'prev'
              ? 'prevAnimation'
              : ''
          }
          key={index}
          meal={doc}
        />
      ))}
    </Flex>
  );
}
