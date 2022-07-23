import {
  Flex,
  Text,
  FormLabel,
  FormControl,
  Input,
  FormErrorMessage
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';
import { fetcher } from 'src/utils/fetcher';
import FormAction from 'src/utils/FormActions';
import ToastUtil from 'src/utils/Toast';

const passwordRegex = /(?=^\S*$)(?=.{8,})/;

export default function PasswordReset() {
  const router = useRouter();

  // init is mills
  const { id, token, init = '1' } = router.query;
  const elapsedMins = Math.floor((Date.now() - +init) / 1000 / 60);
  //
  useEffect(() => {
    let toast = '';
    if (Object.keys(router.query).length) {
      if (!id || !token) {
        router.replace('/');
        toast = 'true';
      }
      if (elapsedMins > 59) {
        router.replace('/');
        toast = 'true';
      }
      toast === 'true' && ToastUtil('هذا الرابط غير صالح للاستخدام');
    }
  }, [router]);
  const [actionDisplay, setActionDisplay] = useState('none');
  const submitButtonInit = {
    submitActive: true,
    submitLoading: false,
    loadingText: 'جاري تحديث البيانات'
  };
  const [submitButton, setSubmitButton] = useState(submitButtonInit);
  const [password, setPassword] = useState({
    password: '',
    confirmPassword: ''
  });
  useEffect(() => {
    if (validatePassword()) {
      setActionDisplay('flex');
      setSubmitButton(submitButtonInit);
    } else {
      setActionDisplay('flex');
      setSubmitButton({ ...submitButtonInit, submitActive: false });
    }
  }, [password]);
  function validatePassword() {
    if (
      password['password'] !== password['confirmPassword'] ||
      !passwordRegex.test(password['confirmPassword'])
    )
      return false;
    return true;
  }
  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  }

  async function handleSubmit() {
    if (!validatePassword()) {
      return ToastUtil('تاكد من صحة كلمة المرور');
    }
    await fetcher({
      url: '/users/updatepassword',
      method: 'patch',
      data: {
        userId: id,
        token,
        password: password.password
      },
      successToast: 'تم تغير كلمة السر بنجاح'
    });
    router.replace('/');
  }

  function reset() {
    setActionDisplay('none');
    setSubmitButton(submitButtonInit);
    setPassword({
      password: '',
      confirmPassword: ''
    });
  }
  return (
    <Flex p='5' align='center' gap='5' maxW='600px' mx='auto' flexDir='column'>
      <Text my='5' fontWeight={'bold'} fontSize='xl'>
        ادخل كلمة السر الجديدة
      </Text>
      <FormControl
        isInvalid={!passwordRegex.test(password['password'])}
        color='orange.900'
      >
        <FormLabel fontSize='lg' htmlFor='password'>
          كلمة السر
        </FormLabel>
        <Input
          id='password'
          type='password'
          value={password['password']}
          name='password'
          onChange={handleChange}
          bg='white'
        />
        <FormErrorMessage> كلمة السر لا تقل عن 8 حروف</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!validatePassword()} color='orange.900'>
        <FormLabel fontSize='lg' htmlFor='confirm'>
          تاكيد كلمة السر{' '}
        </FormLabel>
        <Input
          id='confirm'
          type='password'
          value={password['confirmPassword']}
          name='confirmPassword'
          onChange={handleChange}
          bg='white'
        />
        <FormErrorMessage>
          {' '}
          تاكد من ان كلمة السر متماثلة ولاتقل عن 8 حروف
        </FormErrorMessage>
      </FormControl>
      <FormAction
        onReset={reset}
        onSubmit={handleSubmit}
        display={actionDisplay}
        submitButton={submitButton}
      />
    </Flex>
  );
}
