import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Role } from 'src/ts/store.types';
import { CustomFormControl } from 'src/utils/FormControl';
import { registerAdmin } from 'src/utils/fetchData';
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type User = {
  name: string;
  email: string;
  role: Role | string;
  password: string;
  lastName: string;
};
const initUser = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  role: ''
};
const userFields = [
  {
    name: 'name',
    label: 'الاسم',
    type: 'text',
    value: ''
  },
  {
    name: 'lastName',
    label: 'اسم العائلة',
    type: 'text',
    value: ''
  },
  {
    name: 'email',
    label: 'البريد الالكتروني',
    type: 'text',
    value: ''
  },
  {
    name: 'password',
    label: 'كلمة السر',
    type: 'text',
    value: ''
  },
  {
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
  }
];
export function AddAgent({ isOpen, onClose }: Props) {
  const [userData, setUserData] = useState<User | any>(initUser);
  useEffect(() => {
    return () => onClose();
  }, []);
  function onChange(name: string, value: string) {
    setUserData({ ...userData, [name]: value });
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={'center'}>اضف موظف</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {userFields.map((field: any, i) => (
              <CustomFormControl
                onChange={onChange}
                key={i}
                {...field}
                value={userData[field.name]}
              />
            ))}
          </ModalBody>

          <ModalFooter justifyContent={'space-around'}>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              الغاء{' '}
            </Button>
            <Button
              colorScheme={'green'}
              onClick={() => registerAdmin(userData, onClose)}
            >
              حفظ البيانات
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
