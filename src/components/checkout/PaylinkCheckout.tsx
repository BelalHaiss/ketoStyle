import { Flex, AlertIcon, Alert, Text, Button } from '@chakra-ui/react';
import { BackButton } from 'src/utils/BackButton';
import { useStore } from 'src/store';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { Price } from 'src/ts/store.types';
import TextBetween from 'src/utils/TextBetween';
import { FaApplePay } from 'react-icons/fa';
import { MdOutlinePayment } from 'react-icons/md';
import { getPayLink } from 'src/utils/fetchData';
import ToastUtil from 'src/utils/Toast';
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

  async function handlePay() {
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
        المجموع الكلي للإشتراك {plan?.price}
      </Text>
      <Button
        leftIcon={<MdOutlinePayment />}
        fontSize='xl'
        w='80%'
        mx='auto'
        // isLoading={loading || !window?.Order}
        isLoading={loading}
        onClick={handlePay}
        colorScheme={'orange'}
      >
        الدفع الان
      </Button>
      <Button
        w='80%'
        mx='auto'
        leftIcon={<FaApplePay fontSize='50px' />}
        isLoading={loading}
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
