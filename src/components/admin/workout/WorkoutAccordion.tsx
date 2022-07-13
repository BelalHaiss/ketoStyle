import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  AccordionIcon
} from '@chakra-ui/react';
import { useState } from 'react';
import { Workout } from 'src/ts/store.types';
import { fetcher } from 'src/utils/fetcher';
import { CustomFormControl } from 'src/utils/FormControl';
import FormAction from 'src/utils/FormActions';
type Props = {
  workout: Workout;
};
const initSubmitButton = {
  submitActive: false,
  submitLoading: false,
  loadingText: 'جاري تحديث البيانات'
};
export default function WorkoutAccordin({ workout }: Props) {
  const [state, setState] = useState<Workout>(workout);
  const [submitButton, setSubmitButton] = useState(initSubmitButton);
  const [formActionDisplay, setFormActionDisplay] = useState('none');
  function resetFormAction() {
    setFormActionDisplay('none');
    setSubmitButton(initSubmitButton);
  }
  function onReset() {
    setState(workout);
    resetFormAction();
  }
  async function onSubmit() {
    setSubmitButton({ ...submitButton, submitLoading: true });
    await fetcher({
      url: `/workout/${state._id}?path=workouts`,
      method: 'patch',
      successToast: 'تم التحديث بنجاح',
      data: state
    });
    resetFormAction();
  }
  function handleChange(name: string, value: string) {
    setFormActionDisplay('flex');
    setSubmitButton({ ...submitButton, submitActive: true });
    const videoIndex = +name.slice(0, 1);
    const isUrl = name.includes('url') ? true : false;

    const videos = state.videos.map((vid, i) => {
      if (i === videoIndex) {
        return {
          duration: isUrl ? vid.duration : +value,
          url: isUrl ? value : vid.url
        };
      }
      return vid;
    });
    setState({ ...state, videos });
  }
  return (
    <>
      <AccordionItem>
        <AccordionButton
          _hover={{
            bg: 'orange.100'
          }}
          _expanded={{ bg: 'orange.200' }}
        >
          <Flex flexDir='row' w='100%' justify='center'>
            <Text fontSize='xl' fontWeight='bolder'>
              {state.label}
            </Text>
            <AccordionIcon />
          </Flex>
        </AccordionButton>
        <AccordionPanel>
          <Tabs isFitted colorScheme={'orange'} variant='soft-rounded'>
            <TabList mb='1em'>
              <Tab>الفيديو الاول</Tab>
              <Tab>الفيديو الثاني</Tab>
              <Tab>الفيديو الثالث</Tab>
            </TabList>
            <TabPanels>
              {state.videos.map((video, i) => (
                <TabPanel key={i}>
                  <Flex gap='2' layerStyle={'flexResponsive'}>
                    <CustomFormControl
                      type='text'
                      value={video.url}
                      label={'رابط الفيديو'}
                      width='700px'
                      name={i + 'url'}
                      onChange={handleChange}
                    />
                    <CustomFormControl
                      type='number'
                      value={video.duration}
                      label={'مدة الفيديو'}
                      width='400px'
                      name={i + 'duration'}
                      onChange={handleChange}
                    />
                  </Flex>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </AccordionPanel>
      </AccordionItem>
      <FormAction
        onReset={onReset}
        onSubmit={onSubmit}
        display={formActionDisplay}
        submitButton={submitButton}
      />
    </>
  );
}
