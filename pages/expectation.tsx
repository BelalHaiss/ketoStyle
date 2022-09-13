import { Flex, Text, Button, Icon, Heading, Image } from '@chakra-ui/react';
// import Image from 'next/image';
import Meta from 'src/utils/Meta';
import { useStore } from 'src/store';
import { Measure, Willing } from 'src/ts/register.types';
import { calculateEnergy } from 'src/components/UserCalories/utils';
import SubscripedHOC from 'src/components/SubscriptionHOC';

function getBMI(measurements: Measure) {
  // weight / height * height
  const height = (measurements.height / 100) * (measurements.height / 100);
  const bmi = measurements.weight / height;
  return bmi.toFixed(2);
}
function getDesiredWeightDate(measurements: Measure, willing: Willing) {
  let theExpectedDate = 0,
    weekAverage = 0;
  weekAverage = willing === 'min' ? 0.5 : 0.7;
  const weightDifference = measurements.weight - measurements.desiredWeight;
  const daysToDesiredWeight = ((weightDifference / weekAverage) * 7).toFixed(0);
  const expectedDate = new Date(
    new Date(measurements.weightUpdateDate).setDate(
      new Date(measurements.weightUpdateDate).getDate() + +daysToDesiredWeight
    )
  ).toLocaleDateString('ar', {
    dateStyle: 'full'
  });

  return {
    expectedDate,
    weekAverage
  };
}
function Expectaion() {
  const user = useStore((state) => state.user);
  return (
    <>
      <Meta title='التوقعات' />
      {user && (
        <>
          <Flex gap='10' my='3' align='center' flexDir='column'>
            {/* section one  */}

            <Flex
              align='center'
              py='4'
              w='100%'
              my='1'
              px='2'
              gap='2'
              flexDir={{ base: 'column', md: 'row' }}
              justify='space-around'
            >
              <Flex order={{ base: '1', md: '2' }}>
                <Image
                  // width={300}
                  // height={300}
                  // priority
                  w={{ base: '200px', md: '300px' }}
                  h={{ base: '200px', md: '300px' }}
                  className='section-image'
                  alt='Keto weight'
                  src='/home/expectation/weight.png'
                />
              </Flex>
              <Heading
                order={{ base: '2', md: '1' }}
                w={{ base: 'auto', md: '400px' }}
                as='h3'
                color='orange.900'
                fontSize={{ base: 'xl', md: '5xl' }}
              >
                بدأت رحلتك يا {user?.profile?.name}
                <Text display='inline-block' mr='1' color='orange.500'>
                  وزنك المثالي هو {user?.measurements?.desiredWeight} كجم
                </Text>
              </Heading>
            </Flex>

            {/* section 2 */}
            <Flex
              align='center'
              py='4'
              w='100%'
              my='1'
              px='2'
              bg='orange.100'
              gap='2'
              flexDir={{ base: 'column', md: 'row' }}
              justify='space-around'
            >
              <Flex order={{ base: '1', md: '2' }}>
                <Image
                  // width={300}
                  // height={300}
                  // priority
                  w={{ base: '200px', md: '300px' }}
                  h={{ base: '200px', md: '300px' }}
                  className='section-image'
                  alt='Keto weight'
                  src='/home/expectation/bmi.png'
                />
              </Flex>
              <Flex
                w={{ base: 'auto', md: '400px' }}
                flexDir='column'
                align='center'
                gap='3'
                order={{ base: '2', md: '1' }}
              >
                <Heading
                  as='h3'
                  mb='3'
                  color='orange.900'
                  fontSize={{ base: 'xl', md: '5xl' }}
                >
                  مؤشر كتلة جسمك هو
                  <Text display='inline-block' mr='1' color='orange.500'>
                    {getBMI(user?.measurements)}
                  </Text>
                </Heading>
                <Text>
                  لاتقلق يمكنك إنقاص وزنك بكل سهوله مع نظام الكيتو والمحافظة على
                  جسم صحي باتباع الاساليب الصحية، الكثير ممن اتبعو الكيتو خسروا
                  الكثير من الوزن بهذا النظام
                </Text>
              </Flex>
            </Flex>
            {/* section 3  */}

            {user?.measurements &&
              user?.measurements.desiredWeight < user?.measurements.weight && (
                <Flex
                  align='center'
                  py='4'
                  w='100%'
                  my='1'
                  px='2'
                  gap='2'
                  flexDir={{ base: 'column', md: 'row' }}
                  justify='space-around'
                >
                  <Flex order={{ base: '1', md: '2' }}>
                    <Image
                      // width={300}
                      // height={300}
                      // priority
                      w={{ base: '200px', md: '300px' }}
                      h={{ base: '200px', md: '300px' }}
                      className='section-image'
                      alt='Keto weight'
                      src='/home/expectation/goal.png'
                    />
                  </Flex>
                  <Flex
                    w={{ base: 'auto', md: '400px' }}
                    flexDir='column'
                    align='center'
                    gap='3'
                    order={{ base: '2', md: '1' }}
                  >
                    <Heading
                      as='h3'
                      mb='3'
                      color='orange.900'
                      fontSize={{ base: 'xl', md: '5xl' }}
                    >
                      {user.profile.name}، ستصل لهدفك في تاريخ
                      <Text display='inline-block' mr='1' color='orange.500'>
                        {
                          getDesiredWeightDate(user.measurements, user.willing)
                            .expectedDate
                        }
                        ,
                      </Text>
                      <Text
                        display='inline-block'
                        // mr='1'
                        fontSize={{ base: 'lg', md: 'xl' }}
                        color='orange.500'
                      >
                        ( معدل
                        {' ' +
                          getDesiredWeightDate(user.measurements, user.willing)
                            .weekAverage}
                        كجم اسبوعيا )
                      </Text>
                    </Heading>
                    <Text>
                      هذا هو تاريخ توقعي بنائًا على المعطيات اللتي قمت بوضعها،
                      وتذكر دائمًا أن الجسم الجميل يحتاج لوقت ومجهود.
                    </Text>
                  </Flex>
                </Flex>
              )}
            {/* section 4  */}
            <Flex
              align='center'
              py='4'
              w='100%'
              my='1'
              px='2'
              bg='orange.100'
              gap='2'
              flexDir={{ base: 'column', md: 'row' }}
              justify='space-around'
            >
              <Flex order={{ base: '1', md: '2' }}>
                <Image
                  // width={300}
                  // height={300}
                  // priority
                  w={{ base: '200px', md: '300px' }}
                  h={{ base: '200px', md: '300px' }}
                  className='section-image'
                  alt='Keto weight'
                  src='/home/expectation/kcai.png'
                />
              </Flex>
              <Flex
                w={{ base: 'auto', md: '400px' }}
                flexDir='column'
                align='center'
                gap='3'
                order={{ base: '2', md: '1' }}
              >
                <Heading
                  as='h3'
                  mb='3'
                  color='orange.900'
                  fontSize={{ base: 'xl', md: '5xl' }}
                >
                  سعراتك اليومية لإنزال الوزن هي
                  <Text display='inline-block' mr='1' color='orange.500'>
                    {calculateEnergy(
                      user?.willing,
                      user?.physicalActivity,
                      user?.measurements
                    ).calories.toFixed(0)}
                  </Text>
                </Heading>
                <Text>
                  هذه السعرات بنائًا على المعطيات اللتي ادخلتها ونشاطك اليومي
                  وتقاس بشكل يومي.
                </Text>
              </Flex>
            </Flex>
            {/* section 5 */}
            <Flex
              align='center'
              py='4'
              w='100%'
              my='1'
              px='2'
              gap='2'
              flexDir={{ base: 'column', md: 'row' }}
              justify='space-around'
            >
              <Flex order={{ base: '1', md: '1' }}>
                <Image
                  // width={220}
                  // height={400}
                  // priority
                  w={{ base: '110px', md: '220px' }}
                  h={{ base: '200px', md: '400px' }}
                  className='section-image'
                  alt='Keto weight'
                  src='/home/expectation/meal.png'
                />
              </Flex>
              <Flex
                w={{ base: 'auto', md: '400px' }}
                flexDir='column'
                align='center'
                gap='3'
                order={{ base: '2', md: '2' }}
              >
                <Heading
                  as='h3'
                  mb='3'
                  color='orange.900'
                  fontSize={{ base: 'xl', md: '5xl' }}
                >
                  العديد من الوصفات
                </Heading>
                <Text>
                  لدينا في كيتوستايل أكثر من ٢٠٠ وصفة جاهزة للتحضير كل ماعليك هو
                  اضافتها لقائمتك اليومية والإستمتاع بكل وصفه فهي مدروسة السعرات
                  ومدروسة القيمة الغذائية وكلها متوافقة مع نظام الكيتو دايت
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </>
      )}
    </>
  );
}

export default SubscripedHOC(Expectaion, 'meal');
