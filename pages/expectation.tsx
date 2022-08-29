import { Flex, Text, Button, Icon, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import Meta from 'src/utils/Meta';
import { useStore } from 'src/store';

export default function Nutrition() {
  const user = useStore((state) => state.user);
  return (
    <>
      <Meta title='التوقعات' />
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
              width={300}
              height={300}
              priority
              className='section-image'
              alt='Keto weight'
              src='/home/expectation/weight.png'
            />
          </Flex>
          <Heading
            order={{ base: '2', md: '1' }}
            w={{ base: 'auto', md: '300px' }}
            as='h3'
            color='orange.900'
            fontSize={{ base: 'xl', md: '5xl' }}
          >
            بدأت رحلتك يا الإسم
            <Text display='inline-block' mr='1' color='orange.500'>
              وزنك المثالي هو كغ
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
              width={300}
              height={300}
              priority
              className='section-image'
              alt='Keto weight'
              src='/home/expectation/bmi.png'
            />
          </Flex>
          <Flex
            w={{ base: 'auto', md: '300px' }}
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
                رقم
              </Text>
            </Heading>
            <Text>
              لاتقلق يمكنك إنقاص وزنك بكل سهوله مع نظام الكيتو والمحافظة على جسم
              صحي باتباع الاساليب الصحية، الكثير ممن اتبعو الكيتو خسروا الكثير
              من الوزن بهذا النظام
            </Text>
          </Flex>
        </Flex>
        {/* section 3  */}

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
              width={300}
              height={300}
              priority
              className='section-image'
              alt='Keto weight'
              src='/home/expectation/goal.png'
            />
          </Flex>
          <Flex
            w={{ base: 'auto', md: '300px' }}
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
              الأسم، ستصل لهدفك في تاريخ{' '}
              <Text display='inline-block' mr='1' color='orange.500'>
                ١/١/٢٠٢٣{' '}
              </Text>
            </Heading>
            <Text>
              هذا هو تاريخ توقعي بنائًا على المعطيات اللتي قمت بوضعها، وتذكر
              دائمًا أن الجسم الجميل يحتاج لوقت ومجهود.{' '}
            </Text>
          </Flex>
        </Flex>
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
              width={300}
              height={300}
              priority
              className='section-image'
              alt='Keto weight'
              src='/home/expectation/kcai.png'
            />
          </Flex>
          <Flex
            w={{ base: 'auto', md: '300px' }}
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
              سعراتك اليومية لإنزال الوزن هي{' '}
              <Text display='inline-block' mr='1' color='orange.500'>
                رقم سعرة حرارية
              </Text>
            </Heading>
            <Text>
              هذه السعرات بنائًا على المعطيات اللتي ادخلتها ونشاطك اليومي وتقاس
              بشكل يومي.{' '}
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
              width={220}
              height={400}
              priority
              className='section-image'
              alt='Keto weight'
              src='/home/expectation/meal.png'
            />
          </Flex>
          <Flex
            w={{ base: 'auto', md: '300px' }}
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
              العديد من الوصفات{' '}
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
  );
}
