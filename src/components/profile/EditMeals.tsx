import { Flex, Text, Button } from '@chakra-ui/react';
import { Category, Meats } from 'src/ts/register.types';
import { useState } from 'react';
import { useStore } from 'src/store';
import { allCategories } from 'src/components/signup/Controller';
import FormAction from 'src/utils/FormActions';
import { fetcher } from 'src/utils/fetcher';

const submitButtonIntial = {
  submitActive: true,
  submitLoading: false,
  loadingText: 'جاري تحديث البيانات'
};
export default function EditMeal() {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  const [selectedCategories, setSelectedCategories] = useState<Meats[]>(
    user!.categories
  );
  const [showFormActions, setShowFormActions] = useState(false);
  const [submitButton, setSubmitButton] = useState(submitButtonIntial);

  function handleCategory(value: Meats) {
    const isChecked = selectedCategories.find((category) => category === value);
    let newCategoryState = [...selectedCategories];
    if (isChecked) {
      newCategoryState = selectedCategories.filter(
        (category) => category !== value
      );
      setSelectedCategories(newCategoryState);
    } else {
      newCategoryState = [...selectedCategories, value];
      setSelectedCategories(newCategoryState);
    }
    setShowFormActions(true);
  }
  function onReset(isUpdateed?: boolean) {
    !isUpdateed && setSelectedCategories(user!.categories);
    setShowFormActions(false);
    setSubmitButton(submitButtonIntial);
  }
  async function onSubmit() {
    setSubmitButton({ ...submitButton, submitLoading: true });
    const res = await fetcher({
      url: `/users/meats/${user!._id}`,
      method: 'post',
      data: selectedCategories,
      successToast: 'تم تحديث البيانات بنجاح'
    });
    if (res) {
      setUser(res);
    }
    onReset(true);
  }
  return (
    <Flex
      flexDir={'column'}
      w={{ base: '90%', md: '60%' }}
      mx='auto'
      bg='orange.200'
      p='5'
      boxShadow='lg'
      borderRadius={'lg'}
      align='center'
    >
      <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight='bold'>
        اختر أنواع اللحوم اللتي تفضلها
      </Text>

      <Flex
        w='100%'
        my='2'
        flexDir={{ base: 'column', md: 'row' }}
        align='center'
        gap='3'
        justify='space-between'
      >
        <Flex align='center' flexDir={'column'} gap='2'>
          {allCategories.map((category: Category, i) => {
            if (i >= 3) return;
            return (
              <Button
                w='150px'
                onClick={() => handleCategory(category.value)}
                leftIcon={category.icon}
                colorScheme='orange'
                variant={
                  selectedCategories.indexOf(category.value) === -1
                    ? 'ghost'
                    : 'solid'
                }
                background={
                  selectedCategories.indexOf(category.value) === -1
                    ? 'orange.50'
                    : 'orange.500'
                }
                key={i}
              >
                {category.label}
              </Button>
            );
          })}
        </Flex>
        <Flex mb='3' align='center' flexDir={'column'} gap='2'>
          {allCategories.map((category: Category, i) => {
            if (i <= 2) return;
            return (
              <Button
                w='150px'
                onClick={() => handleCategory(category.value)}
                leftIcon={category.icon}
                colorScheme='orange'
                variant={
                  selectedCategories.indexOf(category.value) === -1
                    ? 'ghost'
                    : 'solid'
                }
                background={
                  selectedCategories.indexOf(category.value) === -1
                    ? 'orange.50'
                    : 'orange.500'
                }
                key={i}
              >
                {category.label}
              </Button>
            );
          })}
        </Flex>
      </Flex>
      <FormAction
        onReset={onReset}
        onSubmit={onSubmit}
        display={showFormActions ? 'flex' : 'none'}
        submitButton={submitButton}
      />
    </Flex>
  );
}
