import {
  Flex,
  Tabs,
  Tab,
  TabPanels,
  TabList,
  TabPanel
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import AuthHOC from 'src/components/UserHOC';
import { useStore } from 'src/store';
import { USER, Profile as ProfilesType } from 'src/ts/store.types';
import Account from 'src/components/profile/Account';
import AllPayment from 'src/components/profile/Payments';
import EditMeal from 'src/components/profile/EditMeals';

import Measurements from 'src/components/profile/Measurements';
type Props = {
  user: USER;
};
function Profile({ user }: Props) {
  const loginedUser = useStore((state) => state.user);
  const [isAdmin, setIsIdmin] = useState(loginedUser?.role ? true : false);
  const profile = useStore((state) => state.profile);
  function getIndex(profile: ProfilesType) {
    let index = 0;
    switch (profile) {
      case 'account':
        index = 0;
        break;
      case 'measurements':
        index = 1;
        break;
      case 'meal':
        index = 2;
        break;
      case 'payments':
        index = 3;
        break;
      default:
        index = 0;
        break;
    }
    return index;
  }
  const [tabIndex, setTabIndex] = useState(!isAdmin ? getIndex(profile) : 0);
  useEffect(() => {
    if (!isAdmin) {
      setTabIndex(getIndex(profile));
    }
  }, [profile]);
  useEffect(() => {
    if (loginedUser?.role) {
      setIsIdmin(true);
    } else {
      setIsIdmin(false);
    }
  }, [loginedUser]);
  return (
    <Tabs
      onChange={(index) => setTabIndex(index)}
      index={tabIndex}
      isFitted
      variant='soft-rounded'
      colorScheme='orange'
    >
      <TabList mb='1em'>
        <Tab>حسابي </Tab>
        {!isAdmin && <Tab>قياساتي</Tab>}
        {!isAdmin && <Tab> وجباتي</Tab>}
        {!isAdmin && <Tab>المدفوعات</Tab>}
      </TabList>
      <TabPanels>
        <TabPanel>
          <Account user={user} />
        </TabPanel>
        {!isAdmin && (
          <TabPanel>
            <Measurements shouldRender={!isAdmin} user={user} />
          </TabPanel>
        )}

        {!isAdmin && (
          <TabPanel>
            <EditMeal />
          </TabPanel>
        )}
        {!isAdmin && (
          <TabPanel>
            <AllPayment />
          </TabPanel>
        )}
      </TabPanels>
    </Tabs>
  );
}
export default AuthHOC(Profile);
