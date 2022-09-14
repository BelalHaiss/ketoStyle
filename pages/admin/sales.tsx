import { Flex } from '@chakra-ui/react';
import AdminHoc from 'src/components/AdminHOC';
import Loader from 'src/utils/Loader';
import { useState } from 'react';
import TheQuery from 'src/components/admin/utils/TheQuery';
import { Payment } from 'src/ts/store.types';
import { fetcher } from 'src/utils/fetcher';
import ToastUtil from 'src/utils/Toast';
import { DataTable } from 'src/components/admin/utils/DataTable';
const tableHeaders = [
  {
    label: 'الاسم',
    name: 'name',
    parentField: 'profile',
    custom: (item: any) =>
      `${item.userId.profile.name} ${item.userId.profile.lastName}`,
    type: 'string'
  },
  {
    label: 'المدفوع (دولار)',
    name: 'paid',
    type: 'string'
  },
  {
    label: 'نوع الاشتراك',
    name: 'priceId',
    type: 'string'
  },
  {
    label: 'تاريخ ',
    name: 'createdAt',
    type: 'date'
  },
  {
    label: 'وسيلة الدفع ',
    name: 'method',
    parentField: 'paypal',
    type: 'string'
  },
  {
    label: 'الحالة ',
    name: 'status',
    type: 'string'
  },
  {
    label: 'fraud',
    name: 'fraud',
    type: 'string'
  },
  {
    label: 'يوجد اشتراك قديم ',
    name: 'alreadySubscriped',
    type: 'string'
  }
];
function Sales() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Payment[]>([]);
  async function fetchPayments(query: string) {
    setLoading(true);
    const res: Payment[] = await fetcher({
      url: `/payments/all?${query}`
    });

    if (res?.length) {
      setData(res);
    } else {
      ToastUtil('لا يوجد نتائج', 'info');
    }
    setLoading(false);
  }
  async function onCategory(status: string, category: string) {
    fetchPayments(`category=${category}&status=${status}`);
  }
  async function onDate(status: string, start: string, end: string) {
    fetchPayments(`date=date&status=${status}&start=${start}&end=${end}`);
  }
  async function onSearch(value: string) {
    fetchPayments(`email=${value}`);
  }
  return (
    <Flex flexDir='column'>
      <TheQuery
        type='payments'
        search={{ placeholder: 'بحث بالايميل', onSearch }}
        onCategory={onCategory}
        onDate={onDate}
      />
      {loading && <Loader />}

      {!loading && <DataTable headers={tableHeaders} row={data} />}
    </Flex>
  );
}

export default AdminHoc(Sales, 'sales');
