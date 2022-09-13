import { Flex, Text, Button, Icon, Image as IMAGE } from '@chakra-ui/react';
// import Image from 'next/image';
import SubscripedHOC from 'src/components/SubscriptionHOC';

import { useState, useEffect } from 'react';
import { BiBody, BiHealth } from 'react-icons/bi';
import { AiFillFire, AiFillSafetyCertificate } from 'react-icons/ai';
import { FaWeight } from 'react-icons/fa';
import { MdOutlineFitnessCenter } from 'react-icons/md';
import { GiMeal } from 'react-icons/gi';
import { useStore } from 'src/store';
import { fetchPrices } from 'src/utils/fetchData';
import Loader from 'src/utils/Loader';
import { Price } from 'src/ts/store.types';

import Paypal from 'src/components/Paypal/Paypal';
import ToastUtil from 'src/utils/Toast';
const textIconsArr = [
  {
    text: 'وجبات متنوعة',
    icon: GiMeal
  },
  {
    text: 'قياس الكتلة ',
    icon: BiBody
  },
  {
    text: 'حساب السعرات',
    icon: AiFillFire
  },
  {
    text: ' توقعات نزول الوزن',
    icon: FaWeight
  },
  {
    text: 'وسائل دفع امنه',
    icon: AiFillSafetyCertificate
  },
  {
    text: 'شهر مجاني لخدمة التمرين',
    icon: MdOutlineFitnessCenter
  },
  {
    text: 'اسبوع مجانا لخدمة اخصائي الاغذية',
    image: '/home/nutritionist.png'
  }
];

type Card = {
  plan: Price | null;
  [key: string]: any;
};
const initCards: Card[] = [
  {
    _id: 'mealOne',
    title: 'باقة الشهر الواحد',
    feature: TEXT_WITH_ICONS(1),
    price: 0,
    plan: null
  },
  {
    _id: 'mealThree',
    price: 0,
    title: 'باقة 3 شهور',
    feature: TEXT_WITH_ICONS(2),
    plan: null
  },
  {
    _id: 'mealSix',
    title: 'باقة 6 شهور ',
    price: 0,
    feature: TEXT_WITH_ICONS(3),
    plan: null
  }
];

type Props = {
  vistor: boolean;
};
function Pricing({ vistor }: Props) {
  const user = useStore((state) => state.user);
  const prices = useStore((state) => state.prices);
  const setPrices = useStore((state) => state.setPrices);
  const [checkout, setCheckout] = useState<Price | null>(null);

  const [cards, setCards] = useState(initCards);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchPrices(setPrices);
  }, []);
  useEffect(() => {
    if (prices?.length) {
      setCards(
        cards.map((card) => {
          const price = prices.find((price) => price._id === card._id);
          return { ...card, plan: price ?? null };
        })
      );
      setLoading(false);
    }
  }, [prices]);
  return (
    <Flex
      color='orange.800'
      w='100%'
      pt='3'
      pb='10'
      flexDir='column'
      align='center'
    >
      {!checkout && user && (
        <Flex
          w='100%'
          gap='3'
          flexDir={{ base: 'column', md: 'row' }}
          align='center'
          justify='center'
        >
          <IMAGE src='/home/pay.png' width='300' height='300' alt='pic' />
          <Text fontWeight={'bold'} fontSize={{ base: 'lg', md: 'xl' }}>
            {`${user.profile.name} ،لم يتبقى سوى القليل، لدخولك عالم الكيتو معنا`}
          </Text>
        </Flex>
      )}
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        align='center'
        justify='space-around'
        w='100%'
      >
        {loading && <Loader />}
        {!checkout &&
          !loading &&
          cards.map((card, i) => (
            <Flex
              align='center'
              border='2px'
              bg='orange.200'
              borderColor='orange.100'
              flexDir='column'
              h='550px'
              w='300px'
              borderRadius={'2xl'}
              transition='all 0.2s ease-out'
              transform={'scale(0.9)'}
              cursor={'pointer'}
              _hover={{
                transform: 'scale(1)',
                transition: 'all 0.2s ease-out',
                color: 'orange.50',
                borderColor: 'orange.500',
                bg: 'orange.500'
              }}
              sx={{
                '&:hover': {
                  button: {
                    bg: 'orange.50',
                    color: 'orange.500'
                  }
                }
              }}
              boxShadow='2xl'
              gap='3'
              key={i}
            >
              <Text my='2' fontWeight='bold' fontSize='2xl'>
                {card.title}
              </Text>
              {card.feature}
              {/* pricing and subscribe */}
              <Flex
                w='100%'
                flexDir={'column'}
                mt='auto'
                mb='5'
                gap='3'
                px='5'
                align='center'
              >
                <hr style={{ width: '100%', border: '2px dashed white' }} />
                {/* price */}
                <Flex align='center' gap='5'>
                  <Flex align='center'>
                    <Text fontSize='2xl' ml='1' fontWeight='bold' as='sup'>
                      SAR
                    </Text>
                    <Text fontWeight='bold' fontSize='50px'>
                      {card.plan?.price ?? '0'}
                    </Text>
                  </Flex>
                </Flex>
                {/* subs */}
                <Button
                  onClick={() => {
                    if (vistor) {
                      ToastUtil('يجب عليك انشاء حساب اولا', 'info');
                    } else {
                      setCheckout(card.plan ?? null);
                    }
                  }}
                  colorScheme={'orange'}
                >
                  اشترك الان
                </Button>
              </Flex>
            </Flex>
          ))}
        {checkout && <Paypal setCheckout={setCheckout} plan={checkout} />}
      </Flex>
    </Flex>
  );
}

function TEXT_WITH_ICONS(num: 1 | 2 | 3) {
  return (
    <Flex flexDir={'column'} gap='2' align='center'>
      {textIconsArr.map((item, i) => {
        if (num === 1 && i > 4) return;
        if (num === 2 && i > 5) return;
        return (
          <Flex w='200px' align='center' gap='2' key={i}>
            {item.icon ? (
              <Icon w='8' h='8' as={item.icon} />
            ) : (
              <IMAGE src={item.image} w='8' h='8' alt='nutritionist' />
            )}
            <Text fontWeight='medium' fontSize='lg'>
              {item.text}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
}

export default SubscripedHOC(Pricing, 'pricing');
