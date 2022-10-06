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
      justify='space-between'
      // bg='orange.100'
      align='center'
      mt='auto'
      gap='1'
      px={{ base: '1', md: '3' }}
      pt={{ base: '10', md: '0' }}
      flexDir={{ base: 'column', lg: 'row' }}
    >
      <LinksButton links={links} />
      <Flex
        align='center'
        wrap='wrap'
        justify={{ base: 'center', md: 'space-between' }}
        w='100%'
        flex='1'
      >
        <Button
          colorScheme={'orange'}
          onClick={() => {
            const link = 'https://wa.me/+13126101416';
            window.open(link, '_blank');
          }}
          size={{ base: 'sm', md: 'md' }}
          leftIcon={<RiCustomerService2Fill fontSize='25px' />}
        >
          تواصل فورًا مع خدمة العملاء{' '}
        </Button>

        <Image
          src='/home/paymentmethod.svg'
          alt='payment'
          // width={{ base: 150, md: '300px' }}
          // height={'95px'}
        />
      </Flex>
    </Flex>
  );
}
