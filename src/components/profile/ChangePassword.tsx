/* eslint-disable react/no-children-prop */
import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
  FormControl,
  FormErrorMessage
} from '@chakra-ui/react';
import { useState, ChangeEvent, useEffect } from 'react';
import { changePassword } from 'src/utils/fetchData';
import FormAction from 'src/utils/FormActions';
const re = /(?=^\S*$)(?=.{8,})/;

const passWords = [
  {
    label: 'كلمة السر القديمة',
    re,
    name: 'password',
    errorMessage: 'كلمة السر يجب أن تكون أكثر من 8 أحرف ولا تحتوي علي مسافة'
  },
  {
    label: 'كلمة السر الجديدة',
    re,
    name: 'newPassword',
    errorMessage: 'كلمة السر يجب أن تكون أكثر من 8 أحرف ولا تحتوي علي مسافة'
  }
];
const initPasswordState = {
  password: '',
  newPassword: ''
};
const submitButtonIntial = {
  submitActive: true,
  submitLoading: false,
  loadingText: 'جاري تحديث البيانات'
};
export default function ChangePassword({ id = '', isAdminUpdate = false }) {
  const [password, setPassword] = useState<any>(initPasswordState);
  const [error, setError] = useState<any>(initPasswordState);
  const [showFormActions, setShowFormActions] = useState('none');
  const [submitButton, setSubmitButton] = useState(submitButtonIntial);
  const [isUpdate, setIsUpdate] = useState(false);
  function onReset() {
    setShowFormActions('none');
    setSubmitButton(submitButtonIntial);
    setPassword(initPasswordState);
    setError(initPasswordState);
    setIsUpdate(false);
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setIsUpdate(true);
    setPassword({ ...password, [name]: value });
    setShowFormActions('flex');
    if (isAdminUpdate) {
      re.test(value)
        ? setError({
            ...error,
            [name]: 'fine'
          })
        : setError({ ...error, [name]: '' });
    }
    const find = passWords.find((item) => item.name === name);
    if (find) {
      if (find.re.test(value)) {
        setError({ ...error, [name]: 'fine' });
      } else {
        setError({ ...error, [name]: '' });
      }
    }
  }
  useEffect(() => {
    if (isAdminUpdate && error.password) {
      return setSubmitButton({ ...submitButton, submitActive: true });
    } else if (isAdminUpdate && !error.password) {
      return setSubmitButton({ ...submitButton, submitActive: false });
    }
    if (error.password && error.newPassword) {
      setSubmitButton({ ...submitButton, submitActive: true });
    } else {
      setSubmitButton({ ...submitButton, submitActive: false });
    }
  }, [error]);
  function onSubmit() {
    changePassword(password, id, isAdminUpdate);
    onReset();
  }
  return (
    <Flex p='2' flexDir={'column'} gap='3' layerStyle={'flexCenter'}>
      <Text mb='4' fontSize='xl' color='orange.800' fontWeight={'bold'}>
        تغيير كلمة السر
      </Text>
      {passWords.map((pass, i) => {
        if (isAdminUpdate && i === 1) return;
        return (
          <FormControl
            isInvalid={!isUpdate ? false : error[pass.name] ? false : true}
            key={i}
          >
            <InputGroup>
              <InputLeftAddon
                w='160px'
                bg='orange.500'
                children={isAdminUpdate ? 'كلمة السر' : pass.label}
              />
              <Input
                onChange={handleChange}
                type='password'
                _placeholder={{ color: 'gray.300' }}
                variant='outline'
                errorBorderColor='crimson'
                name={pass.name}
                focusBorderColor='orange.500'
                value={password[pass.name]}
              />
            </InputGroup>
            <FormErrorMessage> {pass.errorMessage} </FormErrorMessage>
          </FormControl>
        );
      })}
      <FormAction
        display={showFormActions}
        onReset={onReset}
        onSubmit={onSubmit}
        submitButton={submitButton}
      />
    </Flex>
  );
}
