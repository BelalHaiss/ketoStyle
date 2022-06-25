import { Flex, Button } from '@chakra-ui/react';

import { useRouter } from 'next/router';

type Link = {
  label: string;
  href: string;
};
type Props = {
  links: Link[];
  justifyMd?: string;
  scheme?: string;
};

export default function LinksButton({
  links,
  scheme = 'orange',
  justifyMd = 'flex-start'
}: Props) {
  const router = useRouter();
  return (
    <Flex
      gap={{ base: '1', md: '2' }}
      w='100%'
      flexDir={{ base: 'column', sm: 'row' }}
      justify={{ base: 'center', md: justifyMd }}
      align='center'
    >
      {links.map((link: Link, i) => (
        <Button
          key={i}
          size={{ base: 'xs', md: 'sm' }}
          colorScheme={scheme}
          _hover={{ bg: 'white', color: 'orange.500' }}
          variant='ghost'
          onClick={() => router.replace(link.href)}
        >
          {link.label}
        </Button>
      ))}
    </Flex>
  );
}
