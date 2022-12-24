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
  fullWidth?: boolean;
};

export default function LinksButton({
  links,
  scheme = 'orange',
  justifyMd = 'flex-start',
  fullWidth = false
}: Props) {
  const router = useRouter();
  return (
    <Flex
      gap={{ base: '1', md: '2' }}
      flexDir={{ base: 'column', sm: 'row' }}
      justify={{ base: 'center', md: justifyMd }}
      align='center'
      wrap='wrap'
    >
      {links.map((link: Link, i) => (
        <Button
          key={i}
          size={{ base: 'xs', md: 'sm' }}
          colorScheme={scheme}
          color='orange.900 '
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
