import { Flex, Text, Badge, Image, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Meal } from 'src/ts/store.types';
import { useStore } from 'src/store';
interface MealType extends Meal {
  _id: string;
  addedBy: string;
}
type Props = {
  meal: MealType;
  width: string;
  size: 'sm' | 'lg';
};

function height(width: string) {
  const h = +width.replace('px', '') * 1.3;
  return `${h}px`;
}
export function MealBox({ meal, width, size }: Props) {
  const router = useRouter();
  const setMealView = useStore((state) => state.setMealView);
  const user = useStore((state) => state.user);
  function onView() {
    setMealView(meal);
    router.replace('/mealView');
  }
  function onEdit() {
    setMealView(meal);
    router.replace('/admin/addMeal?edit=' + meal._id);
  }
  const [focus, setFocus] = useState(false);
  return (
    <Flex
      flexDir={'column'}
      p='1'
      gap='1'
      bg={'orange.100'}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      rounded={'xl'}
      color='orange.800'
      w={width}
      h={height(width)}
      layerStyle={'flexCenter'}
    >
      <Image src={meal.image.url} alt='meal' mb='3' rounded={'3xl'} w='120px' />
      {!focus ? (
        <Flex align='center' gap='2' h='50%' flexDir='column'>
          <Text fontSize={size === 'sm' ? 'lg' : 'xl'} fontWeight={'bold'}>
            {meal.name}
          </Text>
          <Text> {meal.duration} دقائق</Text>
          <Badge
            colorScheme='red'
            variant='subtle'
            fontSize='sm'
            rounded={'lg'}
            p='1'
          >
            {meal.calories} سعره
          </Badge>
        </Flex>
      ) : (
        <Flex h='50%' align='center' flexDir='column' gap='3'>
          {(user?.role === 'admin' || user?._id === meal.addedBy) && (
            <Button
              size={{ base: 'sm', md: 'md' }}
              onClick={onEdit}
              colorScheme='yellow'
            >
              تعديل
            </Button>
          )}
          <Button
            size={{ base: 'sm', md: 'md' }}
            colorScheme='orange'
            w={'90%'}
            onClick={onView}
          >
            تحضير الوجبة
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
