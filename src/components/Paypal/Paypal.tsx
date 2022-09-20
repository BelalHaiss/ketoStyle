import { Flex, Button, Text } from '@chakra-ui/react';
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from '@paypal/react-paypal-js';
import { BackButton } from 'src/utils/BackButton';
import { useStore } from 'src/store';
import { useEffect, useState } from 'react';
import { Price } from 'src/ts/store.types';
import { useRouter } from 'next/router';
import TextBetween from 'src/utils/TextBetween';
import Loader from 'src/utils/Loader';
import { fetcher } from 'src/utils/fetcher';
import { fetchUser } from 'src/utils/fetchData';
type Props = {
  plan: Price | null;
  setCheckout: (param: Price | null) => void;
};
export default function Paypal({ plan, setCheckout }: Props) {
  // useEffect(() => {
  //   return () => {
  //     setCheckout(null);
  //   };
  // }, []);
  return (
    <Flex flexDir='column' gap='4'>
      {plan && (
        <Flex
          flexDir='column'
          w={{ base: '200px', md: '500px' }}
          py='2'
          px={{ base: '2', md: '6' }}
          bg='green.100'
          boxShadow='md'
          borderRadius='lg'
          gap='2'
          color='green.900'
          fontSize={{ base: 'lg', md: 'xl' }}
        >
          <Text
            fontWeight='bold'
            fontSize={{ base: 'xl', md: '2xl' }}
            textAlign={'center'}
          >
            {plan?.label}
          </Text>

          <TextBetween lBold lText={plan.price} rText='ريال سعودي' />
          <hr style={{ border: '1px solid white' }} />
          <TextBetween lBold lText={plan.usd} rText='دولار امريكي' />
        </Flex>
      )}

      <PayPalScriptProvider
        options={{
          'client-id':
            'AYTCP0tc6Sc1UURcx0uQtvtuUOhQJIXBoTyuBxShH5IllqUuYKYvgz6mTc3qS543O-6MqVNSk-M40s-P'
        }}
      >
        {<PaypalButton plan={plan} setCheckout={setCheckout} />}
      </PayPalScriptProvider>
    </Flex>
  );
}

function PaypalButton({ setCheckout, plan }: Props) {
  const [{ isPending }] = usePayPalScriptReducer();
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  const cancelCheckout = () => setCheckout(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function savePayment(
    err: boolean,
    paypal = {},
    paid = plan!.usd.toString()
  ) {
    setLoading(true);
    await fetcher({
      url: `/payments/${user?._id}`,
      data: {
        priceId: plan?._id,
        category: plan?.category,
        userId: user?._id,
        paid: +paid,
        paypal,
        isFailed: err
      },
      method: 'post',
      successToast: 'تم الاشتراك بنجاح'
    });
    setLoading(false);
    await fetchUser(user!._id, setUser);
    plan?.category === 'meal' ? router.replace('/meals') : cancelCheckout();
  }
  async function handleError(e: any) {
    savePayment(true);
  }

  return (
    <>
      {(isPending || loading) && <Loader />}
      <BackButton onClick={cancelCheckout} client path='/pricing' />

      <PayPalButtons
        style={{ layout: 'vertical', shape: 'pill' }}
        onCancel={cancelCheckout}
        onError={handleError}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: plan!.usd.toString()
                }
              }
            ],
            application_context: {
              brand_name: 'KetoStyle'
            }
          });
        }}
        onApprove={async (data, actions) => {
          const paypalInfo = await actions.order!.capture();
          const paypal = {
            orderId: paypalInfo.id,
            payer: paypalInfo.payer,
            // @ts-ignore
            method: data.paymentSource,
            status: paypalInfo.status
          };
          savePayment(false, paypal, paypalInfo.purchase_units[0].amount.value);
        }}
      />
    </>
  );
}
