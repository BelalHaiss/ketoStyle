import { Flex, Button, Image } from '@chakra-ui/react';
// import Image from 'next/image';
import LinksButton from 'src/components/layout/LinksButton';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { useStore } from 'src/store';
const links = [
  // {
  //   label: 'من نحن',
  //   href: '/about'
  // },
  {
    label: 'سياسة الخصوصية',
    href: '/privacy'
  },
  // {
  //   label: 'تواصل معنا',
  //   href: '/contact'
  // },
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
      // bg='orange.100'
      align='center'
      justify='space-between'
      w='100%'
      mt='auto'
      gap='1'
      px={{ base: '1', md: '3' }}
      pt={{ base: '10', md: '0' }}
      flexDir={{ base: 'column', lg: 'row' }}
    >
      <LinksButton links={links} />

      <Button
        colorScheme={'orange'}
        onClick={() => {
          const link = 'https://wa.me/+966577157351';

          window.open(link, '_blank');
        }}
        size={{ base: 'sm', md: 'md' }}
        leftIcon={<RiCustomerService2Fill fontSize='25px' />}
      >
        تواصل فورا مع خدمة العملاء
      </Button>

      <Image
        src='/home/payment.png'
        alt='payment'
        borderRadius={'xl'}
        w='400px'
        // width={{ base: 150, md: '300px' }}
        // height={'95px'}
      />
    </Flex>
  );
}
