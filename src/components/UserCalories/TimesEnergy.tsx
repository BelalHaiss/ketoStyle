import { Flex, Text, Badge } from '@chakra-ui/react';
import { MealTimes, Meal } from 'src/ts/store.types';

import { getEnergyLabel, getTimeLabel } from './utils';

export type MealsData = { [key in MealTimes]: Meal[] };
export type CustomMeal = {
  carbs: number;
  proteins: number;
  fats: number;
  calories: number;
};
type Props = {
  data: MealsData;
};
function energyBadge(meals: Meal[]) {
  const carbs = {
    label: 'الكربوهيدرات',
    colorScheme: 'purple',
    value: meals.reduce((prev, next) => prev + +next.carbs, 0)
  };
  const proteins = {
    label: 'البروتينات',
    colorScheme: 'red',
    value: meals.reduce((prev, next) => prev + +next.proteins, 0)
  };
  const fats = {
    label: 'الدهون',
    colorScheme: 'green',
    value: meals.reduce((prev, next) => prev + +next.fats, 0)
  };
  return [carbs, proteins, fats];
}
export function TimesEnergy({ data }: Props) {
  return (
    <Flex w='100%' flexDir='column' gap='3' align='center'>
      {
        // @ts-ignore
        Object.keys(data).map((item: MealTimes, i) => (
          <Flex key={i} w='100%' align='center' justify='space-around'>
            <Text
              pt='2'
              color='orange.800'
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight='bold'
            >
              وجبات {getTimeLabel(item)}
            </Text>
            <Flex
              align='center'
              py='2'
              px='3'
              mt='2'
              bg='white'
              borderRadius='xl'
              justify='space-around'
              w='75%'
            >
              {energyBadge(data[item]).map((energy, i) => (
                <Badge
                  className='energyBadge'
                  fontSize={{ base: '7px', md: '13px' }}
                  colorScheme={energy.colorScheme}
                  key={i}
                >
                  {' '}
                  {`${energy.label} ${energy.value} جم`}{' '}
                </Badge>
              ))}
            </Flex>
          </Flex>
        ))
      }
    </Flex>
  );
}
