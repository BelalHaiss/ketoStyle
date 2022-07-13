import { Button } from '@chakra-ui/react';

import { useRouter } from 'next/router';
import { IoReturnUpBack } from 'react-icons/io5';

export function BackButton({ path }: { path: string }) {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.replace(path)}
      position={'absolute'}
      dir='ltr'
      size={{ base: 'sm', md: 'md' }}
      width={{ base: '100px', md: '150px' }}
      leftIcon={<IoReturnUpBack fontSize={'25px'} />}
      top={{ base: '-1', md: '30px' }}
      left={{ base: '12px', md: '30px' }}
      colorScheme={'yellow'}
      color='yellow.800'
    >
      رجوع
    </Button>
  );
}
