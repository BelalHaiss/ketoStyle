import { Flex, Text, Button, Image } from '@chakra-ui/react';

import { useStore } from 'src/store';
import MealSquare from 'src/components/meals/MealSquare';
import { BackButton } from 'src/utils/BackButton';
export default function MealView() {
  const mealView = useStore((state) => state.mealView);
  const user = useStore((state) => state.user);

  return (
    <Flex
      flexDir='column'
      color='orange.800'
      layerStyle={'flexCenter'}
      position='relative'
      p='2'
      gap='2'
    >
      <BackButton path={user?.role ? '/admin/meals' : 'meals'} />
      {mealView && (
        <>
          <Image
            mt={{ base: '8', md: '1' }}
            src={mealView.image.url}
            rounded='3xl'
            alt='meal'
            w={{ base: '60%', md: '40%' }}
          />
          <Flex align='center' flexDir={'column'}>
            <Text fontSize={{ base: 'lg', md: '3xl' }} fontWeight='bold'>
              {mealView.name}
            </Text>
            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight=''>
              مدة تحضير الوجبة {mealView.duration} دقائق
            </Text>
          </Flex>

          <Flex
            justify={'space-around'}
            flexDir={{ base: 'column', md: 'row' }}
            w='100%'
            gap='3'
            align='center'
          >
            <MealSquare
              isValues
              title='القيم الغذائيه'
              texts={[
                ` السعرات الحرارية: ${mealView.calories} س`,
                `الكاربوهيدرات: ${mealView.carbs} غم`,
                `البروتين: ${mealView.proteins} غم`,
                `الدهون: ${mealView.fats} غم`
              ]}
            />
            <MealSquare
              isValues={false}
              title='المقادير'
              texts={mealView.components}
            />
          </Flex>

          <Flex flexDir={'column'} my='4' w='80%' mx='auto' gap='2'>
            <Text fontSize={{ base: 'lg', md: '3xl' }} fontWeight='bold'>
              طريقة التحضير
            </Text>
            <Text>{mealView.steps}</Text>
          </Flex>

          {!user?.role && (
            <Button colorScheme={'orange'} w='70%' mx='auto'>
              اضف الوجبة الي القائمة
            </Button>
          )}
        </>
      )}
    </Flex>
  );
}