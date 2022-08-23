import { Flex, Text, Button, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { fetcher } from 'src/utils/fetcher';
import { useAsync } from 'src/customHooks/useAsync';
import { useStore } from 'src/store';
import MealSquare from 'src/components/meals/MealSquare';
import { BackButton } from 'src/utils/BackButton';
import { useRouter } from 'next/router';

const getDate = () => new Date().toLocaleDateString('en');
export default function MealView() {
  const mealView = useStore((state) => state.mealView);
  const user = useStore((state) => state.user);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [fetchIsAded, setFetchIsAdded] = useState(user?.role ? false : true);
  const router = useRouter();
  useAsync(
    !fetchIsAded
      ? null
      : {
          url: `/users/ismealadded/${user?._id}?queryDate=${getDate()}&mealId=${
            mealView?._id
          }&time=${
            //  @ts-ignore
            router.query.time ? router.query.time : mealView?.time.value
          }`
        },
    null,
    {
      onRequest: () => setFetchIsAdded(false),
      onSuccess: (data) => {
        data?.message === 'added' ? setIsAdded(true) : setIsAdded(false);
      }
    }
  );
  async function handleAdding() {
    setSubmitLoading(true);
    const res = await fetcher({
      url: '/users/addmeal/' + user!._id,
      method: 'post',
      data: {
        mealId: mealView!._id,
        date: getDate(),
        //  @ts-ignore
        time: router.query.time ? mealView!.time : mealView!.time.value // mealView!.time this avaiable when open  my meals modal
      },
      successToast: 'تم اضافه الوجبه بنجاح',
      errorToast: 'حدث خطا برجاء المحاولة لاحقا'
    });
    setSubmitLoading(false);
    if (res) setIsAdded(true);
  }
  async function handleRemove() {
    setSubmitLoading(true);
    const res = await fetcher({
      url: '/users/deletemeal/' + user!._id,
      method: 'delete',
      data: {
        mealId: mealView!._id,
        date: getDate(),
        //  @ts-ignore
        time: router.query.time ? mealView!.time : mealView!.time.value // mealView!.time this avaiable when open  my meals modal
      },
      successToast: 'تم الحذف بنجاح',
      errorToast: 'حدث خطا برجاء المحاولة لاحقا'
    });
    setSubmitLoading(false);
    if (res) setIsAdded(false);
  }

  return (
    <Flex
      flexDir='column'
      color='orange.800'
      layerStyle={'flexCenter'}
      position='relative'
      p='2'
      gap='2'
    >
      <BackButton path={user?.role ? '/admin/meals' : 'meals'} />
      {mealView && (
        <>
          <Image
            mt={{ base: '8', md: '1' }}
            src={
              mealView.image.url
                ? mealView.image.url
                : `https://res.cloudinary.com/ketoar/image/upload/v1/${mealView.image}`
            }
            rounded='3xl'
            alt='meal'
            w={{ base: '60%', md: '40%' }}
          />
          <Flex align='center' flexDir={'column'}>
            <Text fontSize={{ base: 'lg', md: '3xl' }} fontWeight='bold'>
              {mealView.name}
            </Text>
            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight=''>
              مدة تحضير الوجبة {mealView.duration} دقائق
            </Text>
          </Flex>

          <Flex
            justify={'space-around'}
            flexDir={{ base: 'column', md: 'row' }}
            w='100%'
            gap='3'
            align='center'
          >
            <MealSquare
              isValues
              title='القيم الغذائيه'
              texts={[
                ` السعرات الحرارية: ${mealView.calories} س`,
                `الكاربوهيدرات: ${mealView.carbs} غم`,
                `البروتين: ${mealView.proteins} غم`,
                `الدهون: ${mealView.fats} غم`
              ]}
            />
            <MealSquare
              isValues={false}
              title='المقادير'
              texts={mealView.components}
            />
          </Flex>

          <Flex flexDir={'column'} my='4' w='80%' mx='auto' gap='2'>
            <Text fontSize={{ base: 'lg', md: '3xl' }} fontWeight='bold'>
              طريقة التحضير
            </Text>
            <Text>{mealView.steps}</Text>
          </Flex>

          {!user?.role && (
            <Button
              onClick={isAdded ? handleRemove : handleAdding}
              colorScheme={isAdded ? 'red' : 'orange'}
              w='70%'
              loadingText={isAdded ? 'جاري الحذف' : 'جاري الاضافة'}
              isLoading={submitLoading}
              mx='auto'
            >
              {isAdded ? 'حذف' : 'اضف الوجبة الي القائمة'}
            </Button>
          )}
        </>
      )}
    </Flex>
  );
}
