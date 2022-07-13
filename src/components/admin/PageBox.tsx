import { Flex, Text, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { useRouter } from 'next/router';

type Page = {
  label: string;
  icon: IconType;
  path: string;
};

export function PageBox({ page }: { page: Page }) {
  const router = useRouter();

  return (
    <Flex
      flexDir={'column'}
      cursor={'pointer'}
      layerStyle={'flexCenter'}
      minW={{ base: '250px', md: '300px' }}
      minH={{ base: '100px', md: '200px' }}
      borderRadius={'xl'}
      bg='orange.200'
      onClick={() => router.replace(`/admin/${page.path}`)}
      transition='all 0.2s ease-out'
      transform={'scale(0.9)'}
      _hover={{
        transform: 'scale(1)',
        transition: 'all 0.2s ease-out',
        color: 'orange.50',
        borderColor: 'orange.500',
        bg: 'orange.500'
      }}
    >
      <Icon as={page.icon} boxSize={{ base: '30', md: '50' }} />
      <Text fontWeight='bold' fontSize={{ base: 'lg', md: '4xl' }}>
        {page.label}
      </Text>
    </Flex>
  );
}
