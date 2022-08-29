import { Flex, Text, Icon, Image } from '@chakra-ui/react';
import { USER } from 'src/ts/store.types';
import { useState, useEffect } from 'react';
import { getStatus } from 'src/utils/fetchData';
import FormAction from 'src/utils/FormActions';
import { useAsync } from 'src/customHooks/useAsync';
const initSubmitButton = {
  submitActive: false,
  submitLoading: false,
  loadingText: 'جاري تحديث البيانات'
};
type Props = {
  user: USER;
};
const moods = [
  { value: 'sleepy', label: 'نعاس' },
  {
    value: 'moody',
    label: 'متقلب'
  },
  {
    value: 'happy',
    label: 'سعيد'
  },
  {
    value: 'tired',
    label: 'متعب'
  },
  {
    value: 'ignore',
    label: 'لا مبالي'
  },
  {
    value: 'clear',
    label: 'صافي'
  },
  {
    value: 'active',
    label: 'نشيط'
  }
];
const symptoms = [
  { value: 'headache', label: 'صداع' },
  { value: 'bloating', label: 'انتفاخ المعدة' },
  { value: 'stomach', label: 'الم المعدة' },
  { value: 'thirsty', label: 'عطش' },
  { value: 'disgust', label: 'شعور غثيان' },
  { value: 'smell', label: 'رائحة فم كريهة' },
  { value: 'constipation', label: 'امساك المعدة' }
];
const initStatus = {
  mood: '',
  symptoms: ''
};
export default function Status({ user }: Props) {
  const [status, setStatus] = useState(initStatus);
  const [savedStatus, setSavedStatus] = useState(initStatus);
  const [displayFormAction, setDisplayFormAction] = useState('none');
  const [submitButton, setSubmitButton] = useState(initSubmitButton);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const requestComplete = useAsync(
    !isSubmitting
      ? null
      : {
          url: `/users/status/${user._id}`,
          method: 'post',
          data: {
            symptoms: status.symptoms,
            mood: status.mood,
            user: user._id,
            date: new Date().toLocaleDateString('en')
          },
          successToast: 'تم تحديث البيانات بنجاح'
        },
    setStatus,
    {
      onRequest: () => setIsSubmitting(false),
      onSuccess: (data: any) => {
        resetFormAction();
        setSavedStatus(data);
      }
    }
  );

  function resetFormAction() {
    setDisplayFormAction('none');

    setSubmitButton(initSubmitButton);
  }
  function onReset() {
    setStatus(savedStatus);
    resetFormAction();
  }
  function onSubmit() {
    setSubmitButton({
      ...submitButton,
      submitLoading: true
    });
    setIsSubmitting(true);
  }
  useEffect(() => {
    let isMount = { current: true };
    getStatus(user._id, setStatus, isMount, setSavedStatus);
    return () => {
      isMount.current = false;
    };
  }, []);

  function handleStatus(name: string, value: string) {
    setStatus({
      ...status,
      [name]: value
    });
    setSubmitButton({
      ...submitButton,
      submitActive: true
    });
    setDisplayFormAction('flex');
  }
  return (
    <Flex
      bg='orange.100'
      flexDir={'column'}
      color='orange.800'
      layerStyle={'flexCenter'}
      gap='3'
      p='2'
    >
      <Text fontSize={{ base: 'lg', md: '3xl' }} fontWeight='bold'>
        حالتك المزاجية
      </Text>
      <Text fontSize={{ base: 'md', md: 'lg' }}>
        نود معرفة حالتك المزاجية لهذا اليوم (اختياري)
      </Text>

      <Flex w='100%' flexDir='column'>
        <Text px='4' fontSize={{ base: 'md', md: 'xl' }} fontWeight='bold'>
          مزاجك لهذا اليوم
        </Text>
        <Flex w='100%' gap='1' my='3' wrap='wrap'>
          {moods.map((mood) => (
            <Flex
              key={mood.value}
              gap='2'
              align='center'
              flexDir='column'
              w='90px'
              cursor={'pointer'}
            >
              <Image
                cursor={'pointer'}
                src={'/home/status/' + mood.value + '.svg'}
                alt={mood.value}
                w='50px'
                onClick={() => handleStatus('mood', mood.value)}
                borderRadius={status.mood === mood.value ? '20%' : 'initial'}
                transform={status.mood === mood.value ? 'scale(1.2)' : 'none'}
                bg={status.mood === mood.value ? 'yellow.600' : 'transparent'}
                _hover={{
                  transform: 'scale(1.2)',
                  transition: 'all .2s ease-in-out',
                  bg: 'yellow.600',
                  borderRadius: '20%'
                }}
              />
              <Text textAlign={'center'} fontSize={{ base: 'md', md: 'lg' }}>
                {mood.label}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex w='100%' gap='1' flexDir='column'>
        <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight='bold'>
          الأعراض لهذا اليوم
        </Text>
        <Flex w='100%' gap='1' my='3' wrap='wrap'>
          {symptoms.map((symptom) => (
            <Flex
              key={symptom.value}
              gap='2'
              align='center'
              flexDir='column'
              w='89px'
            >
              <Image
                cursor={'pointer'}
                src={'/home/status/' + symptom.value + '.svg'}
                alt={symptom.value}
                w='50px'
                onClick={() => handleStatus('symptoms', symptom.value)}
                borderRadius={
                  status.symptoms === symptom.value ? '20%' : 'initial'
                }
                transform={
                  status.symptoms === symptom.value ? 'scale(1.2)' : 'none'
                }
                bg={
                  status.symptoms === symptom.value
                    ? 'yellow.600'
                    : 'transparent'
                }
                _hover={{
                  transform: 'scale(1.2)',
                  transition: 'all .2s ease-in-out',
                  bg: 'yellow.600',
                  borderRadius: '20%'
                }}
              />
              <Text textAlign={'center'} fontSize={{ base: 'md', md: 'lg' }}>
                {symptom.label}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <FormAction
        display={displayFormAction}
        onReset={onReset}
        onSubmit={onSubmit}
        submitButton={submitButton}
      />
    </Flex>
  );
}
