import { Flex, Image, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const links = [
  {
    label: 'من نحن',
    href: '/about'
  },
  {
    label: 'سياسة الخصوصية',
    href: '/privacy'
  },
  {
    label: 'تواصل معنا',
    href: '/contact'
  },
  {
    label: 'الشروط والاحكام',
    href: '/terms'
  }
];
export default function Footer() {
  const router = useRouter();
  return (
    <Flex
      as='footer'
      justify='space-between'
      bg='orange.100'
      align='center'
      px='3'
      pt={{ base: '10', md: '0' }}
      flexDir={{ base: 'column', md: 'row' }}
    >
      <Flex gap='2' align='center'>
        {links.map((link, i) => (
          <Button
            key={i}
            colorScheme='orange'
            variant='ghost'
            onClick={() => router.replace(link.href)}
          >
            {link.label}
          </Button>
        ))}
      </Flex>
      <Image src='/home/payment.svg' alt='payment' w='300px' />
    </Flex>
  );
}
