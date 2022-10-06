/* eslint-disable react/no-children-prop */
import {
  Flex,
  Input,
  FormLabel,
  Button,
  Select,
  InputGroup,
  InputLeftAddon,
  FormControl,
  FormErrorMessage
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useStore } from 'src/store';
import FormAction from 'src/utils/FormActions';
import { ChangeEvent } from 'react';
import { Profile } from 'src/ts/register.types';
import { USER } from 'src/ts/store.types';
import ToastUtil from 'src/utils/Toast';
import { fetcher } from 'src/utils/fetcher';
import ChangePassword from './ChangePassword';
import CustomDrawer from 'src/utils/CustomDrawer';
const submitButtonIntial = {
  submitActive: true,
  submitLoading: false,
  loadingText: 'جاري تحديث البيانات'
};
const accInfo = [
  {
    label: 'الاسم',
    name: 'name',
    type: 'text',

    errorMessage: 'لا يمكن ترك الاسم فارغا'
  },
  {
    label: 'اسم العائلة',
    name: 'lastName',
    type: 'text',

    errorMessage: 'لا يمكن ترك الاسم فارغا'
  },
  {
    label: 'البريد الالكتروني ',
    name: 'email',
    re: /^([a-zA-Z0-9_\-?\.?]+)@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/,
    errorMessage: 'البريد الالكتروني غير صحيح',
    type: 'text'
  },
  {
    label: 'رقم الهاتف',
    name: 'phone',
    type: 'number'
  }
];

type Props = {
  user: USER;
  isAdminUpdate?: boolean;
};
export function Account({ user, isAdminUpdate = false }: Props) {
  const setUser = useStore((state) => state.setUser);
  const prices = useStore((state) => state.prices);
  const currentUser = useStore((state) => state.user);
  const [accountInfo, setAccountInfo] = useState<Profile | any>(user.profile);
  const [errors, setErrors] = useState<Profile | any>(user.profile);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isFreeSubscription, setIsFreeSubscription] = useState('');
  const [showFormActions, setShowFormActions] = useState('none');
  const [submitButton, setSubmitButton] = useState(submitButtonIntial);
  const [isOpen, setIsOpen] = useState(false); // Drawer for delete person for admin
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  function handleError(name: string, error: '' | 'fine') {
    if (error === '') {
      setErrors({ ...errors, [name]: '' });
    } else {
      setErrors({ ...errors, [name]: 'fine' });
    }
  }
  function onReset() {
    if (currentUser?.role) {
      setAccountInfo(user.profile);
    } else {
      setAccountInfo(currentUser?.profile);
    }
    setErrors(user.profile);

    setShowFormActions('none');
    setIsUpdate(false);
    setSubmitButton(submitButtonIntial);
  }

  async function addFreeSubscripion() {
    const thePrice = prices.find((price) => price._id === isFreeSubscription);
    const payload = {
      userId: user._id,
      priceId: thePrice?._id,
      category: thePrice?.category
    };
    fetcher({
      url: '/subscriptions/free',
      data: payload,
      method: 'post',
      successToast: 'تم الاضافه بنجاح'
    });
    return resetSubmitButton();
  }
  async function onSubmit() {
    setSubmitButton((old) => ({ ...old, submitLoading: true }));
    accountInfo.password && delete accountInfo.password;

    const payload = {
      method: 'patch',
      data: accountInfo,
      successToast: 'تم تحديث البيانات بنجاح',
      errorToast: 'تم ادخال بيانات خاطئة'
    };
    if (isAdminUpdate) {
      fetcher({
        url: '/admin/account/' + user._id + '?path=admin',
        ...payload
      });
      return resetSubmitButton();
    }
    const updatedUser = await fetcher({
      url: '/users/account/' + user._id,
      ...payload
    });
    if (updatedUser) {
      setUser(updatedUser);
    }
    resetSubmitButton();
  }

  function resetSubmitButton() {
    setIsUpdate(false);
    setShowFormActions('none');
    setSubmitButton(submitButtonIntial);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setAccountInfo({ ...accountInfo, [name]: value });
    setIsUpdate(true);
    const find = accInfo.find((item) => item.name === name);
    if (find) {
      if (find.re) {
        find.re.test(value) ? handleError(name, 'fine') : handleError(name, '');
      } else {
        if (!value) {
          handleError(name, '');
        } else {
          handleError(name, 'fine');
        }
      }
    }
  }

  useEffect(() => {
    for (const key in errors) {
      if (errors[key] === '' || errors[key] === 0) {
        setSubmitButton((old) => ({ ...old, submitActive: false }));
        break;
      } else {
        setSubmitButton((old) => ({ ...old, submitActive: true }));
        setShowFormActions('flex');
      }
    }
  }, [errors]);

  useEffect(() => {
    setAccountInfo(user.profile);
    setErrors(user.profile);
  }, [user]);

  // admin actions

  async function handleRemovePerson() {
    await fetcher({
      url: `/admin/user/${user._id}`,
      method: 'delete',
      successToast: 'تم حذف الشخص'
    });
    onClose();
  }
  return (
    <Flex
      sx={{
        'div > div': {
          right: 'unset',
          left: '10px'
        }
      }}
      maxW='700px'
      mx='auto'
      gap='3'
      flexDir='column'
    >
      {accInfo.map((info, i) => {
        if (user.role && info.name === 'phone') return null;
        return (
          <FormControl
            isInvalid={errors[info.name] === '' ? true : false}
            key={i}
          >
            <InputGroup>
              <InputLeftAddon
                w={{ base: '120px', md: '160px' }}
                bg='orange.500'
                color='white'
                children={info.label}
              />
              <Input
                onChange={handleChange}
                type={info.type}
                _placeholder={{ color: 'gray.300' }}
                variant='outline'
                errorBorderColor='crimson'
                name={info.name}
                focusBorderColor='orange.500'
                value={accountInfo[info.name]}
              />
            </InputGroup>
            <FormErrorMessage> {info.errorMessage} </FormErrorMessage>
          </FormControl>
        );
      })}
      <FormAction
        onReset={onReset}
        onSubmit={onSubmit}
        display={showFormActions && isUpdate ? 'flex' : 'none'}
        submitButton={submitButton}
      />
      <ChangePassword isAdminUpdate={isAdminUpdate} id={user._id} />

      {isAdminUpdate && (
        <>
          <Button onClick={onOpen} colorScheme='red'>
            {' '}
            حذف المستخدم
          </Button>

          <Select
            variant='filled'
            onChange={(e) => setIsFreeSubscription(e.target.value)}
            placeholder='اضف اشتراك مجاني'
          >
            {prices.map((plan) => (
              <option key={plan._id} value={plan._id}>
                {plan.label}
              </option>
            ))}
          </Select>
          {isFreeSubscription && (
            <Button colorScheme='green' onClick={addFreeSubscripion}>
              {' '}
              اضف الاشتراك{' '}
            </Button>
          )}
          <CustomDrawer
            onClose={onClose}
            onSubmit={handleRemovePerson}
            title={`حذف ${user.profile.name} نهائيا`}
            isOpen={isOpen}
            text='هل انت متاكد من حذف الشخص'
          />
        </>
      )}
    </Flex>
  );
}

export default Account;
