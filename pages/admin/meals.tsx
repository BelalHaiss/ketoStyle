import { Flex, Text, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import CategoryTabs from 'src/components/meals/CategoryTabs';
import { Category, Time, Count } from 'src/ts/meal.types';
import { fetchMealsCount, fetchAllMeals } from 'src/utils/fetchData';
import { MealBox } from 'src/components/meals/MealBox';
const allCategories: Category[] = [
  {
    label: 'الدجاج',
    value: 'chicken'
  },
  {
    label: 'الاسماك',
    value: 'fish'
  },
  {
    label: 'الروبيان',
    value: 'caridea'
  },
  {
    label: 'لحم الابقار',
    value: 'cow'
  },
  {
    label: 'لحم الاغنام',
    value: 'sheep'
  },
  {
    label: 'لحم الجمال',
    value: 'camel'
  }
];
const allTimes: Time[] = [
  {
    value: 'breakfast',
    label: 'الإفطار'
  },
  {
    value: 'lunch',
    label: 'الغداء'
  },
  {
    value: 'dinner',
    label: 'العشاء'
  },
  {
    value: 'snack',
    label: 'الوجبات الخفيفه'
  }
];

const countsInitialState = () => {
  const counts: Count | any = {};
  for (const category of allCategories) {
    counts[category.value] = {
      categoryCounts: 0,
      timesCounts: {
        breakfast: 0,
        lunch: 0,
        dinner: 0,
        snack: 0
      }
    };
  }
  return counts;
};

export default function Meals() {
  const [query, setQuery] = useState({
    category: allCategories[0].value,
    time: allTimes[0].value
  });
  const [counts, setCounts] = useState(countsInitialState);
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetchMealsCount(setCounts);
  }, []);
  useEffect(() => {
    fetchAllMeals(query, setMeals);
  }, [query]);

  function onEdit() {
    alert('edit');
  }
  return (
    <Flex layerStyle={'flexCenter'} gap='3' flexDir='column' p='1'>
      <Flex justify='center' w='100%' align='center'>
        <Text
          fontSize={{ base: 'lg', md: '3xl' }}
          ml={{ base: 'auto', md: '0' }}
          fontWeight='bold'
        >
          صفحة الوجبات
        </Text>

        <Button
          size={{ base: 'xs', md: 'md' }}
          colorScheme={'green'}
          position={'absolute'}
          left='20px'
        >
          اضف وجبة جديدة
        </Button>
      </Flex>

      <CategoryTabs
        data={{
          times: allTimes,
          categories: allCategories,
          counts,
          query,
          setQuery
        }}
      />

      <Flex gap='2' my='3' mx='auto' layerStyle={'flexCenter'} wrap='wrap'>
        {meals.map((meal, i) => (
          <MealBox
            key={i}
            width='190px'
            size='lg'
            onEdit={onEdit}
            isAdmin={true}
            meal={meal}
          />
        ))}
      </Flex>
    </Flex>
  );
}
