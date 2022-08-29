import { Flex, Text, Icon } from '@chakra-ui/react';
import UnSupscriptions from './UnSupscriptions';
import TextIcon from 'src/utils/TextIcon';
import { useStore } from 'src/store';
import { MdOutlineFitnessCenter } from 'react-icons/md';
import { AiFillFire, AiFillSafetyCertificate } from 'react-icons/ai';
import { FaWeight, FaRegFlushed } from 'react-icons/fa';
import { GiMuscleUp } from 'react-icons/gi';

import { useEffect, useState } from 'react';
export default function UnSupWorkout() {
  const prices = useStore((state) => state.prices);
  const [price, setPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  function onClick() {
    alert('i will subscripe');
  }
  const submitButton = {
    price,
    onClick,
    isLoading
  };
  useEffect(() => {
    const thePrice = prices.find((price) => price.category === 'workout');
    thePrice && setPrice(thePrice.price);
  }, [prices]);

  return (
    <UnSupscriptions
      submitButton={submitButton}
      title='باقة التمارين اليومية'
      subTitle=' اشتراككم لايدعم قسم التمارين اليومية، ولكن يمكنكم الإشتراك  للاستفادة من القسم'
    >
      <Flex
        flexDir='column'
        w='100%'
        p='3'
        justify='center'
        gap='5'
        align='center'
      >
        <Flex
          align='center'
          w='100%'
          justify={{ base: 'center', md: 'space-around' }}
          gap='3'
          wrap='wrap'
        >
          <TextIcon text='تمارين متنوعة' icon={MdOutlineFitnessCenter} />
          <TextIcon text='جسم رياضي افضل' icon={GiMuscleUp} />
        </Flex>
        <Flex
          align='center'
          justify={{ base: 'center', md: 'space-around' }}
          gap='3'
          wrap='wrap'
          w='100%'
        >
          <TextIcon text='زيادة في حرق السعرات ' icon={AiFillFire} />
          <TextIcon text='نزول اسرع للوزن' icon={FaWeight} />
        </Flex>
        <Flex
          align='center'
          justify={{ base: 'center', md: 'space-around' }}
          gap='3'
          wrap='wrap'
          w='100%'
        >
          <TextIcon text='قلق وتوتر اقل ' icon={FaRegFlushed} />
          <TextIcon text='وسائل دفع امنة' icon={AiFillSafetyCertificate} />
        </Flex>
      </Flex>
    </UnSupscriptions>
  );
}
