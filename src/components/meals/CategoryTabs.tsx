import { Tabs, TabList, Badge, Tab, Flex } from '@chakra-ui/react';
import { MealTimes, MealCategory } from 'src/ts/store.types';
import { Category, Time, Count } from 'src/ts/meal.types';

type Query = {
  category: MealCategory;
  time: MealTimes;
};
type DataProp = {
  categories: Array<Category>;
  times: Array<Time>;
  counts: Count;
  query: Query;
  setQuery: (query: Query) => void;
};
type Props = {
  data: DataProp;
};

export default function CategoryTabs({ data }: Props) {
  return (
    <Flex w='100%' flexDir='column' gap='3'>
      <Tabs isFitted variant={'soft-rounded'} colorScheme='orange'>
        <TabList flexDir={{ base: 'column', md: 'row' }}>
          {data.categories.map((category, index) => (
            <Tab
              _hover={{
                bg: 'orange.300'
              }}
              _selected={{
                bg: 'orange.400',
                color: 'orange.800'
              }}
              key={index}
              onClick={() =>
                data.setQuery({ ...data.query, category: category.value })
              }
            >
              {category.label}
              <Badge
                variant='subtle'
                fontSize='xl'
                colorScheme={'red'}
                mr='auto'
              >
                {data.counts[category.value].categoryCounts}
              </Badge>
            </Tab>
          ))}
        </TabList>
      </Tabs>
      <hr style={{ border: '1px dashed gray' }} />
      <Tabs isFitted variant={'soft-rounded'} colorScheme='orange'>
        <TabList flexDir={{ base: 'column', md: 'row' }}>
          {data.times.map((time, index) => (
            <Tab
              _hover={{
                bg: 'orange.100'
              }}
              onClick={() => data.setQuery({ ...data.query, time: time.value })}
              key={index}
            >
              {time.label}
              <Badge
                variant='subtle'
                fontSize='xl'
                colorScheme={'red'}
                mr='auto'
              >
                {data.counts[data.query.category].timesCounts[time.value]}
              </Badge>
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Flex>
  );
}
