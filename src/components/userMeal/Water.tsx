import { Flex, Text, Icon } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useStore } from 'src/store';
import { USER, Water } from 'src/ts/store.types';

import { BsFillCupFill } from 'react-icons/bs';
import FormAction from 'src/utils/FormActions';
import { AddWater, getWater } from 'src/utils/fetchData';
const initSubmitButton = {
  submitActive: false,
  submitLoading: false,
  loadingText: 'جاري تحديث البيانات'
};
const initWater = {
  cups: 0,
  date: new Date().toLocaleDateString('en')
};
type Props = {
  user: USER;
};
export default function WaterComponent({ user }: Props) {
  const setUser = useStore((state) => state.setUser);

  const [display, setDisplay] = useState('none');

  const [hover, setHover] = useState(false);
  const [submitButton, setSubmitButton] = useState(initSubmitButton);
  const [water, setWater] = useState<Water | any>(initWater);
  const [waterSavedData, setWaterSavedData] = useState<Water | any>(initWater);

  useEffect(() => {
    let mount = { isMount: true };
    getWater(user?._id, setWater, setWaterSavedData, mount);
    return () => {
      mount.isMount = false;
    };
  }, []);
  function resetFormAction() {
    setDisplay('none');
    setSubmitButton(initSubmitButton);
  }

  function onSubmit() {
    let waterData = water;
    if (waterData.cups > 14) waterData.cups = 14;
    AddWater(waterData, user, setWaterSavedData);
    resetFormAction();
  }
  function onReset() {
    setWater(waterSavedData);

    resetFormAction();
  }
  function updateWater() {
    if (water.cups > 14) return;
    setDisplay('flex');
    setWater({ ...water, cups: water.cups + 1 });
    setSubmitButton({ ...submitButton, submitActive: true });
    setHover(false);
    setTimeout(() => {
      setHover(true);
    }, 1500);
  }
  return (
    <Flex
      flexDir={'column'}
      color='orange.800'
      layerStyle={'flexCenter'}
      gap='3'
      p='2'
    >
      <Text fontSize={{ base: 'lg', md: '3xl' }} fontWeight='bold'>
        حاسبة شرب الماء
      </Text>
      <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight='bold'>
        قم بالنقر علي اي كوب عند شربك لكاس ماء واحد (250 مل)
      </Text>

      <Flex
        gap='2'
        _hover={{
          '.active': {
            color: 'blue.700',
            transform: 'scale(1.2)',
            transition: 'all .2s ease-in-out'
          }
        }}
        cursor='pointer'
        onClick={updateWater}
        maxW='400px'
        wrap='wrap'
        layerStyle={'flexCenter'}
      >
        {new Array(14).fill(0).map((_, i) => {
          if (water.cups >= i + 1) {
            return (
              <Icon
                key={i}
                w='50px'
                h='50px'
                color='blue.700'
                as={BsFillCupFill}
              />
            );
          }
          return (
            <Icon
              key={i}
              className={hover && water.cups === i ? 'active' : ''}
              w='50px'
              h='50px'
              color='gray.200'
              as={BsFillCupFill}
            />
          );
        })}
      </Flex>
      <FormAction
        display={display}
        onReset={onReset}
        onSubmit={onSubmit}
        submitButton={submitButton}
      />
    </Flex>
  );
}
