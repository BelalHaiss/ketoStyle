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
  const [isUSD, setIsUSD] = useState('false');
  const [usdValue, setUSDValue] = useState(0.27);
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
    if (isUSD === 'true') {
      return ToastUtil(
        'لا يمكن التعديل من هنا عدل سعر الدولار وسيتم التحديث تلقائيا',
        'error'
      );
    }
    newAction();
    setPrices(
      priceState.map((price) => {
        if (price._id === name) {
          return {
            ...price,
            price: +value,
            usd: +((+value - price.discount) * usdValue).toFixed(0)
          };
        }
        return price;
      })
    );
  }

  function handleDiscount(name: string, value: string) {
    newAction();
    setPrices(
      priceState.map((price) => {
        if (price._id === name) {
          return {
            ...price,
            discount: +value,
            usd: +((price.price - +value) * usdValue).toFixed(0)
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
          <Flex
            align='center'
            bg='gray.600'
            w='90%'
            justify='space-around'
            mx='auto'
            color='white'
            p='3'
            borderRadius='xl'
            boxShadow='xl'
          >
            <CustomFormControl
              value={usdValue}
              onChange={(_, value) => {
                setUSDValue(+value);
                newAction();
                setPrices((old) =>
                  old.map((price) => ({
                    ...price,
                    usd: +((price.price - price.discount) * +value).toFixed(0)
                  }))
                );
              }}
              width='250px'
              label='سعر الدولار '
              type='number'
              name='dollar'
            />
            <Flex align='center' gap='3' flexDir='column'>
              <Text fontSize='lg'>عرض السعر </Text>
              <RadioGroup
                display='flex'
                gap='4'
                onChange={setIsUSD}
                value={isUSD}
              >
                <Radio value='false'>ريال سعودي</Radio>
                <Radio value='true'>دولار</Radio>
              </RadioGroup>
            </Flex>
          </Flex>
          {priceState.map((plan, i) => (
            <Flex gap='2' key={i} align='center'>
              <CustomFormControl
                value={isUSD === 'false' ? plan.price : plan.usd}
                onChange={handleChange}
                label={plan.label}
                type='number'
                name={plan._id}
                readOnly={isUSD === 'true'}
              />
              {isUSD === 'false' && (
                <>
                  <CustomFormControl
                    key={i + 'discount'}
                    value={plan.discount}
                    onChange={handleDiscount}
                    label='الخصم'
                    type='number'
                    name={plan._id}
                  />
                  <CustomFormControl
                    key={i + 'net'}
                    value={plan.price - plan.discount}
                    onChange={handleChange}
                    label={'صافي السعر'}
                    type='number'
                    name={plan._id}
                    readOnly
                  />
                </>
              )}
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
