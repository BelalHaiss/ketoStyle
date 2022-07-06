import {
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  AccordionIcon
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import AdminHoc from 'src/components/AdminHOC';
import { Workout } from 'src/ts/store.types';
import Loader from 'src/utils/Loader';
import WorkoutAccordin from 'src/components/admin/workout/WorkoutAccordion';
import { fetchWorkouts } from 'src/utils/fetchData';
function Workouts() {
  const [loading, setLoading] = useState(true);
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  useEffect(() => {
    fetchWorkouts(setWorkouts);
  }, []);
  useEffect(() => {
    if (workouts.length) {
      setLoading(false);
    }
  }, [workouts]);

  return (
    <Flex layerStyle='flexCenter' flexDir='column' p='1'>
      <Text fontSize='3xl' fontWeight='bolder'>
        صفحة التمارين
      </Text>
      {loading && <Loader />}
      <Accordion w='100%'>
        {!loading &&
          workouts.map((workout: Workout, i) => (
            <WorkoutAccordin workout={workout} key={i} />
          ))}
      </Accordion>
    </Flex>
  );
}

export default AdminHoc(Workouts);
