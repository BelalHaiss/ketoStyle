import { Flex, Text, Icon } from '@chakra-ui/react';
import { FaUsersCog, FaUserLock } from 'react-icons/fa';
import { GiMeal } from 'react-icons/gi';
import { CgGym } from 'react-icons/cg';
import { MdOutlinePayments, MdPriceChange } from 'react-icons/md';
import { FcSalesPerformance } from 'react-icons/fc';
import AdminHoc from 'src/components/AdminHOC';
import { useRouter } from 'next/router';
import { useStore } from 'src/store';
import { PageBox } from 'src/components/admin/PageBox';
const pages = [
  {
    label: 'بيانات العملاء',
    icon: FaUsersCog,
    path: 'users'
  },
  {
    label: 'الوجبات',
    icon: GiMeal,
    path: 'meals'
  },
  {
    label: 'صلاحيات ادارية',
    icon: FaUserLock,
    path: 'permissions'
  },
  {
    label: 'الاشتراكات',
    icon: MdOutlinePayments,
    path: 'subscriptions'
  },
  {
    label: 'الاسعار',
    icon: MdPriceChange,
    path: 'prices'
  },
  {
    label: 'التمارين',
    icon: CgGym,
    path: 'workouts'
  },
  {
    label: 'المبيعات',
    icon: FcSalesPerformance,
    path: 'sales'
  }
];
function AdminDashboard() {
  const router = useRouter();
  const user = useStore((state) => state.user);
  return (
    <Flex gap='5' wrap='wrap' layerStyle={'flexResponsive'}>
      {pages.map((page, index) => {
        if (user?.role === 'admin') {
          return <PageBox key={index} page={page} />;
        } else if (user?.role === 'meals' && page.path === 'meals') {
          return <PageBox key={index} page={page} />;
        } else if (user?.role === 'workouts' && page.path === 'workouts') {
          return <PageBox key={index} page={page} />;
        } else if (
          user?.role === 'subscriptions' &&
          page.path === 'subscriptions'
        ) {
          return <PageBox key={index} page={page} />;
        }
        return;
      })}
    </Flex>
  );
}

export default AdminHoc(AdminDashboard, '/');
