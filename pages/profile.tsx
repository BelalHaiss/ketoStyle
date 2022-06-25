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
import { USER } from 'src/store';

import Measurements from 'src/components/profile/Measurements';
function Profile({ user }: { user: USER }) {
  const profile = useStore((state) => state.profile);

  function getIndex(profile: 'measurements' | 'payments') {
    let index = 0;
    switch (profile) {
      case 'measurements':
        index = 0;
        break;
      case 'payments':
        index = 1;
        break;
      default:
        index = 0;
        break;
    }
    return index;
  }
  const [tabIndex, setTabIndex] = useState(getIndex(profile));
  useEffect(() => {
    setTabIndex(getIndex(profile));
  }, [profile]);
  return (
    <Tabs
      onChange={(index) => setTabIndex(index)}
      index={tabIndex}
      isFitted
      variant='soft-rounded'
      colorScheme='orange'
    >
      <TabList mb='1em'>
        <Tab>قياساتي</Tab>
        <Tab>الاشتراكات</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Measurements user={user} />
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>الاشتراكات</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
export default AuthHOC(Profile);
