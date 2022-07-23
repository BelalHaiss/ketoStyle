import { Flex, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import Water from 'src/components/userMeal/Water';
import Status from 'src/components/userMeal/Status';
import { USER } from 'src/ts/store.types';
import AuthHOC from 'src/components/UserHOC';
import { UserMeal } from 'src/components/userMeal/Meal';
type Props = {
  user: USER;
};
function Meals({ user }: Props) {
  useEffect(() => {}, []);
  return (
    <Flex gap='5' flexDir='column'>
      <Text>Meals</Text>

      <UserMeal />
      <Water user={user} />
      <Status user={user} />
    </Flex>
  );
}

export default AuthHOC(Meals);
