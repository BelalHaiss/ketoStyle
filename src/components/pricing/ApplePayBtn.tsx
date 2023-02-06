import { Button } from '@chakra-ui/react';

import { FaApplePay } from 'react-icons/fa';

type Props = {
  loading: boolean;
  handlePay: (e: any) => void;
};
export function ApplePayBtn({ loading, handlePay }: Props) {
  return (
    <>
      <Button
        w='80%'
        mx='auto'
        leftIcon={<FaApplePay fontSize='50px' />}
        isLoading={loading}
        onClick={handlePay}
        bg='black'
        py='6'
        color='white'
        dir='ltr'
        _hover={{
          bg: 'black'
        }}
        _active={{
          bg: 'black'
        }}
      ></Button>
    </>
  );
}
