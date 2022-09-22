import { Flex, Text, Button } from '@chakra-ui/react';
import { BackButton } from 'src/utils/BackButton';
import StatBox, { StatType } from 'src/components/admin/utils/StatBox';
import Search from 'src/components/admin/utils/Search';
import { useState, useEffect } from 'react';
import { FaUsers } from 'react-icons/fa';
import { USER } from 'src/ts/store.types';
import AdminHoc from 'src/components/AdminHOC';
import { RiNumbersFill } from 'react-icons/ri';
import { DataTable } from 'src/components/admin/utils/DataTable';
import { countUsers, SearchUserByNameOrPhone } from 'src/utils/fetchData';
import ToastUtil from 'src/utils/Toast';
import EditUser from 'src/components/admin/EditUsers';
import { fetcher } from 'src/utils/fetcher';
function Users() {
  const [usersCount, setUserCount] = useState<StatType>({
    icon: FaUsers,
    label: 'عدد المستخدمين',
    number: 0
  });
  const [resultCount, setResultCount] = useState<StatType>({
    icon: RiNumbersFill,
    label: 'عدد النتائج',
    number: 0
  });
  const [usersResult, setUsersResult] = useState<USER[]>([]);
  const [showTable, setShowTable] = useState(false);
  const [selectedUser, setSelectedUser] = useState<USER | any>(null);
  const tableHeaders = [
    {
      label: 'الاسم',
      name: 'name',
      parentField: 'profile',
      type: 'string'
    },
    {
      label: 'الهاتف',
      name: 'phone',
      parentField: 'profile',
      type: 'string'
    },
    {
      label: 'البريد الالكتروني',
      name: 'email',
      parentField: 'profile',
      type: 'string'
    },
    {
      label: 'تاريخ انشاء الحساب',
      name: 'createdAt',
      type: 'date'
    },
    {
      label: 'تاريخ آخر تعديل',
      name: 'updatedAt',
      type: 'date'
    }
  ];
  function onLineClick(id: string) {
    setShowTable(false);
    setSelectedUser(usersResult.find((user) => user._id === id));
  }
  async function onSearch(value: string) {
    const res = await SearchUserByNameOrPhone(value);
    if (res) {
      if (res.name === 'custom') {
        ToastUtil('لاتوجد نتائج', 'error');
      } else if (Array.isArray(res)) {
        setShowTable(true);
        setResultCount({
          ...resultCount,
          number: res.length
        });

        setUsersResult(res);
      }
    }
  }
  async function showAllUsers() {
    const res = await fetcher({ url: '/admin/allusers' });
    setShowTable(true);
    setResultCount({
      ...resultCount,
      number: res.length
    });

    setUsersResult(res);
  }
  useEffect(() => {
    countUsers(setUserCount);
  }, []);
  return (
    <Flex
      p='2'
      flexDir={'column'}
      position='relative'
      layerStyle='flexCenter'
      gap='3'
    >
      <BackButton path='/admin' />
      <Text fontSize='3xl' fontWeight='bolder'>
        بيانات العملاء
      </Text>

      <Flex
        justify='space-between'
        my='4'
        gap='2'
        layerStyle={'flexResponsive'}
        w='100%'
      >
        <StatBox {...usersCount} />
        <Search placeholder='ابحث برقم الهاتف او الايميل' onSearch={onSearch} />
        <Button onClick={showAllUsers} colorScheme={'purple'}>
          اظهار جميع العملاء
        </Button>
        <StatBox {...resultCount} />
      </Flex>
      {/* user table */}
      {showTable && (
        <DataTable
          headers={tableHeaders}
          row={usersResult}
          onLineClick={onLineClick}
        />
      )}
      {selectedUser && !showTable && <EditUser user={selectedUser} />}
    </Flex>
  );
}

export default AdminHoc(Users, 'admin');
