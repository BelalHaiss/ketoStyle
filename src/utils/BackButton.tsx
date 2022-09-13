import { Button } from '@chakra-ui/react';

import { useRouter } from 'next/router';
import { IoReturnUpBack } from 'react-icons/io5';

export function BackButton({
  path,
  client,
  onClick
}: {
  path: string;
  client?: boolean;
  onClick?: () => void;
}) {
  const router = useRouter();

  return (
    <Button
      onClick={() => (onClick ? onClick() : router.replace(path))}
      position={'absolute'}
      dir='ltr'
      size={{ base: 'sm', md: 'md' }}
      width={{ base: '100px', md: '120px' }}
      leftIcon={<IoReturnUpBack fontSize={'25px'} />}
      top={{ base: client ? '120px' : '-1', md: client ? '80px' : '30px' }}
      left={{ base: '12px', md: '15px' }}
      colorScheme={'yellow'}
      color='yellow.800'
    >
      رجوع
    </Button>
  );
}
