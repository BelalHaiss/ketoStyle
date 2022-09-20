import { Flex, Text, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BackButton } from 'src/utils/BackButton';
import { AddAgent } from 'src/components/admin/AddAgent';
import AdminHoc from 'src/components/AdminHOC';
import {
  getAgents,
  changePermission,
  deleteRoledPerson
} from 'src/utils/fetchData';
import { AdminUser } from 'src/ts/store.types';
import { CustomFormControl } from 'src/utils/FormControl';
import ToastUtil from 'src/utils/Toast';
const agentsSelect = {
  label: 'اختر الموظف',
  name: 'agents',
  options: [],
  value: '',
  type: 'select'
};
const agentRoles = {
  name: 'role',
  label: 'الصلاحية',
  type: 'select',
  value: '',
  options: [
    { value: 'admin', label: 'مدير' },
    { value: 'meals', label: 'مدخل وجبات' },
    { value: 'workouts', label: 'اخصائي رياضي' },
    {
      value: 'subscriptions',
      label: 'اخصائي تغذية'
    }
  ]
};
function Permissions() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const [agents, setAgents] = useState<AdminUser[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<
    AdminUser | undefined | null
  >(null);
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [isUpdate, setIsUpdate] = useState(false);
  function onSelectChange(name: string, value: string) {
    const theAgent = agents.find((agent: AdminUser) => agent._id === value);
    setSelectedAgent(theAgent);
    setSelectedRole(theAgent?.role ?? '');
  }
  function onRoleChange(name: string, value: string) {
    setSelectedRole(value);
    setIsUpdate(true);
  }
  useEffect(() => {
    getAgents(setAgents);
  }, []);
  return (
    <Flex position={'relative'} layerStyle='flexCenter' flexDir='column' p='3'>
      <BackButton path='/admin' />
      <Text fontSize='3xl' fontWeight='bolder'>
        صلاحيات ادارية
      </Text>
      <Button my='4' w='70%' mx='auto' onClick={onOpen} colorScheme={'green'}>
        اضف موظف
      </Button>

      <AddAgent onClose={onClose} isOpen={isOpen} />

      <Flex flexDir='column' gap='4' my='5'>
        <Flex gap='3' fontSize={'3xl'} fontWeight={'bold'} align='center'>
          <Text>عدد الموظفين </Text>
          <Text color='orange.800'>{agents.length}</Text>
        </Flex>

        <CustomFormControl
          {...agentsSelect}
          options={agents.map((agent) => ({
            label: agent.profile.name + ' ' + agent.profile.lastName,
            value: agent._id
          }))}
          value={selectedAgent?._id ?? ''}
          onChange={onSelectChange}
        />

        {selectedAgent && (
          <>
            <CustomFormControl
              {...agentRoles}
              value={selectedRole}
              onChange={onRoleChange}
            />
            <Button
              colorScheme='red'
              onClick={() => {
                ToastUtil('جاري الحذف', 'warning');
                deleteRoledPerson(selectedAgent._id);
              }}
            >
              حذف الموظف
            </Button>
          </>
        )}

        {isUpdate && (
          <Flex w='100%' justify='space-around'>
            <Button
              onClick={() => {
                changePermission({
                  userId: selectedAgent?._id ?? '',
                  role: selectedRole
                });
                setIsUpdate(false);
              }}
              colorScheme={'green'}
            >
              حفظ التغييرات
            </Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default AdminHoc(Permissions, 'admin');
