import { Flex, Text, Badge } from '@chakra-ui/react';
import { Payment as PaymentType } from 'src/ts/store.types';
import { useState } from 'react';
import { useAsync } from 'src/customHooks/useAsync';
import { useStore } from 'src/store';
import Loader from 'src/utils/Loader';

function categoryLabel(category: 'meal' | 'nutritionist' | 'workout') {
  switch (category) {
    case 'meal':
      return 'باقة وجبات الكيتو';
    case 'workout':
      return 'باقة التمارين ';
    case 'nutritionist':
      return 'باقة اخصائي التغئية';
  }
}
export default function AllPayment() {
  const [loading, setLoading] = useState(true);
  const [isFetched, setIsFetched] = useState(false);
  const [payments, setPayments] = useState<PaymentType[]>([]);
  const user = useStore((state) => state.user);
  useAsync(
    isFetched
      ? null
      : {
          url: '/payments/user/' + user!._id
        },
    setPayments,
    {
      onRequest: () => setIsFetched(true),
      onSuccess: (data) => {
        setLoading(false);
        console.log(data);
      }
    }
  );
  return (
    <Flex
      flexDir='column'
      gap='3'
      bg='orange.200'
      borderRadius={'lg'}
      w='100%'
      p='2'
    >
      {loading && <Loader />}
      {!loading && payments.length === 0 && (
        <Text fontWeight='bold' textAlign={'center'}>
          لا يوجد اي مدفوعات
        </Text>
      )}
      {!loading &&
        payments.length > 0 &&
        payments.map((payment, i) => <Payment key={i} payment={payment} />)}
    </Flex>
  );
}

function Payment({ payment }: { payment: PaymentType }) {
  return (
    <Flex
      bg='white'
      p='2'
      px='3'
      borderRadius='xl'
      boxShadow='xl'
      justify='space-between'
      w='100%'
      align='center'
    >
      <Flex flexDir='column' gap='2' align='center'>
        <Flex gap='2' align='center'>
          <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight='bold'>
            {' '}
            {payment.paid} دولار
          </Text>
          <Badge
            p={{ base: '1', md: '2' }}
            fontSize={{ base: 'md', md: 'lg' }}
            borderRadius={'full'}
            colorScheme={payment.status === 'success' ? 'green' : 'red'}
          >
            {' '}
            {payment.status === 'success' ? 'عملية ناجحة' : 'عملية فشلت'}
          </Badge>
        </Flex>

        <Text>{new Date(payment.createdAt).toLocaleDateString('ar')}</Text>
      </Flex>
      <Badge
        fontSize={{ base: 'md', md: 'lg' }}
        p={{ base: '2', md: '5' }}
        borderRadius={'full'}
        colorScheme='purple'
      >
        {categoryLabel(payment.category)}
      </Badge>
    </Flex>
  );
}
