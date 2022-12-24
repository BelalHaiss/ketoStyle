import { Flex, AlertIcon, Image, Text, Button } from '@chakra-ui/react';

import { useStore } from 'src/store';
import { MouseEventHandler, useEffect, useState } from 'react';
import { Price } from 'src/ts/store.types';
import { MdOutlinePayment } from 'react-icons/md';
import { getPayLink } from 'src/utils/fetchData';
import ToastUtil from 'src/utils/Toast';
import { ApplePayBtn } from '../pricing/ApplePayBtn';
import { isSafari } from '../UserCalories/utils';
type Props = {
  plan: Price | null;
  token: string;
  // setCheckout?: (param: Price | null) => void;
};

const clientURL = 'https://www.ketonestyle.com/redirect/?re=';
// const clientURL = "http://localhost:3000/redirect/?re=";

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
export default function Paylink({ plan, token }: Props) {
  const user = useStore((state) => state.user);
  // const cancelCheckout = () => setCheckout(null);
  // @ts-ignore
  const [loading, setLoading] = useState(false);

  async function handlePay(e: any) {
    if (e?.stopPropagation) {
      e.stopPropagation();
    }
    setLoading(true);
    if (!user) {
      document.getElementById('register')?.click();
      return;
    }

    if (plan) {
      const url = await getPayLink({
        plan,
        userId: user._id,
        callBackUrl: handleRedirect('meal'), // callback page URL (for example http://localhost:6655 processPayment.php) in your site to be called after payment is processed. (mandatory)
        clientName: user?.profile.name, // the name of the buyer. (mandatory)
        clientMobile: user?.profile.phone, // the mobile of the buyer. (mandatory)
        amount: plan.price, // the total amount of the order (including VAT or discount). (mandatory). NOTE: This amount is used regardless of total amount of products listed below.
        orderNumber: Date.now(), // the order number in your system. (mandatory)
        clientEmail: user?.profile.email // the email of the buyer (optional)
      });
      // track start checkout for snap chat
      window.handleSnap('START_CHECKOUT', user, {
        price: plan.price,
        currency: 'SAR',
        item_category: 'plans',
        item_ids: plan.plans
      });
      if (url) window.open(url, '_self');
      ToastUtil('برجاء الانتظار  سيتم تحويلك لصفحة الدفع', 'info');
      //
    }
    setLoading(false);
  }

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
      {/* {loading && (
        <Script
          src="https://pilot.paylink.sa/assets/js/paylink.js"
          onLoad={() => setLoading(false)}
        />
      )} */}
      <Text fontSize='xl' color='red.500'>
        المجموع الكلي للإشتراك {plan?.price} ريال سعودي
      </Text>
      <Button
        leftIcon={<MdOutlinePayment />}
        fontSize='xl'
        w='80%'
        py='6'
        mx='auto'
        // isLoading={loading || !window?.Order}
        isLoading={loading}
        onClick={handlePay}
        colorScheme={'orange'}
      >
        الدفع الان
      </Button>
      <ApplePayBtn loading={loading} handlePay={handlePay} />

      <Button
        leftIcon={<Image w='100px' alt='stc' src='/home/stc.svg' />}
        fontSize='xl'
        w='80%'
        bg='#4F008C'
        py='6'
        mx='auto'
        // isLoading={loading || !window?.Order}
        isLoading={loading}
        _hover={{
          bg: '#4F008C'
        }}
        _active={{
          bg: '#4F008C'
        }}
        onClick={handlePay}
      ></Button>
      <Button
        leftIcon={<Image w='100px' alt='urpay' src='/home/urpay.svg' />}
        fontSize='xl'
        w='80%'
        bg='#144A98'
        _hover={{
          bg: '#144A98'
        }}
        _active={{
          bg: '#144A98'
        }}
        py='6'
        mx='auto'
        // isLoading={loading || !window?.Order}
        isLoading={loading}
        onClick={handlePay}
      ></Button>

      {!isSafari(window.navigator) && (
        <Text color='red.600' fontSize='md' fontWeight={'bold'}>
          للدفع عبر ابل باي برجاء التاكد من دخولك عبر متصفح سفاري لكي لا تواجه
          مشاكل بالدفع{' '}
        </Text>
      )}
    </Flex>
  );
}
