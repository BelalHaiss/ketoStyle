import { Flex, Button } from '@chakra-ui/react';
import Image from 'next/image';
import LinksButton from 'src/components/layout/LinksButton';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { useStore } from 'src/store';
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
  },
  {
    label: 'الاسعار',
    href: '/pricing'
  }
];
export default function Footer() {
  const user = useStore((state) => state.user);
  return (
    <Flex
      as='footer'
      justify='space-between'
      bg='orange.100'
      align='center'
      mt='auto'
      px={{ base: '1', md: '3' }}
      pt={{ base: '10', md: '0' }}
      flexDir={{ base: 'column', md: 'row' }}
    >
      <LinksButton links={links} />
      <Flex align={'center'} h='100px'>
        {user ? (
          <Button
            colorScheme={'green'}
            leftIcon={<RiCustomerService2Fill fontSize='25px' />}
          >
            تواصل مع خدمة العملاء
          </Button>
        ) : (
          <Image
            src='/home/payment.svg'
            alt='payment'
            width='300px'
            height={'100px'}
          />
        )}
      </Flex>
    </Flex>
  );
}
