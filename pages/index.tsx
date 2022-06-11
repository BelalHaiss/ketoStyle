import type { NextPage } from 'next';
import { Heading, Text } from '@chakra-ui/react';
import Section1 from 'src/components/Home/Section1';
import { Section, Sections } from 'src/components/Home/Sections';
const allSections: Section[] = [
  {
    bg: 'orange.100',
    image: {
      src: '/home/bodies.svg',
      width: '400',
      alt: 'boodies',
      order: '1'
    },
    text: 'كثير من الأشخاص قاموا بتغيير أجسامهم عن طريق إتباع نظام الكيتو',
    heading: (
      <Heading as='h3' color='orange.900' fontSize={{ base: 'xl', md: '4xl' }}>
        تغيير نمط
        <Text color='orange.500' px='1' display='inline-block'>
          حياتك
        </Text>
        هو المفتاح
      </Heading>
    )
  },
  {
    bg: '',
    image: {
      src: '/home/dish.svg',
      width: '400',
      alt: 'dish',
      order: '2'
    },
    text: 'من الصعب جدًا عليك البدء بنظام الكيتو لوحدك كونه يتطلب الكثير من الأدوات اللتي نوفرها في كيتو ستايل، اترك العلم والتخطيط لنا بينما تركز على ما هو أكثر أهمية وهو تغيير حياتك للأجمل',
    heading: (
      <Heading as='h3' color='orange.900' fontSize={{ base: 'xl', md: '4xl' }}>
        إبدأ الكيتو بطريقة
        <Text color='orange.500' px='1' display='inline-block'>
          ذكية
        </Text>
      </Heading>
    )
  },
  {
    bg: 'orange.100',
    image: {
      src: '/home/sec4.svg',
      width: '400',
      alt: 'dish',
      order: '1'
    },
    text: 'نعم هذا صحيح، فنظام الكيتو في أي مكان أخر لايمكن أن يُبنى على سلوكياتك في الأكل، بينما مع كيتو سايكل، يمكنك تصميم وابتكار واختيار الوجبات المناسبة لك بكل سهولة نقوم بعمل خطة الحمية الخاصة بك بنائًا على نمط حياتك وصحتك واحتياجاتك التغذوية، وحالتك الكيتونية للحصول على أسرع النتائج',
    heading: (
      <Heading as='h3' color='orange.900' fontSize={{ base: 'xl', md: '4xl' }}>
        نظام كيتو مخصص{' '}
        <Text color='orange.500' px='1' display='inline-block'>
          لك{' '}
        </Text>
      </Heading>
    ),
    checkedText: [
      'حمية بنائًا على الأكل اللذي يعجبك',
      'يمكنك تغييرها في أي وقت',
      'أكثر من ١٥٠ وصفة كيتو'
    ]
  },
  {
    bg: '',
    image: {
      src: '/home/sec5.svg',
      width: '400',
      alt: 'keto',
      order: '2'
    },
    text: 'من المعروف ان نظام الكيتو هو أحد الوسائل الفعالة لخسارة الوزن، ولكن إذا قمت بذلك بشكل صحيح فقط، لست مضطرًا لأن تقرأ بكثرة عن الكيتو، فنحن قمنا بدراسة الموضوع بشكل كامل وشامل مع فريق مختص نقوم بتقديم خطة غذائية كاملة متكاملة مع وجبات تجعلك تشعر بالشبع وبجودة المذاق لترضي براعم التذوق لديك وتفيد جسمك بشكل كامل',
    heading: (
      <Heading as='h3' color='orange.900' fontSize={{ base: 'xl', md: '4xl' }}>
        فعالية عالية بأقل{' '}
        <Text color='orange.500' px='1' display='inline-block'>
          مجهود{' '}
        </Text>
      </Heading>
    ),
    checkedText: [
      'تتبع تقدمك في البرنامج بسهولة',
      'إعداد خطة غذائية مخصصة لك',
      'توقعات لموعد وصولك للوزن المطلوب'
    ]
  },
  {
    bg: 'orange.100',
    image: {
      src: '/home/sec6.svg',
      width: '400',
      alt: 'keto',
      order: '1'
    },
    text: 'بالطبع منذ لحظة دخولك لعالم الكيتو مع كيتو سايكل، فأنت لست لوحدك مع فريقنا المُحب، سيكون هناك فريقنا معك وسيهتم بأدق التفاصيل، مع خدمات التغذية وخدمات التدريب المضافة. نحن نسعى لتوفير وخلق بيئة مساعدة لك لتتمكن من الإستمرار وتحقيق الهدف اللذي تريده، بطريقة علمية مدروسة',
    heading: (
      <Heading as='h3' color='orange.900' fontSize={{ base: 'xl', md: '4xl' }}>
        نحن هنا{' '}
        <Text color='orange.500' px='1' display='inline-block'>
          لدعمك
        </Text>
      </Heading>
    ),
    checkedText: [
      'خدمات التغذية والتدريب المضافة',
      'توقعات تقريبية لموعد وصولك للوزن المطلوب',
      'حساب احتياج الجسم وكتلة الجسم'
    ]
  },
  {
    bg: '',
    image: {
      src: '/home/sec7.svg',
      width: '400',
      alt: 'keto',
      order: '2'
    },
    text: 'النظام الغذائي الكيتون - وهو برنامج ثوري للأكل منخفض الكربوهيدرات وعالي الدهون، لديه القدرة على تغيير جسمك بطرق لا يستطيع أي نظام غذائي آخر القيام بها. إنه يضع جسمك في الكيتوزية، الحالة المعززة للصحة حيث تحرق الدهون للحصول على الطاقة. إلى جانب نهج شخصي وموجه ، ستحول حمية الكيتو جسمك إلى آلة لحرق الدهون ، مما يمنحك كل ما تحتاجه لمستقبل صحي',
    heading: (
      <Heading as='h3' color='orange.900' fontSize={{ base: 'xl', md: '4xl' }}>
        حول حمية
        <Text color='orange.500' px='1' display='inline-block'>
          الكيتو{' '}
        </Text>
      </Heading>
    ),
    checkedText: [
      'خدمات التغذية والتدريب المضافة',
      'توقعات تقريبية لموعد وصولك للوزن المطلوب',
      'حساب احتياج الجسم وكتلة الجسم'
    ]
  }
];
const Home: NextPage = () => {
  return (
    <>
      <Section1 />
      <Sections sections={allSections} />
    </>
  );
};

export default Home;
