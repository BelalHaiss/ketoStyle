/* eslint-disable react/no-children-prop */
import {
  Flex,
  Input,
  FormLabel,
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
import { USER } from 'src/ts/store.types';
import { Measure } from 'src/ts/register.types';
import { allMeasurements } from 'src/components/signup/Controller';
import { fetcher } from 'src/utils/fetcher';
import RenderHoc from 'src/components/RenderHoc';

const submitButtonIntial = {
  submitActive: true,
  submitLoading: false,
  loadingText: 'جاري تحديث البيانات'
};
type Props = {
  user: USER;
  shouldRender: boolean;
  isAdminUpdate: boolean;
};
const physicalActivities: {
  label: string;
  value: USER['physicalActivity'];
}[] = [
  {
    label: '  لا يوجد نشاط',
    value: 'sedentary'
  },
  {
    label: '  نشاط خفيف (ا - 3 يوم/ اسبوع)',
    value: 'light'
  },
  {
    label: '  نشاط متوسط (3 - 5 يوم/ اسبوع)',
    value: 'moderate'
  },
  {
    label: '  نشيط (6 - 7 يوم/ اسبوع)',
    value: 'active'
  }
];
const willings: {
  label: string;
  value: USER['willing'];
}[] = [
  {
    label: 'اريد انقاص وزني',
    value: 'min'
  },
  {
    label: 'اريد إنقاص اكبر وزن ممكن',
    value: 'max'
  }
];
function Measurements({
  user,
  isAdminUpdate,

  shouldRender //  if true  normaluser is login otherwise an admin and we cant load this component
}: Props) {
  const setUser = useStore((state) => state.setUser);
  const [errors, setErrors] = useState<any>(user.measurements);
  const [measurements, setMeasurements] = useState<Measure | any>(
    user.measurements
  );
  const [physicalActivity, setPhysicalActivity] = useState(
    user.physicalActivity
  );
  const [willing, setWilling] = useState(user.willing);
  useEffect(() => {
    setMeasurements(user.measurements);
    setErrors(user.measurements);
    setPhysicalActivity(user.physicalActivity);
    setWilling(user.willing);
  }, [user]);
  const [weightError, setWeightError] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const [showFormActions, setShowFormActions] = useState('none');
  const [submitButton, setSubmitButton] = useState(submitButtonIntial);
  function handleError(name: string, error: '' | 'fine') {
    if (error === '') {
      setErrors({ ...errors, [name]: '' });
    } else {
      setErrors({ ...errors, [name]: 'fine' });
    }
  }
  function onReset() {
    setErrors(user.measurements);
    setMeasurements(user.measurements);
    setPhysicalActivity(user.physicalActivity);
    setWeightError('');
    setShowFormActions('none');
    setIsUpdate(false);
    setSubmitButton(submitButtonIntial);
  }

  function getMeasurement(measurements: Measure) {
    if (
      measurements.desiredWeight === user.measurements.desiredWeight &&
      measurements.weight === user.measurements.weight
    ) {
      return measurements;
    } else {
      // user change weight so we change date
      return { ...measurements, weightUpdateDate: new Date() };
    }
  }
  async function onSubmit() {
    setSubmitButton((old) => ({ ...old, submitLoading: true }));

    const payload = {
      method: 'patch',
      data: {
        measurements: getMeasurement(measurements),
        physicalActivity,
        willing
      },
      successToast: 'تم تحديث البيانات بنجاح',
      errorToast: 'حدث خطا برجاء المحاولة لاحقا'
    };
    if (isAdminUpdate) {
      fetcher({
        url: '/admin//measure/' + user._id + '?path=admin',
        ...payload
      });
      pauseSubmitButton();
      return;
    }

    const updatedUser = await fetcher({
      url: '/users/measure/' + user._id,
      ...payload
    });
    if (updatedUser) {
      setUser(updatedUser);
    }
    pauseSubmitButton();
  }
  function pauseSubmitButton() {
    setIsUpdate(false);
    setShowFormActions('none');
    setSubmitButton(submitButtonIntial);
  }

  function handleActivityChange(e: ChangeEvent<HTMLSelectElement>) {
    if (e.target.value) {
      setIsUpdate(true);

      setPhysicalActivity(e.target.value as USER['physicalActivity']);
    }
  }
  function handleWillingChange(e: ChangeEvent<HTMLSelectElement>) {
    if (e.target.value) {
      setIsUpdate(true);

      setWilling(e.target.value as USER['willing']);
    }
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setMeasurements((old: any) => ({ ...old, [name]: +value }));
    setIsUpdate(true);
    const find = allMeasurements.find((m) => m.name === name);
    if (find) {
      if (+value >= find.min && +value <= find.max) {
        handleError(name, 'fine');
        if (name === 'weight') setWeightError('fine');
      } else {
        handleError(name, '');
        if (name === 'weight') setWeightError('');
      }
    }
    if (name === 'desiredWeight' || name === 'weight') {
      validateDesiredWeight(name, +value);
    }
  }
  function validateDesiredWeight(
    name: 'weight' | 'desiredWeight',
    value: number
    // this for update weight error only
  ) {
    if (name === 'weight') {
      if (
        value >= measurements.desiredWeight &&
        measurements.desiredWeight >= 40
      ) {
        handleError('desiredWeight', 'fine');
      } else {
        handleError('desiredWeight', '');
      }
      return;
    }
    if (name === 'desiredWeight') {
      if (value <= measurements.weight && value >= 40) {
        handleError(name, 'fine');
      } else {
        handleError(name, '');
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
    weightError === 'fine' || errors.weight
      ? handleError('weight', 'fine')
      : handleError('weight', '');
  }, [weightError]);

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
      {!isAdminUpdate && (
        <>
          <FormControl>
            <FormLabel fontSize='xl' htmlFor='activity'>
              مدى نشاطك البدني اليومي
            </FormLabel>

            <Select
              id='activity'
              bg='orange.200'
              color='gray.800'
              value={physicalActivity}
              onChange={handleActivityChange}
            >
              {physicalActivities.map(({ label, value }) => (
                <option
                  style={{
                    backgroundColor:
                      physicalActivity === value ? 'DodgerBlue' : ''
                  }}
                  key={value}
                  value={value}
                >
                  {label}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel fontSize='xl' htmlFor='activity'>
              مدى إستعدادك لأنقاص الوزن
            </FormLabel>

            <Select
              id='activity'
              bg='orange.200'
              color='gray.800'
              value={willing}
              onChange={handleWillingChange}
            >
              {willings.map(({ label, value }) => (
                <option
                  style={{
                    backgroundColor: willing === value ? 'DodgerBlue' : ''
                  }}
                  key={value}
                  value={value}
                >
                  {label}
                </option>
              ))}
            </Select>
          </FormControl>
        </>
      )}

      {allMeasurements.map((measure, i) => (
        <FormControl
          isInvalid={errors[measure.name] === '' ? true : false}
          key={i}
        >
          <InputGroup>
            <InputLeftAddon
              w='160px'
              bg='orange.500'
              color='white'
              children={measure.value}
            />
            <Input
              onChange={handleChange}
              type='number'
              _placeholder={{ color: 'gray.300' }}
              variant='outline'
              errorBorderColor='crimson'
              name={measure.name}
              focusBorderColor='orange.500'
              value={
                measurements[measure.name] === 0
                  ? ''
                  : measurements[measure.name]
              }
              placeholder={measure.label}
            />
          </InputGroup>
          <FormErrorMessage> {measure.errorMessage} </FormErrorMessage>
        </FormControl>
      ))}
      <FormAction
        onReset={onReset}
        onSubmit={onSubmit}
        display={showFormActions && isUpdate ? 'flex' : 'none'}
        submitButton={submitButton}
      />
    </Flex>
  );
}

export default RenderHoc(Measurements);
