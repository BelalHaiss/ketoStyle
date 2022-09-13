import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider
} from '@chakra-ui/react';

import { useRouter } from 'next/router';
import { MdManageAccounts } from 'react-icons/md';
import { USER } from 'src/ts/store.types';
import { fetcher } from 'src/utils/fetcher';

type Props = {
  user: USER;
  setUser: (user: USER | null) => void;
  setProfile: (profile: any) => void;
};
export default function ProfileMenu({ user, setUser, setProfile }: Props) {
  const router = useRouter();
  function logout() {
    setUser(null);
    fetcher({ url: '/users/logout', method: 'post' });
    router.replace('/');
  }
  type Profile = 'measurements' | 'payments' | 'account' | 'meal';
  type ListItem = {
    label: string;
    value: Profile;
  };
  const list: ListItem[] = [
    {
      label: 'حسابي',
      value: 'account'
    },
    {
      label: 'قياساتي',
      value: 'measurements'
    },
    { label: 'وجباتي', value: 'meal' },
    {
      label: 'الاشتراكات',
      value: 'payments'
    }
  ];
  function handleRoute(value: Profile) {
    setProfile(value);
    router.replace(`/profile`);
  }
  return (
    <Menu>
      <MenuButton
        rightIcon={<MdManageAccounts fontSize='23px' />}
        as={Button}
        colorScheme='orange'
      >
        {user.profile.name.slice(0, 13)}
      </MenuButton>
      <MenuList>
        {!user.role && (
          <MenuGroup title='البيانات الشخصية'>
            {list.map((item: ListItem, index) => (
              <MenuItem onClick={() => handleRoute(item.value)} key={index}>
                {item.label}
              </MenuItem>
            ))}
          </MenuGroup>
        )}
        {user.role && (
          <MenuItem onClick={() => handleRoute(list[0].value)}>
            {list[0].label}
          </MenuItem>
        )}
        <MenuDivider />
        <MenuItem onClick={logout}>تسجيل الخروج</MenuItem>
      </MenuList>
    </Menu>
  );
}
