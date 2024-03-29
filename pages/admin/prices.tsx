import AdminHoc from 'src/components/AdminHOC';
import { Flex, Radio, RadioGroup, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Price } from 'src/ts/store.types';
import { useStore } from 'src/store';
import { CustomFormControl } from 'src/utils/FormControl';
import FormAction from 'src/utils/FormActions';
import { fetcher } from 'src/utils/fetcher';
import Loader from 'src/utils/Loader';
import ToastUtil from 'src/utils/Toast';
const initSubmitButton = {
  submitActive: false,
  submitLoading: false,
  loadingText: 'جاري تحديث البيانات'
};
function Prices() {
  const prices = useStore((state) => state.prices);
  const setGlobalPrices = useStore((state) => state.setPrices);
  const [loading, setLoading] = useState(false);
  const [priceState, setPrices] = useState<Price[]>(prices);
  const [displayFormAction, setDisplayFormAction] = useState('none');

  const [submitButton, setSubmitButton] = useState(initSubmitButton);
  function resetFormAction() {
    setDisplayFormAction('none');
    setSubmitButton(initSubmitButton);
  }
  function onReset() {
    setPrices(prices);
    resetFormAction();
  }
  async function onSubmit() {
    setSubmitButton({
      ...submitButton,
      submitLoading: true
    });
    setLoading(true);
    const res = await fetcher({
      url: '/prices/update',
      method: 'post',
      data: priceState,
      successToast: 'تم التحديث بنجاح',
      errorToast: 'حدث خطأ أثناء التحديث'
    });
    if (res) {
      setGlobalPrices(priceState);
    }
    setLoading(false);
    resetFormAction();
  }

  function newAction() {
    setDisplayFormAction('flex');
    setSubmitButton({
      ...submitButton,
      submitActive: true
    });
  }
  function handleChange(name: string, value: string) {
    newAction();
    setPrices(
      priceState.map((price) => {
        if (price._id === name) {
          return {
            ...price,
            price: +value
          };
        }
        return price;
      })
    );
  }

  function handleBefore(name: string, value: string) {
    newAction();
    setPrices(
      priceState.map((price) => {
        if (price._id === name) {
          return {
            ...price,
            before: +value
          };
        }
        return price;
      })
    );
  }
  if (!prices || !priceState.length) return <Loader />;
  return (
    <Flex flexDir={'column'} gap='3' layerStyle={'flexCenter'}>
      {loading && <Loader />}
      {!loading && (
        <>
          {priceState.map((plan, i) => (
            <Flex gap='2' key={i} align='center'>
              <CustomFormControl
                value={plan.price}
                onChange={handleChange}
                label={plan.label}
                type='number'
                name={plan._id}
              />

              <CustomFormControl
                key={i + 'before'}
                value={plan.before}
                onChange={handleBefore}
                label='قبل'
                type='number'
                name={plan._id}
              />
            </Flex>
          ))}
          <FormAction
            onReset={onReset}
            onSubmit={onSubmit}
            display={displayFormAction}
            submitButton={submitButton}
          />
        </>
      )}
    </Flex>
  );
}

export default AdminHoc(Prices, 'prices');
