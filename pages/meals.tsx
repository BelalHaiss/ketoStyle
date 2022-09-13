import { Flex, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import Water from 'src/components/userMeal/Water';
import Status from 'src/components/userMeal/Status';
import { USER } from 'src/ts/store.types';
import { UserMeal } from 'src/components/userMeal/Meal';
import { UserCalories } from 'src/components/UserCalories/UserCalories';
import SubscripedHOC from 'src/components/SubscriptionHOC';

type Props = {
  user: USER;
};
function Meals({ user }: Props) {
  useEffect(() => {}, []);
  return (
    <Flex gap='5' flexDir='column'>
      <UserCalories />
      <UserMeal />
      <Water user={user} />
      <Status user={user} />
    </Flex>
  );
}

export default SubscripedHOC(Meals, 'meal');
