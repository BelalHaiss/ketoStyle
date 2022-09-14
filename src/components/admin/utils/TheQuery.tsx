import {
  Flex,
  Radio,
  RadioGroup,
  Select,
  Button,
  Text
} from '@chakra-ui/react';
import { useState } from 'react';
import { useStore } from 'src/store';
import Search from './Search';

type QueryType = 'search' | 'category' | 'date';
type Props = {
  type: 'payments' | 'subscriptions';
  onCategory: (status: string, plan: string) => void;
  onDate?: (status: string, start: string, end: string) => void;
  search: { placeholder: string; onSearch: (value: string) => void }; // search with email
};

const allQueryes: { label: string; value: QueryType }[] = [
  {
    label: 'ايميل',
    value: 'search'
  },
  {
    label: 'نوع الاشتراك',
    value: 'category'
  },
  {
    label: 'تاريخ',
    value: 'date'
  }
];
export default function TheQuery({ type, onCategory, search, onDate }: Props) {
  const [queryType, setQueryType] = useState<QueryType>('search');
  const [status, setStatus] = useState('success');
  const [category, setCategory] = useState('');
  const [theDate, setTheDate] = useState({
    start: '',
    end: ''
  });
  const prices = useStore((state) => state.prices);
  function handleQuerySubmit() {
    if (queryType === 'category') {
      onCategory(status, category);
    } else if (queryType === 'date' && onDate) {
      onDate(status, theDate.start, theDate.end);
    }
  }
  return (
    <Flex align='center' p='3' wrap='wrap' justify='space-around' w='100%'>
      <Flex flexDir={'column'} align='center' gap='2'>
        <Text fontWeight={'bold'}> طريقة البحث</Text>
        <RadioGroup
          //  @ts-ignore
          onChange={setQueryType}
          value={queryType}
          gap='3'
          display='flex'
          colorScheme='orange'
        >
          {allQueryes.map((query) => {
            if (type === 'subscriptions' && query.value === 'date') return;
            return (
              <Radio key={query.value} value={query.value}>
                {query.label}
              </Radio>
            );
          })}
        </RadioGroup>
      </Flex>

      {queryType === 'search' && (
        <Search
          width='400px'
          placeholder={search.placeholder}
          onSearch={search.onSearch}
        />
      )}
      {queryType !== 'search' && (
        <Flex w='400px' gap='2'>
          {queryType === 'category' && (
            <Select
              variant='filled'
              onChange={(e) => setCategory(e.target.value)}
              placeholder='بحث بنوع الاشتراك'
            >
              {prices.map((plan) => (
                <option key={plan._id} value={plan._id}>
                  {plan.label}
                </option>
              ))}
            </Select>
          )}

          {queryType === 'date' && (
            <Flex gap='3'>
              <Flex flexDir='column' align='center' gap='1'>
                <Text fontWeight={'bold'}> من</Text>
                <input
                  onChange={(e) => {
                    const { value } = e.target;
                    value && setTheDate((old) => ({ ...old, start: value }));
                  }}
                  style={{ borderRadius: '15px', padding: '5px' }}
                  type={'date'}
                />
              </Flex>

              <Flex flexDir='column' align='center' gap='1'>
                <Text fontWeight={'bold'}> الي</Text>
                <input
                  style={{ borderRadius: '15px', padding: '5px' }}
                  type={'date'}
                  onChange={(e) => {
                    const { value } = e.target;
                    value && setTheDate((old) => ({ ...old, end: value }));
                  }}
                />
              </Flex>
            </Flex>
          )}
          <Button mr='auto' onClick={handleQuerySubmit} colorScheme='orange'>
            {' '}
            بحث{' '}
          </Button>
        </Flex>
      )}

      {type === 'payments' && (
        <Flex flexDir={'column'} align='center' gap='2'>
          <Text fontWeight={'bold'}> حالة الدفع</Text>

          <RadioGroup
            gap='3'
            display='flex'
            colorScheme='orange'
            onChange={setStatus}
            value={status}
          >
            <Radio value={'success'}>ناجح</Radio>
            <Radio value={'fail'}>فشل</Radio>
          </RadioGroup>
        </Flex>
      )}
    </Flex>
  );
}
