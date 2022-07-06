import { Flex, Text, Icon } from '@chakra-ui/react';
import { FaUsersCog, FaUserLock } from 'react-icons/fa';
import { GiMeal } from 'react-icons/gi';
import { CgGym } from 'react-icons/cg';
import { MdOutlinePayments, MdPriceChange } from 'react-icons/md';
import { FcSalesPerformance } from 'react-icons/fc';
import AdminHoc from 'src/components/AdminHOC';
import { useRouter } from 'next/router';
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
  return (
    <Flex gap='5' wrap='wrap' layerStyle={'flexResponsive'}>
      {pages.map((page, index) => (
        <Flex
          flexDir={'column'}
          cursor={'pointer'}
          layerStyle={'flexCenter'}
          minW={{ base: '250px', md: '300px' }}
          minH={{ base: '100px', md: '200px' }}
          borderRadius={'xl'}
          bg='orange.200'
          onClick={() => router.replace(`/admin/${page.path}`)}
          transition='all 0.2s ease-out'
          transform={'scale(0.9)'}
          _hover={{
            transform: 'scale(1)',
            transition: 'all 0.2s ease-out',
            color: 'orange.50',
            borderColor: 'orange.500',
            bg: 'orange.500'
          }}
          key={index}
        >
          <Icon as={page.icon} boxSize={{ base: '30', md: '50' }} />
          <Text fontWeight='bold' fontSize={{ base: 'lg', md: '4xl' }}>
            {page.label}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}

export default AdminHoc(AdminDashboard);
