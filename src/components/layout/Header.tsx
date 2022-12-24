import { Flex, Image, Button, Text } from '@chakra-ui/react';
import { RegisterModal } from '../signup/RegisterModal';
import { useStore } from 'src/store';
import { useEffect, useState } from 'react';
import LinksButton from 'src/components/layout/LinksButton';
import { useRouter } from 'next/router';
import ProfileMenu from '../user/ProfileMenu';
import { checkSubscription } from 'src/utils/checker';
import ToastUtil from 'src/utils/Toast';
import { isSafari } from '../UserCalories/utils';

const links = [
  {
    label: 'التوقعات',
    href: '/expectation'
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
  },
  {
    label: 'اشترك الان',
    href: '/pricing'
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

  useEffect(() => {
    window.handleSnap(undefined, user);
  }, [user]);

  return (
    <>
      <Flex
        as='header'
        align='center'
        justify='space-between'
        wrap={{ base: 'wrap', md: 'nowrap' }}
        sx={{
          '@media (max-width:560px)': {
            'div:nth-of-type(2)': {
              order: '3',
              minWidth: !user ? 'auto' : '100%'
            },
            'div:nth-of-type(3)': {
              order: '2'
            }
          }
        }}
        p='0.4px 6px'
      >
        <Flex align='center'>
          <Image
            src='/logo.svg'
            w='90px'
            onClick={() => router.replace('/')}
            alt='Keto'
            cursor={'pointer'}
          />
        </Flex>
        {user && !user.role && checkSubscription(user, 'meal') && (
          <LinksButton
            justifyMd='center'
            links={links.slice(0, -1)}
            scheme='gray'
          />
        )}
        {user && !user.role && !checkSubscription(user, 'meal') && (
          <LinksButton
            justifyMd='center'
            links={links.slice(1, 5)}
            scheme='gray'
          />
        )}
        {user?.role && (
          <LinksButton justifyMd='center' links={adminLinks} scheme='gray' />
        )}
        <Flex wrap='wrap' px='1' align='center' gap={{ base: '1', md: '2' }}>
          {!user ? (
            <>
              {' '}
              <Button
                onClick={onOpen}
                id='register'
                borderRadius='2xl'
                size={{ base: 'sm', md: 'md' }}
                colorScheme='orange'
              >
                انضم الينا
              </Button>
              <Button
                size={{ base: 'sm', md: 'md' }}
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
