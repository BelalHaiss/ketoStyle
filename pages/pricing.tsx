import { Flex, Text, Button, Icon, Image as IMAGE } from '@chakra-ui/react';
// import Image from 'next/image';
import SubscripedHOC from 'src/components/SubscriptionHOC';

import { useState, useEffect } from 'react';
import { BiBody, BiHealth } from 'react-icons/bi';
import { AiFillFire, AiFillSafetyCertificate } from 'react-icons/ai';
import { FaWeight, FaClipboardCheck } from 'react-icons/fa';
import { MdOutlineFitnessCenter } from 'react-icons/md';
// import { BsFillPatchCheckFill } from 'react-icons/bs';
import { GiMeal } from 'react-icons/gi';
import { useStore } from 'src/store';
import { fetchPrices, getPayLink } from 'src/utils/fetchData';
import Loader from 'src/utils/Loader';
import { Price } from 'src/ts/store.types';

import ToastUtil from 'src/utils/Toast';
import { FeedBack } from 'src/components/pricing/FeedBack';
import { YalaSubscripe } from 'src/components/pricing/YalaSubscripe';
import { PriceBox } from 'src/components/pricing/PriceBox';
const textIconsArr = [
  {
    text: 'ستحصل على مستشار التغذية الخاص فيك',
    image: '/home/nutritionist.png'
  },
  {
    text: 'جدول تمارين متكامل حسب احتياجك',
    icon: MdOutlineFitnessCenter
  },
  {
    text: 'العديد من وصفات الكيتو الجاهزة',
    icon: GiMeal
  },
  {
    text: 'قياس كامل لكتلة جسمك',
    icon: BiBody
  },
  {
    text: 'حساب معدل حرق الدهون لجسمك',
    icon: AiFillFire
  },
  {
    text: 'توقعات لتواريخ نزول وزنك',
    icon: FaWeight
  },
  {
    text: 'وسائل دفع آمنة و الدفع لمرة واحده فقط',
    icon: AiFillSafetyCertificate
  },
  {
    text: 'ضمان نزول الوزن المطلوب',
    icon: FaClipboardCheck
  }
];

type Card = {
  plan: Price | null;
  title: string;
  _id: string;
  feature: any;
};
const initCards: Card[] = [
  {
    _id: 'mealOne',
    title: 'اشتراك شهر واحد',
    feature: TEXT_WITH_ICONS(),
    plan: null
  },
  {
    _id: 'mealThree',
    title: 'اشتراك 3 شهور',
    feature: TEXT_WITH_ICONS(),
    plan: null
  },
  {
    _id: 'mealSix',
    title: 'اشتراك 6 اشهر',
    feature: TEXT_WITH_ICONS(),
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
  const [loading, setLoading] = useState(true);
  const [payUrl, setPayUrl] = useState('');

  useEffect(() => {
    // getPayLink(setPayUrl);
    fetchPrices(setPrices, setLoading);
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
      {!checkout && user && <YalaSubscripe />}
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        align='center'
        justify='space-around'
        w='100%'
      >
        {loading && <Loader />}
        {!checkout && !loading && (
          <Flex
            mt='3'
            w={{ base: '370px', md: '600px' }}
            flexDir='column'
            align='center'
            gap='3'
          >
            <Text fontSize={{ base: 'md', md: 'lg' }}>
              يعتبر نظام كيتوستايل المدروس من قبل المختصين، هو النظام الأفضل
              والأسرع والأضمن في النتائج بدون منازع عن بقية الأنظمة
            </Text>
            {cards.map((card: Card) => (
              <PriceBox
                title={card.title}
                plan={card.plan!}
                token={payUrl}
                key={card._id}
              />
            ))}
          </Flex>
        )}
      </Flex>
      <FeedBack />
    </Flex>
  );
}

export function TEXT_WITH_ICONS() {
  return (
    <Flex px='3' flexDir={'column'} gap='2' align='center'>
      {textIconsArr.map((item, i) => {
        return (
          <Flex w='100%' align='center' gap='2' key={i}>
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

// the old plan style

// {!checkout &&
//   !loading &&
//   cards.map((card, i) => (
//     <Flex
//       align='center'
//       border='2px'
//       bg='orange.200'
//       borderColor='orange.100'
//       flexDir='column'
//       h='550px'
//       w='300px'
//       borderRadius={'2xl'}
//       transition='all 0.2s ease-out'
//       transform={'scale(0.9)'}
//       cursor={'pointer'}
//       _hover={{
//         transform: 'scale(1)',
//         transition: 'all 0.2s ease-out',
//         color: 'orange.50',
//         borderColor: 'orange.500',
//         bg: 'orange.500'
//       }}
//       sx={{
//         '&:hover': {
//           button: {
//             bg: 'orange.50',
//             color: 'orange.500'
//           }
//         }
//       }}
//       boxShadow='2xl'
//       gap='3'
//       key={i}
//     >
//       <Text my='2' fontWeight='bold' fontSize='2xl'>
//         {card.title}
//       </Text>
//       {card.feature}
//       {/* pricing and subscribe */}
//       <Flex
//         w='100%'
//         flexDir={'column'}
//         mt='auto'
//         mb='5'
//         gap='3'
//         px='5'
//         align='center'
//       >
//         <hr style={{ width: '100%', border: '2px dashed white' }} />
//         {/* price */}
//         <Flex align='center' gap='3'>
//           <Flex align='center'>
//             <Text fontSize='2xl' ml='1' fontWeight='bold' as='sup'>
//               SAR
//             </Text>
//             <Text fontWeight='bold' fontSize='50px'>
//               {card.plan?.price}
//             </Text>
//           </Flex>
//           {card.plan && card.plan?.before > 0 && (
//             <>
//               <svg height='65' width='20'>
//                 <line
//                   x1='0'
//                   y1='55'
//                   x2='20'
//                   y2='0'
//                   // style={{':rgb(255,0,0);stroke-width:2'}}
//                   style={{
//                     stroke: '#4A5568',
//                     strokeWidth: '3px'
//                   }}
//                 />
//               </svg>
//               <Flex color='#4A5568' position='relative' align='center'>
//                 <svg
//                   height='60'
//                   style={{ position: 'absolute', width: '100%' }}
//                 >
//                   <line
//                     x1='0'
//                     y1='20'
//                     x2='100%'
//                     y2='20'
//                     // style={{':rgb(255,0,0);stroke-width:2'}}
//                     style={{
//                       stroke: '#4A5568',
//                       strokeWidth: '3px'
//                     }}
//                   />
//                 </svg>
//                 <Text fontSize='md' ml='1' as='sup'>
//                   SAR
//                 </Text>
//                 <Text fontSize='30px' mt='-2'>
//                   {card.plan?.before}
//                 </Text>
//               </Flex>
//             </>
//           )}
//         </Flex>
//         {/* subs */}
//         <Button
//           onClick={() => {
//             if (vistor) {
//               ToastUtil('يجب عليك انشاء حساب اولا', 'info');
//             } else {
//               setCheckout(card.plan ?? null);
//             }
//           }}
//           colorScheme={'orange'}
//         >
//           اشترك الان
//         </Button>
//       </Flex>
//     </Flex>
//   ))}
