import { Flex, Text, Button, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import { BiBody, BiHealth } from 'react-icons/bi';
import { AiFillFire, AiFillSafetyCertificate } from 'react-icons/ai';
import { FaWeight } from 'react-icons/fa';
import { MdOutlineFitnessCenter } from 'react-icons/md';
import { GiMeal } from 'react-icons/gi';
import { useStore } from 'src/store';
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
    icon: BiHealth
  }
];
const cards = [
  {
    title: 'باقة الشهر الواحد',
    feature: TEXT_WITH_ICONS(1),
    price: '18',
    oldPrice: '50'
  },
  {
    title: 'باقة 3 شهور',
    feature: TEXT_WITH_ICONS(2),
    price: '18',
    oldPrice: '50'
  },
  {
    title: 'باقة 6 شهور ',
    feature: TEXT_WITH_ICONS(3),
    price: '18',
    oldPrice: '50'
  }
];

export default function Pricing({
  setButtonStatus,
  onClose,
  setHeader,
  setUser,

  page
}: any) {
  const user = useStore((state) => state.user);
  return (
    <Flex
      color='orange.800'
      w='100%'
      pt='3'
      pb='10'
      flexDir='column'
      align='center'
    >
      {user && (
        <Flex w='100%' gap='3' align='center' justify='center'>
          <Image src='/home/pay.png' width='300' height='300' alt='pic' />
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
        {cards.map((card, i) => (
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
                  <Text fontSize='xl' fontWeight='bold' as='sup'>
                    $
                  </Text>
                  <Text fontWeight='bold' fontSize='50px'>
                    {card.price}
                  </Text>
                </Flex>
                <Text fontSize='xl' pt='7' color='GrayText' as='s'>
                  {card.oldPrice} $
                </Text>
              </Flex>
              {/* subs */}
              <Button colorScheme={'orange'}>اشترك الان</Button>
            </Flex>
          </Flex>
        ))}
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
            <Icon w='8' h='8' as={item.icon} />
            <Text fontWeight='medium' fontSize='lg'>
              {item.text}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
}
