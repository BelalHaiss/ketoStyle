import { Flex, Button, Radio } from '@chakra-ui/react';
import { fetcher } from 'src/utils/fetcher';
import { useRouter } from 'next/router';
import { useStore } from 'src/store';
import { useState } from 'react';
type Prop = {
  page: number;
  navigatePage: (senario: 'next' | 'prev') => void;
  buttonState: {
    next: boolean;
    prev: boolean;
  };
  closeModal: () => void;
  registerDetails: any;
};
const maxPages = 8;
export function Walkthrough({
  page,
  navigatePage,
  buttonState,
  closeModal,
  registerDetails
}: Prop) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const setUser = useStore((state) => state.setUser);
  async function register() {
    delete registerDetails.willing;
    const user = await fetcher({
      url: '/users/register',
      method: 'post',
      data: registerDetails,
      successToast: `مرحبا بك ${registerDetails.profile.name} في عالم الكيتو`,
      errorToast: 'حدث خطا برجاء المحاولة لاحقا'
    });
    setLoading(false);
    if (user) {
      setUser(user);
      router.replace('/pricing');
      closeModal();
    }
  }
  return (
    <Flex w='100%' align={'center'} justify='space-between'>
      <Button
        onClick={() => (page !== 8 ? navigatePage('next') : register())}
        colorScheme='orange'
        loadingText='جاري انشاء حسابك'
        isLoading={loading}
        disabled={buttonState.next}
      >
        {page === maxPages ? 'تسجيل' : 'التالي'}
      </Button>
      {/* <RadioGroup> */}
      <Flex gap='1'>
        {Array.from(Array(maxPages)).map((_, i) => (
          <Radio
            size='sm'
            isReadOnly
            isChecked={page === i + 1}
            colorScheme={'orange'}
            key={i}
            value={i + 1}
          ></Radio>
        ))}
      </Flex>
      {/* </RadioGroup> */}

      <Button
        onClick={() => navigatePage('prev')}
        colorScheme='orange'
        variant={'ghost'}
        disabled={buttonState.prev}
      >
        رجوع
      </Button>
    </Flex>
  );
}
