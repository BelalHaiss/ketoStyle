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
import ToastUtil from 'src/utils/Toast';
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
  useEffect(() => {
    setMeasurements(user.measurements);
    setErrors(user.measurements);
    setPhysicalActivity(user.physicalActivity);
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
  async function onSubmit() {
    setSubmitButton((old) => ({ ...old, submitLoading: true }));

    const payload = {
      method: 'patch',
      data: {
        measurements,
        physicalActivity
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

      setPhysicalActivity({ ...physicalActivity, answer: e.target.value });
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
        <FormControl>
          <FormLabel fontSize='xl' htmlFor='activity'>
            {user.quest.label}
          </FormLabel>

          <Select
            id='activity'
            bg='orange.200'
            color='gray.800'
            value={physicalActivity.answer}
            onChange={handleActivityChange}
          >
            {user.quest.answers.map(({ answer, _id }) => (
              <option
                style={{
                  backgroundColor:
                    physicalActivity.answer === _id ? 'DodgerBlue' : ''
                }}
                key={_id}
                value={_id}
              >
                {answer}
              </option>
            ))}
          </Select>
        </FormControl>
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
