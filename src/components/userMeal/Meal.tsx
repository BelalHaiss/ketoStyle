import { Flex, Text } from '@chakra-ui/react';
import { MealSwiper } from './MealSwiper';
export function UserMeal() {
  return (
    <Flex py='1' bg='orange.200' align='center' flexDir={'column'}>
      <Text fontSize={{ base: 'lg', md: '3xl' }} fontWeight='bold'>
        قم باختيار الوجبة اللتي ستاكلها
      </Text>

      <MealSwiper
        link='/meals/query?time=breakfast&page='
        label='وجبات الافطار'
      />
      <MealSwiper link='/meals/query?time=lunch&page=' label='وجبات الغداء' />
      <MealSwiper link='/meals/query?time=snack&page=' label='وجبات الخفيفة' />
      <MealSwiper link='/meals/query?time=dinner&page=' label='وجبات العشاء' />
    </Flex>
  );
}
