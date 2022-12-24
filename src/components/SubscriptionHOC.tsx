import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { JSXElementConstructor } from 'react';
import Loader from 'src/utils/Loader';
import { useStore } from 'src/store';
import { checkSubscription } from 'src/utils/checker';
import { Plans } from 'src/ts/store.types';
import ToastUtil from 'src/utils/Toast';

export default function SubscripedHOC(
  Component: JSXElementConstructor<any>,
  plan: Plans | 'pricing'
) {
  const IsSbuscriped = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [isSubscriped, setIsSubscriped] = useState(false);
    const [vistor, setVistor] = useState(false);
    const [endSubscriptionDate, setEndSubscriptionDate] = useState('');
    const user = useStore((state) => state.user);
    const prices = useStore((state) => state.prices);

    useEffect(() => {
      if (user && prices?.length) {
        // if pricing page
        if (plan === 'pricing') {
          checkSubscription(user, 'meal').status
            ? router.replace('/')
            : setLoading(false);
        } else if (plan === 'meal') {
          if (checkSubscription(user, 'meal').status) {
            setIsSubscriped(true);
            setEndSubscriptionDate(checkSubscription(user, 'meal').end);
            setLoading(false);
          } else {
            router.replace('/pricing');
            ToastUtil('يجب عليك الاشتراك في باقات الكيتو', 'info');
            return;
          }
        } else {
          if (checkSubscription(user, plan).status) {
            setIsSubscriped(true);
            setEndSubscriptionDate(checkSubscription(user, plan).end);
          } else {
            setIsSubscriped(false);
          }

          setLoading(false);
        }
      }

      // if(price && !user) // that mean no user is login
      if (prices?.length && !user) {
        if (plan === 'pricing') {
          setVistor(true);
          setLoading(false);
        } else {
          router.replace('/');
        }
      }
    }, [user, prices]);

    return !loading ? (
      <Component
        user={user}
        endDate={endSubscriptionDate}
        isSubscriped={isSubscriped}
        vistor={vistor}
      />
    ) : (
      <Loader />
    ); // Render whatever you want while the authentication occurs
  };

  return IsSbuscriped;
}
