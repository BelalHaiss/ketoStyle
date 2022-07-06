import { Flex, Image, Button, Text } from '@chakra-ui/react';
import { RegisterModal } from '../signup/RegisterModal';
import { useStore } from 'src/store';
import { useState } from 'react';
import LinksButton from 'src/components/layout/LinksButton';
import { useRouter } from 'next/router';
import ProfileMenu from '../user/ProfileMenu';
const links = [
  {
    label: 'اشترك الان',
    href: '/pricing'
  },
  {
    label: 'نظامي الغذائي',
    href: '/meals'
  },
  {
    label: 'التمارين اليومية',
    href: '/workout'
  },
  {
    label: 'اخصائي الاغذية',
    href: '/nutritionist'
  }
];
const adminLinks = [
  {
    label: 'dashboard',
    href: '/admin'
  }
];
export default function Header() {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  const setProfile = useStore((state) => state.setProfile);
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  return (
    <>
      <Flex
        as='header'
        align='center'
        justify='space-between'
        wrap={{ base: 'wrap', md: 'nowrap' }}
        sx={{
          '@media (max-width:699px)': {
            'div:nth-of-type(2)': {
              order: '3'
            },
            'div:nth-of-type(3)': {
              order: '2'
            }
          }
        }}
        p='0.4px 6px'
      >
        <Flex align='center' mr={5}>
          <Image
            src='/logo.svg'
            w='90px'
            onClick={() => router.replace('/')}
            alt='Keto'
          />
        </Flex>
        {user && !user.role && (
          <LinksButton justifyMd='center' links={links} scheme='gray' />
        )}
        {user?.role && (
          <LinksButton justifyMd='center' links={adminLinks} scheme='gray' />
        )}
        <Flex wrap='wrap' px='3' align='center' gap='2'>
          {!user ? (
            <>
              {' '}
              <Button onClick={onOpen} borderRadius='2xl' colorScheme='orange'>
                انضم الينا
              </Button>
              <Button
                borderRadius='2xl'
                onClick={() => setIsLogin(true)}
                colorScheme='orange'
                variant='ghost'
              >
                تسجيل الدخول
              </Button>
            </>
          ) : (
            <ProfileMenu
              setProfile={setProfile}
              setUser={setUser}
              user={user}
            />
          )}
        </Flex>
      </Flex>
      <RegisterModal
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        isOpen={isOpen}
        onClose={onClose}
      />
      <hr style={{ border: '1px dashed #feebc8 ' }} />
    </>
  );
}
