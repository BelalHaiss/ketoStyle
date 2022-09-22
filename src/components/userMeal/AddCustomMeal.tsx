import { useState } from 'react';
import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import { IoFastFoodOutline } from 'react-icons/io5';
import { CustomFormControl } from 'src/utils/FormControl';
import { CustomMeal } from 'src/components/UserCalories/TimesEnergy';
import { fetcher } from 'src/utils/fetcher';
import { useStore } from 'src/store';
function initCustomMeal() {
  return { carbs: 0, fats: 0, proteins: 0, calories: 0 };
}
type Props = { setFetchCalories: (bool: boolean) => void };
export default function AddCustomMeal({ setFetchCalories }: Props) {
  const user = useStore((state) => state.user);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [customMeal, setCustomMeal] = useState<CustomMeal>(initCustomMeal);
  function handleChange(name: string, value: string) {
    setIsChange(true);
    setCustomMeal({ ...customMeal, [name]: +value });
  }
  async function handleSubmit() {
    setLoading(true);
    await fetcher({
      url: `/users/addcustommeal/${user!._id}`,
      method: 'post',
      data: { ...customMeal, date: new Date().toLocaleDateString('en') },
      successToast: 'تم الاضافة بنجاح '
    });
    setLoading(false);
    setCustomMeal(initCustomMeal());
    setFetchCalories(true);
    onClose();
  }
  return (
    <Flex w='100%' mt='-3' mb='2'>
      <Button
        colorScheme={'orange'}
        w='60vw'
        leftIcon={<IoFastFoodOutline fontSize='30px' />}
        mx='auto'
        onClick={onOpen}
      >
        اضف وجبتك الخاصه
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> وجبتك الخاصه </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CustomFormControl
              type='number'
              label='السعرات الحرارية'
              name='calories'
              value={customMeal.calories}
              onChange={handleChange}
              readOnly={loading}
            />
            <CustomFormControl
              type='number'
              label='الكربوهيدرات '
              name='carbs'
              value={customMeal.carbs}
              onChange={handleChange}
              readOnly={loading}
            />
            <CustomFormControl
              type='number'
              label='البروتينات '
              name='proteins'
              value={customMeal.proteins}
              onChange={handleChange}
              readOnly={loading}
            />
            <CustomFormControl
              type='number'
              label='الدهون '
              name='fats'
              value={customMeal.fats}
              onChange={handleChange}
              readOnly={loading}
            />
          </ModalBody>

          <ModalFooter>
            <Button ml='3' onClick={onClose}>
              الغاء
            </Button>
            <Button
              disabled={!isChange}
              onClick={handleSubmit}
              colorScheme={'green'}
            >
              اضافه
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
