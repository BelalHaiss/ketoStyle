import { Flex, AlertIcon, Alert, Text, Button } from '@chakra-ui/react';
import { BackButton } from 'src/utils/BackButton';
import { useStore } from 'src/store';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { Price } from 'src/ts/store.types';
import TextBetween from 'src/utils/TextBetween';
import { FaApplePay } from 'react-icons/fa';
import { MdOutlinePayment } from 'react-icons/md';
type Props = {
  plan: Price | null;
  // setCheckout?: (param: Price | null) => void;
};
const clientURL = 'https://www.ketonestyle.com/redirect/?re=';
function handleRedirect(plan: Price['category']) {
  switch (plan) {
    case 'meal':
      // return `/expectation`;
      return `${clientURL}expectation`;
    case 'workout':
      return `${clientURL}workout`;
    case 'nutritionist':
      return `${clientURL}nutritionist`;
  }
}
export default function Checkout({ plan }: Props) {
  const user = useStore((state) => state.user);
  function handlePay() {
    if (!user) {
      document.getElementById('register')?.click();
      return;
    }
    GoSell.openPaymentPage();
  }
  // const cancelCheckout = () => setCheckout(null);
  // @ts-ignore
  const [loading, setLoading] = useState(window.goSell ? false : true);
  const [GoSell, setGoSell] = useState<any>(null);

  useEffect(() => {
    // @ts-ignore
    if (window.goSell && !GoSell) {
      // @ts-ignore
      setGoSell(window.goSell);
      setLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    if (GoSell) {
      GoSell.config({
        gateway: {
          publicKey: 'pk_live_st7fiZQDAjdbRoyC583c6M4a',
          contactInfo: 'https://www.ketonestyle.com/',
          // onClose: cancelCheckout,
          language: 'ar'
        },
        customer: {
          phone: {
            country_code: 965,
            number: user?.profile.phone
          },
          first_name: user?.profile.name,
          email: user?.profile.email
        },
        order: {
          amount: plan?.price,
          currency: 'SAR'
        },
        transaction: {
          mode: 'charge',
          charge: {
            threeDSecure: true,

            metadata: {
              userId: user?._id,
              priceId: plan?._id,
              category: plan?.category
            },
            redirect: handleRedirect(plan!.category!),
            post: 'https://www.ketonestyle.com/api/payments/tap'
          }
        }
      });
    }
  }, [GoSell, user]);
  return (
    <Flex
      p='2'
      bg='orange.50'
      boxShadow={'5xl'}
      borderRadius={'lg'}
      w='100%'
      align='center'
      flexDir='column'
      gap='4'
    >
      <Script
        src='https://goSellJSLib.b-cdn.net/v2.0.0/js/gosell.js'
        onLoad={() => setLoading(false)}
      />
      <Text fontSize='xl' color='red.500'>
        المجموع الكلي للإشتراك {plan?.price}
      </Text>
      <Button
        leftIcon={<MdOutlinePayment />}
        fontSize='xl'
        w='80%'
        mx='auto'
        isLoading={loading || !GoSell}
        onClick={handlePay}
        colorScheme={'orange'}
      >
        الدفع الان
      </Button>
      <Button
        w='80%'
        mx='auto'
        leftIcon={<FaApplePay fontSize='50px' />}
        // fontSize='xl'
        isLoading={loading || !GoSell}
        onClick={handlePay}
        bg='black'
        color='white'
        dir='ltr'
        _hover={{
          bg: 'black'
        }}
        _active={{
          bg: 'black'
        }}
      ></Button>
      <Text color='gray.600' fontSize='sm'>
        عند النقر سيتم تحويلك لصفحة الدفع لاكمال العملية
      </Text>
    </Flex>
  );
}
