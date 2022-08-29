import { Flex, Text, Icon, Image } from '@chakra-ui/react';
import UnSupscriptions from './UnSupscriptions';
import TextIcon from 'src/utils/TextIcon';
import { useStore } from 'src/store';
import { RiLightbulbFlashFill } from 'react-icons/ri';
import { MdOutlineFitnessCenter } from 'react-icons/md';
import { AiFillFire, AiFillSafetyCertificate } from 'react-icons/ai';
import { FaWeight, FaRegFlushed } from 'react-icons/fa';
import { GiMuscleUp } from 'react-icons/gi';
import { VscChecklist } from 'react-icons/vsc';
import { useEffect, useState } from 'react';
export default function UnSubNutritionist() {
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
    const thePrice = prices.find((price) => price.category === 'nutritionist');
    thePrice && setPrice(thePrice.price);
  }, [prices]);

  return (
    <UnSupscriptions
      submitButton={submitButton}
      title='باقة اخصائي التغذية'
      subTitle=' اشتراككم لايدعم قسم الاستشارات الغذائية، ولكن يمكنكم الإشتراك  للاستفادة من القسم'
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
          <TextIcon
            text='اخصائي تغذية معك بشكل يومي'
            image='/home/nutritionist.png'
          />
          <TextIcon text='تحديد الأهداف مع الاخصائى' icon={VscChecklist} />
        </Flex>
        <Flex
          align='center'
          justify={{ base: 'center', md: 'space-around' }}
          gap='3'
          wrap='wrap'
          w='100%'
        >
          <TextIcon
            text='توفير جميع ماتحتاجه لنظام غذائي كيتوني أفضل'
            image='/home/meal.svg'
          />
          <TextIcon
            text='حل المشاكل الشائعة في الحمية'
            image='/home/limit.png'
          />
        </Flex>
        <Flex
          align='center'
          justify={{ base: 'center', md: 'space-around' }}
          gap='3'
          wrap='wrap'
          w='100%'
        >
          <TextIcon
            text='نصائح مساعدة من اخصائي التغذية المسؤول عنك'
            icon={RiLightbulbFlashFill}
          />
          <TextIcon text='وسائل دفع امنة' icon={AiFillSafetyCertificate} />
        </Flex>
      </Flex>
    </UnSupscriptions>
  );
}
