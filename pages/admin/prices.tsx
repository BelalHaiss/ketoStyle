import AdminHoc from 'src/components/AdminHOC';
import { Flex, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { Price } from 'src/ts/store.types';
import { useStore } from 'src/store';
import { CustomFormControl } from 'src/utils/FormControl';
import FormAction from 'src/utils/FormActions';
import { fetcher } from 'src/utils/fetcher';
import Loader from 'src/utils/Loader';
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
  function handleChange(name: string, value: string) {
    setDisplayFormAction('flex');
    setSubmitButton({
      ...submitButton,
      submitActive: true
    });
    setPrices(
      priceState.map((price) => {
        if (price._id === name) {
          return { ...price, price: +value };
        }
        return price;
      })
    );
  }
  if (!prices || !priceState.length) return <Loader />;
  return (
    <Flex flexDir={'column'} layerStyle={'flexCenter'}>
      {loading ? (
        <Loader />
      ) : (
        priceState.map((plan, i) => (
          <CustomFormControl
            key={i}
            value={plan.price}
            onChange={handleChange}
            label={plan.label}
            type='number'
            name={plan._id}
          />
        ))
      )}
      <FormAction
        onReset={onReset}
        onSubmit={onSubmit}
        display={displayFormAction}
        submitButton={submitButton}
      />
    </Flex>
  );
}

export default AdminHoc(Prices, 'prices');
