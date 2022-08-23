import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react';
import { MealsData } from './TimesEnergy';
import { MealBox } from 'src/components/meals/MealBox';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  mealsData: MealsData;
};

export function MyMealsModal({ isOpen, onClose, mealsData }: Props) {
  return (
    <Modal isOpen={isOpen} size={{ base: 'full', md: '6xl' }} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign='center'>
          {' '}
          الوجبات التي تم تناولها اليوم
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Tabs isFitted variant='soft-rounded' colorScheme='orange'>
            <TabList>
              <Tab>وجبات الفطور</Tab>
              <Tab>وجبات الغداء</Tab>
              <Tab>وجبات العشاء</Tab>
              <Tab>وجبات خفيفة</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Flex wrap='wrap' p='1' gap='2'>
                  {mealsData['breakfast'].map((meal, i) => (
                    <MealBox time='breakfast' meal={meal} key={i} />
                  ))}
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex wrap='wrap' p='1' gap='2'>
                  {mealsData['lunch'].map((meal, i) => (
                    <MealBox time='lunch' meal={meal} key={i} />
                  ))}
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex wrap='wrap' p='1' gap='2'>
                  {mealsData['dinner'].map((meal, i) => (
                    <MealBox time='dinner' meal={meal} key={i} />
                  ))}
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex wrap='wrap' p='1' gap='2'>
                  {mealsData['snack'].map((meal, i) => (
                    <MealBox time='snack' meal={meal} key={i} />
                  ))}
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='yellow' mr={3} onClick={onClose}>
            الغاء
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
