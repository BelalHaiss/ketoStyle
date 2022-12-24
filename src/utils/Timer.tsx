import { Flex, Icon, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { RiTimerFill } from 'react-icons/ri';
import { formatTimes } from './time.util';

export function OfferTImer() {
  const [show, setShow] = useState(false);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const interValRef = useRef<any>({});

  function remoevInterval() {
    clearInterval(interValRef.current);
  }

  function handleTime(offerInit: string) {
    const differnceMillis = Date.now() - +offerInit;
    const totalOfferInMillis = 1000 * 60 * 60 * 2.5;
    const remaing = totalOfferInMillis - differnceMillis;
    if (remaing > 0) {
      const { hours, mins, secs } = formatTimes(remaing);
      setHours(hours);
      setMins(mins);
      setSecs(secs);
      setShow(true);
    } else {
      setShow(false);
      remoevInterval();
    }
  }
  useEffect(() => {
    const offerInit = window.localStorage.getItem('offer');
    if (!offerInit) {
      setShow(false);
      return;
    }

    interValRef.current = setInterval(() => handleTime(offerInit), 1000);

    return () => {
      remoevInterval();
    };
  }, []);

  if (!show) return <></>;
  return (
    <Flex
      color='white'
      align='center'
      justify='space-between'
      w='100%'
      bg='red.500'
      p='3'
      fontSize='lg'
      borderRadius='xl'
      flexDir={{ base: 'column', md: 'row' }}
    >
      <Flex align='center' gap='2'>
        <Icon as={RiTimerFill} w={8} h={8} />
        <Text>متبقي علي نهاية العرض</Text>
      </Flex>

      <Flex gap='1'>
        <TimerLabel totalTime={hours} label={hours > 1 ? 'ساعات' : 'ساعه'} />
        <TimerLabel totalTime={mins} label='دقيقه' />
        <TimerLabel totalTime={secs} label='ثواني' />
      </Flex>
    </Flex>
  );
}

type TimerProps = {
  label: string;
  totalTime: number;
};
function TimerLabel({ label, totalTime }: TimerProps) {
  return (
    <Flex align='center' gap='2'>
      <Text>{totalTime}</Text>
      <Text>{label}</Text>
    </Flex>
  );
}
