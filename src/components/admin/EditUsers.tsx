import {
  Flex,
  Tabs,
  Tab,
  TabPanels,
  TabList,
  TabPanel
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { USER } from 'src/ts/store.types';
import Account from 'src/components/profile/Account';

import Measurements from 'src/components/profile/Measurements';
type Props = {
  user: USER;
  isAdmin?: boolean;
};
function EditUser({ user, isAdmin = true }: Props) {
  function getIndex(profile: 'measurements' | 'payments' | 'account') {
    let index = 0;
    switch (profile) {
      case 'account':
        index = 0;
        break;
      case 'measurements':
        index = 1;
        break;
      case 'payments':
        index = 2;
        break;
      default:
        index = 0;
        break;
    }
    return index;
  }

  return (
    <Tabs w='100%' isFitted variant='soft-rounded' colorScheme='orange'>
      <TabList mb='1em'>
        <Tab>حسابي </Tab>
        {<Tab>قياساتي</Tab>}
      </TabList>
      <TabPanels>
        <TabPanel>
          <Account isAdminUpdate={isAdmin} user={user} />
        </TabPanel>
        {
          <TabPanel>
            <Measurements
              shouldRender={isAdmin}
              isAdminUpdate={isAdmin}
              user={user}
            />
          </TabPanel>
        }

        <TabPanel>
          <p>الاشتراكات</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
export default EditUser;
