import { Flex } from '@chakra-ui/react';
import AdminHoc from 'src/components/AdminHOC';
import Loader from 'src/utils/Loader';
import { useState } from 'react';
import TheQuery from 'src/components/admin/utils/TheQuery';
import { Subscriptions } from 'src/ts/store.types';
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
    label: 'نوع الاشتراك',
    name: 'priceId',
    type: 'string'
  },
  {
    label: 'تاريخ البداية ',
    name: 'start',
    type: 'date'
  },
  {
    label: 'تاريخ الانتهاء ',
    name: 'end',
    type: 'date'
  },

  {
    label: 'صلاحية الاشتراك',
    name: 'validaty',
    custom: (item: any) => (new Date(item.end) > new Date() ? 'صالح' : 'منتهي'),
    type: 'boolean'
  }
];
function Sales() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Subscriptions[]>([]);
  async function fetchSubscriptions(query: string) {
    setLoading(true);
    const res: Subscriptions[] = await fetcher({
      url: `/subscriptions/all?${query}`
    });

    if (res?.length) {
      setData(res);
    } else {
      ToastUtil('لا يوجد نتائج', 'info');
    }
    setLoading(false);
  }
  async function onCategory(status: string, category: string) {
    fetchSubscriptions(`category=${category}`);
  }

  async function onSearch(value: string) {
    fetchSubscriptions(`email=${value}`);
  }
  return (
    <Flex flexDir='column'>
      <TheQuery
        type='subscriptions'
        search={{ placeholder: 'بحث بالايميل', onSearch }}
        onCategory={onCategory}
      />
      {loading && <Loader />}

      {!loading && <DataTable headers={tableHeaders} row={data} />}
    </Flex>
  );
}

export default AdminHoc(Sales, 'sales');
