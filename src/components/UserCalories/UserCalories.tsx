import { Flex, Text, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { CaloriesLoader } from './CaloriesLoader';
import { useStore } from 'src/store';
import { EnergyProgress } from './EnergyProgress';
import { useAsync } from 'src/customHooks/useAsync';
import { TimesEnergy, MealsData } from './TimesEnergy';
import { MyMealsModal } from './MyMealsModal';
import { calculateEnergy, calculateActualEnergy } from './utils';
export type Energy = {
  total: number;
  actual: number;
};
function initialEnergy(): Energy {
  return {
    total: 100,
    actual: 10
  };
}

export function UserCalories() {
  const user = useStore((state) => state.user);
  const [loading, setLoader] = useState(true);
  const [calories, setCalories] = useState<Energy>(initialEnergy);
  const [proteins, setProteins] = useState<Energy>(initialEnergy);
  const [fats, setFats] = useState<Energy>(initialEnergy);
  const [carbs, setCarbs] = useState<Energy>(initialEnergy);
  const [shouldFetch, setShouldFetch] = useState(true);
  //  @ts-ignore
  const [mealsData, setMealsData] = useState<MealsData>(null);
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  useAsync(
    !shouldFetch
      ? null
      : {
          url: `/users/getmeal/${
            user!._id
          }?date=${new Date().toLocaleDateString('en')}`
        },
    setMealsData,
    {
      onRequest: () => setShouldFetch(false),
      onSuccess: (data: MealsData) => {
        const actuals = calculateActualEnergy(data);
        setProteins((prev) => ({
          ...prev,
          actual: +actuals.proteins.toFixed(0)
        }));
        setCarbs((prev) => ({
          ...prev,
          actual: +actuals.carbs.toFixed(0)
        }));
        setFats((prev) => ({
          ...prev,
          actual: +actuals.fats.toFixed(0)
        }));
        setLoader(false);
      }
    }
  );
  useEffect(() => {
    const totals = calculateEnergy(
      user!.willing,
      user!.physicalActivity,
      user!.measurements
    );
    setCalories((prev) => ({
      ...prev,
      total: +totals.calories.toFixed(0)
    }));
    setProteins((prev) => ({
      ...prev,
      total: +totals.proteins.toFixed(0)
    }));
    setFats((prev) => ({ ...prev, total: +totals.fats.toFixed(0) }));
    setCarbs((prev) => ({ ...prev, total: +totals.carbs.toFixed(0) }));
  }, []);

  return (
    <Flex w='100%' flexDir='column' p='1' align='center'>
      <Text
        color='orange.800'
        fontSize={{ base: 'lg', lg: '3xl' }}
        fontWeight='semibold'
      >
        سعراتك الحرارية لهذا اليوم
      </Text>
      {loading && <CaloriesLoader />}
      {!loading && (
        <Flex
          w='100%'
          gap='10'
          align='center'
          flexDir={{ base: 'column', lg: 'row' }}
        >
          {/* energy progress */}
          <Flex w={{ base: '100%', lg: '48%' }} gap='3' flexDir='column'>
            <EnergyProgress
              energy={carbs}
              label='الكربوهيدرات'
              colorScheme='purple'
              value={(carbs.actual / carbs.total) * 100}
            />
            <EnergyProgress
              energy={proteins}
              label='البروتينات'
              colorScheme='red'
              value={(proteins.actual / proteins.total) * 100}
            />
            <EnergyProgress
              energy={fats}
              label='الدهون'
              colorScheme='green'
              value={(fats.actual / fats.total) * 100}
            />
          </Flex>

          {/*  meals energy */}
          <Flex
            w={{ base: '100%', lg: '48%' }}
            bg='orange.200'
            flexDir='column'
            borderRadius={'xl'}
            p='1'
            align='center'
            boxShadow={'xl'}
          >
            <Flex w='100%' align='center' p='1' justify={'space-around'}>
              <Text
                color='orange.900'
                fontSize={{ base: 'md', md: 'xl' }}
                fontWeight='bold'
              >
                محتوي اكلك لهذا اليوم
              </Text>
              <Button
                onClick={onOpen}
                size={{ base: 'sm', md: 'md' }}
                colorScheme='orange'
              >
                عرض الوجبات
              </Button>
            </Flex>
            {mealsData && <TimesEnergy data={mealsData} />}
          </Flex>
          <MyMealsModal
            onClose={onClose}
            isOpen={isOpen}
            mealsData={mealsData}
          />
        </Flex>
      )}
    </Flex>
  );
}