import { Flex, Text, Heading, Icon, Alert, AlertIcon } from "@chakra-ui/react";
import { useStore } from "src/store";
import { FcSportsMode } from "react-icons/fc";
import SubscripedHOC from "src/components/SubscriptionHOC";
import WorkoutVideos from "src/components/workout/WorkoutVideos";
import UnSupWorkout from "src/components/UnSupscriptions/UnSub.workout";
import { useEffect } from "react";
function Workout({
  isSubscriped,
  endDate,
}: {
  isSubscriped: boolean;
  endDate: string;
}) {
  const user = useStore((state) => state.user);
  useEffect(() => {
    // track Page View for snapchat
    window.handleSnap("PAGE_VIEW");
  }, []);
  return (
    <Flex px="3" direction="column" mt="5" align="center" justify="center">
      {!isSubscriped && <UnSupWorkout />}
      {isSubscriped && (
        <>
          {endDate && (
            <Text textAlign="center" fontSize="xs">
              تاريخ انتهاء الاشتراك : {endDate}
            </Text>
          )}
          <Heading as="h3" size={{ base: "lg", md: "xl" }} color="orange.800">
            {`مرحبا, ${user?.profile.name} هذه التمارين المخصصة لك لهذا اليوم`}
          </Heading>
          <Text>يمكنك النقر علي الفيديو لمشاهدته وبدا التمرين</Text>

          <WorkoutVideos />

          <Flex
            justify={{ base: "center", md: "space-between" }}
            w="100%"
            px="10"
            align="center"
          >
            <Flex gap="5" flexDir={"column"}>
              <Heading as="h5" size="lg">
                {" "}
                نصائح للتمارين
              </Heading>
              <Text>
                لاتقم بإجهاد نفسك في التمرين وعند شعورك بالتعب الشديد، عليك
                التوقف وفورًا واخذ الراحه بشكل كاف، القسوة في التمارين غير مفيدة
                ابدًا ولها مضار اكثر من منافعها نتمنى لك تمرينًا ممتعًا
              </Text>
            </Flex>

            <Icon
              display={{ base: "none", md: "inline-block" }}
              as={FcSportsMode}
              w="60"
              mr="10"
              h="40"
            />
          </Flex>
        </>
      )}
    </Flex>
  );
}

export default SubscripedHOC(Workout, "meal");
