import {
  Flex,
  Button,
  Input,
  Text,
  Heading,
  FormLabel,
  FormControl
} from '@chakra-ui/react';
import { useLayoutEffect, useState } from 'react';
import { useStore } from 'src/store';
import { BsShieldLockFill } from 'react-icons/bs';
import Toast from 'src/utils/Toast';
import { fetcher } from 'src/utils/fetcher';
import { useRouter } from 'next/router';
import ToastUtil from 'src/utils/Toast';
const emailRegex = /^([a-zA-Z0-9_\-?\.?]+)@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;

export default function LoginForm({
  onClose = () => {},
  setHeader = (text: string) => {}
}) {
  const [userState, setUserState] = useState({
    emailOrNumber: '',
    password: ''
  });
  const router = useRouter();
  const setUser = useStore((state) => state.setUser);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [forgetPassword, setForgetPassword] = useState(false);
  const handleSubmit = async () => {
    if (!userState.emailOrNumber || !userState.password)
      return Toast('برجاء ادخال جميع البيانات');
    setLoading(true);
    const user = await fetcher({
      url: '/users/login',
      method: 'post',
      data: userState
    });
    setLoading(false);
    if (user) {
      user.loginTime = Date.now();
      setUser(user);
      onClose();
      Toast(`مرحبا ${user.profile.name}`, 'success');

      !user.role ? router.replace('/') : router.replace('/admin');
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserState({ ...userState, [e.target.name]: e.target.value });
    setLoading(false);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  async function sendResetPassword() {
    if (!emailRegex.test(email)) {
      return ToastUtil('البريد الاكتروني غير صحيح');
    }
    await fetcher({
      url: `/users/resetpassword/${email}`,
      successToast: 'تم ارسال رابط لاعادة تعين كلمة السر',
      errorToast: 'لا يوجد بريد الكتروني مسجل '
    });
    onClose();
  }
  useLayoutEffect(() => {
    !forgetPassword ? setHeader('تسجيل الدخول') : setHeader('نسيت كلمة السر');
  }, [forgetPassword]);

  return (
    <Flex
      direction='column'
      p='10'
      bg='orange.200'
      boxShadow='2xl'
      borderRadius='3xl'
      mx='auto'
      gap='20px'
      w='500px'
      alignItems='center'
    >
      {!forgetPassword && (
        <>
          <FormControl color='orange.900'>
            <FormLabel fontSize='lg' htmlFor='emailOrNumber'>
              البريد الاكتروني او الهاتف
            </FormLabel>
            <Input
              id='emailOrNumber'
              type='text'
              name='emailOrNumber'
              value={userState.emailOrNumber}
              onChange={handleChange}
              bg='white'
              onKeyDown={handleKeyPress}
            />
          </FormControl>
          <FormControl color='orange.900'>
            <FormLabel fontSize='lg' htmlFor='password'>
              كلمة السر
            </FormLabel>
            <Input
              id='password'
              type='password'
              name='password'
              onChange={handleChange}
              bg='white'
              onKeyDown={handleKeyPress}
              value={userState.password}
            />
          </FormControl>
          <Button
            onClick={() => setForgetPassword(true)}
            colorScheme='red'
            variant={'link'}
          >
            هل نسيت كلمة السر؟
          </Button>
        </>
      )}
      {forgetPassword && (
        <>
          <FormControl isInvalid={!emailRegex.test(email)} color='orange.900'>
            <FormLabel fontSize='lg' htmlFor='email'>
              البريد الاكتروني المسجل
            </FormLabel>
            <Input
              id='email'
              type='text'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              bg='white'
            />
          </FormControl>
          <Button
            onClick={() => setForgetPassword(false)}
            colorScheme='green'
            variant={'link'}
          >
            تسجيل الدخول
          </Button>
        </>
      )}

      <Button
        isLoading={loading}
        loadingText='جاري تسجيل الدخول'
        colorScheme='orange'
        w='100%'
        onClick={forgetPassword ? sendResetPassword : handleSubmit}
        leftIcon={<BsShieldLockFill />}
        mt='10px'
      >
        {forgetPassword ? 'ارسال طلب تعين كلمة السر  ' : ' دخول'}
      </Button>
    </Flex>
  );
}
