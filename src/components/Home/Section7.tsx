import React from 'react';

// import Image from 'next/image';
import { Flex, Button } from '@chakra-ui/react';

import { useStore } from 'src/store';
export function Section7() {
  const user = useStore((state) => state.user);
  return (
    <Flex>
      {!user && (
        <Button
          w='60%'
          size='lg'
          mx='auto'
          fontSize='2xl'
          onClick={() => document.getElementById('register')?.click()}
          colorScheme='orange'
        >
          سجل الأن وغير حياتك للأبد{' '}
        </Button>
      )}
    </Flex>
  );
}
