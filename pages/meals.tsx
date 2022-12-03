import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Water from "src/components/userMeal/Water";
import Status from "src/components/userMeal/Status";
import AddCustomMeal from "src/components/userMeal/AddCustomMeal";
import { USER } from "src/ts/store.types";
import { UserMeal } from "src/components/userMeal/Meal";
import { UserCalories } from "src/components/UserCalories/UserCalories";
import SubscripedHOC from "src/components/SubscriptionHOC";

type Props = {
  user: USER;
  endDate: string;
  isSubscriped: any;
};
function Meals({ user, endDate, isSubscriped }: Props) {
  useEffect(() => {}, []);
  const [fetchCalories, setFetchCalories] = useState(false);
  useEffect(() => {
    // track Page View for snapchat
    window.handleSnap("PAGE_VIEW");
  }, []);
  return (
    <>
      {endDate && (
        <Text textAlign="center" fontSize="xs">
          تاريخ انتهاء الاشتراك : {endDate}
        </Text>
      )}
      <Flex gap="5" flexDir="column">
        <UserCalories
          setFetchCalories={setFetchCalories}
          fetchCalories={fetchCalories}
        />
        <UserMeal />
        <AddCustomMeal setFetchCalories={setFetchCalories} />
        <Water user={user} />
        <Status user={user} />
      </Flex>
    </>
  );
}

export default SubscripedHOC(Meals, "meal");
