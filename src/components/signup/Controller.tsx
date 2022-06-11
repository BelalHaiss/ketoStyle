/* eslint-disable react/no-children-prop */
import {
  Flex,
  Text,
  Button,
  Heading,
  Image,
  AlertIcon,
  Icon,
  Input,
  InputLeftAddon,
  InputGroup,
  Alert,
  Radio,
  FormControl,
  FormErrorMessage,
  RadioGroup
} from '@chakra-ui/react';
import {
  useState,
  useLayoutEffect,
  Dispatch,
  SetStateAction,
  useEffect,
  ChangeEvent
} from 'react';
import { GiChickenOven, GiCow, GiSheep, GiCamel, GiMeal } from 'react-icons/gi';
import { TbFish } from 'react-icons/tb';
import { BiBody, BiHealth } from 'react-icons/bi';
import { AiFillFire, AiFillSafetyCertificate } from 'react-icons/ai';
import { FaWeight } from 'react-icons/fa';
import { MdOutlineFitnessCenter } from 'react-icons/md';

import { CountrySelect } from './CountrySelect';
type Value = 'chicken' | 'cow' | 'sheep' | 'camel' | 'caridea' | 'fish';
type Category = {
  label: string;
  value: Value;
  icon: React.ReactElement;
};
const allCategories: Category[] = [
  {
    label: 'الدجاج',
    value: 'chicken',
    icon: <GiChickenOven />
  },
  {
    label: 'الاسماك',
    value: 'fish',
    icon: <TbFish />
  },
  {
    label: 'الروبيان',
    value: 'caridea',
    icon: <Image w='20px' src='/home/caridea.png' alt='caridea' />
  },
  {
    label: 'لحم الابقار',
    value: 'cow',
    icon: <GiCow />
  },
  {
    label: 'لحم الاغنام',
    value: 'sheep',
    icon: <GiSheep />
  },
  {
    label: 'لحم الجمال',
    value: 'camel',
    icon: <GiCamel />
  }
];
type Props = {
  page: number;
  setButtonStatus: (
    type: 'next' | 'prev',
    action: 'active' | 'disabled'
  ) => void;
  onClose?: () => void;
  setHeader: Dispatch<SetStateAction<string>>;
  [key: string]: any;
};
type Profile = {
  name: string;
  email: string;
  password: string;
  phone: number | '';
  country: string;
};
type Measure = {
  sex: 'male' | 'female';
  weight: number;
  height: number;
  desiredWeight: number;
  age: number;
};
type User = {
  categories: [] | Category[];
  physicalActivity: number;
  willing: number;
  measurements: Measure;
  profile: Profile;
};
export function Controller({
  page,
  setButtonStatus,
  onClose,
  setHeader
}: Props) {
  const [user, setUser] = useState<User>({
    categories: [],
    physicalActivity: -1,
    willing: -1,
    measurements: {
      sex: 'male',
      height: 0,
      weight: 0,
      desiredWeight: 0,
      age: 0
    },
    profile: {
      name: '',
      email: '',
      password: '',
      phone: '',
      country: ''
    }
  });
  return (
    <Flex w='100%' color='gray.50' align={'center'}>
      {page === 1 && (
        <Page1
          setButtonStatus={setButtonStatus}
          onClose={onClose}
          setHeader={setHeader}
          page={page}
        />
      )}
      {page === 2 && (
        <Page2
          setButtonStatus={setButtonStatus}
          onClose={onClose}
          setHeader={setHeader}
          page={page}
        />
      )}
      {page === 3 && (
        <Page3
          setUser={setUser}
          setButtonStatus={setButtonStatus}
          onClose={onClose}
          user={user}
          setHeader={setHeader}
          page={page}
        />
      )}
      {page === 4 && (
        <Page4
          setUser={setUser}
          setButtonStatus={setButtonStatus}
          onClose={onClose}
          user={user}
          setHeader={setHeader}
          page={page}
        />
      )}
      {page === 5 && (
        <Page5
          setUser={setUser}
          setButtonStatus={setButtonStatus}
          onClose={onClose}
          user={user}
          setHeader={setHeader}
          page={page}
        />
      )}
      {page === 6 && (
        <Page6
          setUser={setUser}
          setButtonStatus={setButtonStatus}
          onClose={onClose}
          user={user}
          setHeader={setHeader}
          page={page}
        />
      )}
      {/* measurment */}
      {page === 7 && (
        <Page7
          setUser={setUser}
          setButtonStatus={setButtonStatus}
          onClose={onClose}
          user={user}
          setHeader={setHeader}
          page={page}
        />
      )}
      {page === 8 && (
        <Page8
          setUser={setUser}
          setButtonStatus={setButtonStatus}
          onClose={onClose}
          user={user}
          setHeader={setHeader}
          page={page}
        />
      )}

      {page === 9 && (
        <Page9
          page={page}
          setUser={setUser}
          setButtonStatus={setButtonStatus}
          onClose={onClose}
          user={user}
          setHeader={setHeader}
        />
      )}
    </Flex>
  );
}

function Page1({ page, setButtonStatus, onClose, setHeader }: Props) {
  useLayoutEffect(() => {
    setHeader('مرحبًا بك في عائلتنا');
    setButtonStatus('next', 'active');
  }, []);
  return (
    <Text textAlign={'center'} letterSpacing='wide' fontWeight={'semibold'}>
      سنقوم بطرح بعض الأسئلة البسيطة عليك لقياس احتياجاتك ولتصميم برنامج كيتو
      يناسب جميع احتياجاتك
    </Text>
  );
}

function Page2({ page, setButtonStatus, onClose, setHeader }: Props) {
  useLayoutEffect(() => {
    setHeader('ماهو الكيتو دايت؟');
    setButtonStatus('next', 'active');
  }, []);
  return (
    <Text textAlign={'center'} letterSpacing='wide' fontWeight={'semibold'}>
      نظام الكيتو الغذائي هو نظام عالي في الدهون ومنخفض في الكاربوهيدات، ومعتدل
      في البروتينات، وهذا هو سر نجاح هذا النظام، ليقوم جسمك بالدخول في الحالة
      الكيتونية، وهي الحالة اللتي يقوم جسمك فيها باستبدال حرق السكر بحرق الدهون
      مباشرة، عندما تقوم بذلك سيقوم جسمك بحرق الدهون بشكل لايصدق ليحصل على
      طاقته، وهذا سيؤدي لاعتدال مستويات السكر في الدم والأنسولين، ويساعدك على
      إنقاص الوزن بسرعه هائلة
    </Text>
  );
}

function Page3({
  page,
  setButtonStatus,
  onClose,
  setHeader,
  setUser,
  user
}: Props) {
  const [selectedCategories, setSelectedCategories] = useState<Value[]>(
    user.categories
  );
  useLayoutEffect(() => {
    setHeader('ما اللذي تفضله');
    if (selectedCategories.length) {
      setButtonStatus('next', 'active');
    }
  }, []);
  function handleCategory(value: Value) {
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

    setUser((user: any) => ({ ...user, categories: newCategoryState }));
    newCategoryState.length === 0
      ? setButtonStatus('next', 'disabled')
      : setButtonStatus('next', 'active');
  }
  return (
    <Flex flexDir={'column'} w='100%' align='center'>
      <Text>اختر أنواع اللحوم اللتي تحبها وتفضل أكلها في نظامك الغذائي</Text>

      <Flex
        w='100%'
        my='2'
        flexDir={{ base: 'column', md: 'row' }}
        align='center'
        gap='3'
        justify='space-between'
      >
        <Flex align='center' flexDir={{ base: 'row', md: 'column' }} gap='2'>
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
        <Flex align='center' flexDir={{ base: 'row', md: 'column' }} gap='2'>
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
    </Flex>
  );
}

const physicalActivities = [
  {
    label: 'لا يوجد نشاط',
    value: 0
  },
  {
    label: '1-2 ساعة يوميا',
    value: 1
  },
  {
    label: '3-5 ساعات يوميا',
    value: 2
  },
  {
    label: 'اكثر من  5 ساعات يوميا',
    value: 3
  }
];
function Page4({
  page,
  setButtonStatus,
  onClose,
  setHeader,
  setUser,
  user
}: Props) {
  const [physicalActivity, setPhysicalActivity] = useState<number>(
    user.physicalActivity
  );
  useLayoutEffect(() => {
    setHeader('النشاط البدني');
    if (physicalActivity > -1) {
      setButtonStatus('next', 'active');
    }
  }, []);

  function handleCategory(value: number) {
    setUser((user: any) => ({
      ...user,
      physicalActivity: value
    }));
    setPhysicalActivity(value);
    value < -1
      ? setButtonStatus('next', 'disabled')
      : setButtonStatus('next', 'active');
  }
  return (
    <Flex flexDir={'column'} w='100%' align='center'>
      <Text>مدى نشاطك البدني اليومي</Text>

      <Flex
        w='100%'
        my='2'
        gap='2'
        wrap='wrap'
        flexDir={{ base: 'column', sm: 'row' }}
        align='center'
        justify='space-between'
      >
        {physicalActivities.map((activity) => (
          <Button
            w='150px'
            onClick={() => handleCategory(activity.value)}
            colorScheme='orange'
            variant={physicalActivity !== activity.value ? 'ghost' : 'solid'}
            background={
              physicalActivity !== activity.value ? 'orange.50' : 'orange.500'
            }
            key={activity.value}
          >
            {activity.label}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
}

const willings = [
  {
    label: 'فقط اريد التجربة',
    value: 0
  },
  {
    label: 'اريد التجربة ونقص الوزن',
    value: 1
  },
  {
    label: 'اريد انقاص وزني',
    value: 2
  },
  {
    label: 'اريد إنقاص اكبر وزن ممكن',
    value: 3
  }
];
function Page5({
  page,
  setButtonStatus,
  onClose,
  setHeader,
  setUser,
  user
}: Props) {
  const [willing, setWillings] = useState<number>(user.willing);
  useLayoutEffect(() => {
    setHeader('انقاص الوزن');
    if (willing > -1) {
      setButtonStatus('next', 'active');
    }
  }, []);

  function handleCategory(value: number) {
    setUser((user: any) => ({
      ...user,
      willing: value
    }));
    setWillings(value);
    value < -1
      ? setButtonStatus('next', 'disabled')
      : setButtonStatus('next', 'active');
  }
  return (
    <Flex flexDir={'column'} w='100%' align='center'>
      <Text>مدى إستعدادك لأنقاص الوزن</Text>

      <Flex
        w='100%'
        my='2'
        gap='2'
        wrap='wrap'
        flexDir={{ base: 'column', sm: 'row' }}
        align='center'
        justify='space-between'
      >
        {willings.map((well) => (
          <Button
            w={{ base: '150px', md: '200px' }}
            onClick={() => handleCategory(well.value)}
            colorScheme='orange'
            fontSize={{ base: 'sm', md: 'lg' }}
            variant={willing !== well.value ? 'ghost' : 'solid'}
            background={willing !== well.value ? 'orange.50' : 'orange.500'}
            key={well.value}
          >
            {well.label}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
}

const diseases = [
  'السكري',
  'مشاكل الكبد',
  'التعافي من جراحة',
  'مشاكل الغدد',
  'مشاكل القلب',
  'ارتفاع الكوليسترول',
  'ارتفاع الضغط',
  'السرطان',
  'مشاكل الكلى',
  'مشاكل البنكرياس'
];

function Page6({
  page,
  setButtonStatus,
  onClose,
  setHeader,
  setUser,
  user
}: Props) {
  const [value, setValue] = useState('');
  useLayoutEffect(() => {
    setHeader('هل تعاني أحد هذه الأمراض');
    if (value === 'ok') {
      setButtonStatus('next', 'active');
    }
  }, []);
  function handleChange(value: string) {
    value === 'ok'
      ? setButtonStatus('next', 'active')
      : setButtonStatus('next', 'disabled');
    setValue(value);
  }
  return (
    <Flex flexDir={'column'} w='100%' align='center'>
      <Flex wrap='wrap' w='100%' align='center' justify='space-between'>
        <Text fontWeight={'bold'} fontSize='xl'>
          هل تعاني من احدي هذه الامراض ؟
        </Text>
        <RadioGroup onChange={handleChange} defaultValue={value} value={value}>
          <Flex gap='2'>
            <Radio w='70px' colorScheme='orange' value='ok'>
              لا
            </Radio>
            <Radio w='70px' colorScheme='orange' value='no'>
              نعم
            </Radio>
          </Flex>
        </RadioGroup>
      </Flex>
      {value === 'no' && (
        <Alert variant={'solid'} status='warning'>
          <AlertIcon />
          هذا النظام غير متوافق مع هذه الامراض , ونتمني لك صحة جيدة وأمان
        </Alert>
      )}
      <Flex
        w='100%'
        my='2'
        flexDir={{ base: 'column', md: 'row' }}
        align='center'
        gap='2'
        justify='space-between'
      >
        <Flex wrap='wrap' align='center' justify='center' gap='2'>
          {diseases.map((disea, i) => {
            return (
              <Button
                w='150px'
                colorScheme='orange'
                variant='ghost'
                background={'orange.50'}
                key={i}
              >
                {disea}
              </Button>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}
function Page7({
  page,
  setButtonStatus,
  onClose,
  setHeader,
  setUser,
  user
}: Props) {
  useLayoutEffect(() => {
    setHeader('القياسات');
  }, []);
  const [measurements, setMeasurements] = useState<Measure | any>(
    user.measurements
  );
  //  dont set user measurements before checking that error state is clear use ( useEffect)
  const [errors, setErrors] = useState(user.measurements);
  const allMeasurements = [
    {
      label: ' ',
      value: '  الوزن (كجم)  ',
      name: 'weight',
      min: 50,
      max: 150,
      errorMessage: 'الوزن يجب ان يكون بين 50 الي 150 كحد اقصي'
    },
    {
      label: '  ',
      value: ' الوزن المرغوب (كجم)',
      name: 'desiredWeight',

      errorMessage:
        ' الوزن يجب ان لا يكون اعلي من الوزن الحالي وبين 50 الي 150',
      min: 50,
      max: 150
    },
    {
      label: '',
      value: 'الطول (سم) ',
      name: 'height',
      min: 100,
      max: 220,
      errorMessage: 'الطول يجب ان يكون بين 100 الي 220 كحد اقصي'
    },
    {
      label: '',
      value: ' العمر (سنة)',
      name: 'age',
      min: 13,
      max: 70,
      errorMessage: 'العمر يجب ان يكون بين 13 الي 70 كحد اقصي'
    }
  ];

  function handleError(name: string, error: '' | 'fine') {
    if (error === '') {
      setErrors({ ...errors, [name]: '' });
    } else {
      setErrors({ ...errors, [name]: 'fine' });
    }
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setMeasurements((old: any) => ({ ...old, [name]: +value }));

    const find = allMeasurements.find((m) => m.name === name);
    if (find) {
      if (+value >= find.min && +value <= find.max) {
        handleError(name, 'fine');
      } else {
        handleError(name, '');
      }
    }
    if (name === 'desiredWeight' || name === 'weight') {
      validateDesiredWeight(name, +value);
    }
  }
  function validateDesiredWeight(
    name: 'weight' | 'desiredWeight',
    value: number
  ) {
    if (name === 'weight') {
      if (
        value >= measurements.desiredWeight &&
        measurements.desiredWeight >= 50
      ) {
        handleError('desiredWeight', 'fine');
      } else {
        handleError('desiredWeight', '');
      }
      return;
    }
    if (name === 'desiredWeight') {
      if (value <= measurements.weight && value >= 50) {
        handleError(name, 'fine');
      } else {
        handleError(name, '');
      }
    }
  }
  useEffect(() => {
    console.log(errors);
    for (const key in errors) {
      if (errors[key] === '' || errors[key] === 0) {
        setButtonStatus('next', 'disabled');
        break;
      } else {
        setButtonStatus('next', 'active');
        setUser((old: any) => ({ ...old, measurements }));
      }
    }
  }, [errors]);
  return (
    <Flex flexDir={'column'} gap='2' w='100%' align='center'>
      <InputGroup>
        <InputLeftAddon w='160px' bg='orange.500' children={'الجنس'} />
        <Flex flex='1' px='2' gap='2'>
          <Button
            flex='1'
            onClick={() => setMeasurements({ ...measurements, sex: 'male' })}
            bg={measurements.sex === 'male' ? 'orange.500' : 'orange.50'}
            colorScheme='orange'
            // color={measurements.sex === 'male' ? 'gray.50' : 'gray.800'}
            variant={measurements.sex === 'male' ? 'solid' : 'ghost'}
          >
            {' '}
            ذكر
          </Button>
          <Button
            flex='1'
            colorScheme='orange'
            onClick={() => setMeasurements({ ...measurements, sex: 'female' })}
            // color={measurements.sex === 'female' ? 'gray.50' : 'gray.800'}
            bg={measurements.sex === 'female' ? 'orange.500' : 'orange.50'}
            variant={measurements.sex === 'female' ? 'solid' : 'ghost'}
          >
            {' '}
            انثي{' '}
          </Button>
        </Flex>
      </InputGroup>
      {allMeasurements.map((measure, i) => (
        <FormControl
          isInvalid={errors[measure.name] === '' ? true : false}
          key={i}
        >
          <InputGroup>
            <InputLeftAddon
              w='160px'
              bg='orange.500'
              children={measure.value}
            />
            <Input
              onChange={handleChange}
              type='number'
              _placeholder={{ color: 'gray.300' }}
              variant='outline'
              errorBorderColor='crimson'
              name={measure.name}
              focusBorderColor='orange.500'
              value={
                measurements[measure.name] === 0
                  ? ''
                  : measurements[measure.name]
              }
              placeholder={measure.label}
            />
          </InputGroup>
          <FormErrorMessage> {measure.errorMessage} </FormErrorMessage>
        </FormControl>
      ))}
    </Flex>
  );
}
const allProfileInfo = [
  {
    label: 'الاسم ',
    name: 'name',
    type: 'text'
  },
  {
    label: 'البريد الالكتروني ',
    name: 'email',
    re: /^([a-zA-Z0-9_\-?\.?]+)@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/,
    errorMessage: 'البريد الالكتروني غير صحيح',
    type: 'email'
  },
  {
    label: 'كلمة السر',
    type: 'password',
    re: /(?=^\S*$)(?=.{8,})/,
    name: 'password',
    errorMessage: 'كلمة السر يجب أن تكون أكثر من 8 أحرف ولا تحتوي علي مسافة'
  },
  {
    label: 'رقم الجوال',
    name: 'phone',
    type: 'number'
  }
];
function Page8({
  page,
  setButtonStatus,
  onClose,
  setHeader,
  setUser,
  user
}: Props) {
  useLayoutEffect(() => {
    setHeader('بيانات الحساب');
  }, []);
  const [profile, setProfile] = useState<Profile | any>(user.profile);
  //  dont set user measurements before checking that error state is clear use ( useEffect)
  const [errors, setErrors] = useState(user.profile);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setProfile((old: any) => ({ ...old, [name]: value }));

    const find = allProfileInfo.find((m) => m.name === name);
    if (find) {
      if (find.re) {
        find.re.test(value)
          ? setErrors((old: any) => ({ ...old, [name]: 'fine' }))
          : setErrors((old: any) => ({ ...old, [name]: '' }));
      } else {
        if (!value) {
          setErrors((old: any) => ({ ...old, [name]: '' }));
        } else {
          setErrors((old: any) => ({ ...old, [name]: 'fine' }));
        }
      }
    }
  }
  function setCountry(country: string) {
    console.log(country === '', country);
    setProfile((old: any) => ({ ...old, country }));
    if (country === '' || country === 'other') {
      setErrors((old: any) => ({ ...old, country: '' }));
    } else {
      setErrors((old: any) => ({ ...old, country: 'fine' }));
    }
  }
  useEffect(() => {
    for (const key in errors) {
      if (errors[key] === '') {
        setButtonStatus('next', 'disabled');
        break;
      } else {
        setButtonStatus('next', 'active');
        setUser((old: any) => ({ ...old, profile }));
      }
    }
  }, [errors]);
  return (
    <Flex flexDir={'column'} gap='2' w='100%' align='center'>
      {allProfileInfo.map((prof, i) => (
        <FormControl
          isInvalid={errors[prof.name] === '' ? true : false}
          key={i}
        >
          <InputGroup>
            <InputLeftAddon w='150px' bg='orange.500' children={prof.label} />

            <Input
              onChange={handleChange}
              type={prof.type}
              _placeholder={{ color: 'gray.700' }}
              errorBorderColor='crimson'
              name={prof.name}
              focusBorderColor='orange.500'
              value={profile[prof.name]}
            />
          </InputGroup>
          <FormErrorMessage> {prof.errorMessage} </FormErrorMessage>
        </FormControl>
      ))}
      <CountrySelect country={profile.country} setCountry={setCountry} />
    </Flex>
  );
}

const textIconsArr = [
  {
    text: 'وجبات متنوعة',
    icon: GiMeal
  },
  {
    text: 'قياس الكتلة ',
    icon: BiBody
  },
  {
    text: 'حساب السعرات',
    icon: AiFillFire
  },
  {
    text: ' توقعات نزول الوزن',
    icon: FaWeight
  },
  {
    text: 'وسائل دفع امنه',
    icon: AiFillSafetyCertificate
  },
  {
    text: 'شهر مجاني لخدمة التمرين',
    icon: MdOutlineFitnessCenter
  },
  {
    text: 'اسبوع مجانا لخدمة اخصائي الاغذية',
    icon: BiHealth
  }
];
function TEXT_WITH_ICONS(num: 1 | 2 | 3) {
  return (
    <Flex flexDir={'column'} gap='2' align='center'>
      {textIconsArr.map((item, i) => {
        if (num === 1 && i > 4) return;
        if (num === 2 && i > 5) return;
        return (
          <Flex w='200px' align='center' gap='2' key={i}>
            <Icon w='8' h='8' as={item.icon} />
            <Text fontWeight='medium' fontSize='lg'>
              {item.text}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
}

const cards = [
  {
    title: 'باقة الشهر الواحد',
    feature: TEXT_WITH_ICONS(1)
  },
  {
    title: 'باقة 3 شهور',
    feature: TEXT_WITH_ICONS(2)
  },
  {
    title: 'باقة 6 شهور ',
    feature: TEXT_WITH_ICONS(3)
  }
];

function Page9({
  setButtonStatus,
  onClose,
  setHeader,
  setUser,
  user,
  page
}: Props) {
  useLayoutEffect(() => {
    setHeader('اختر الباقة المناسبة');
  }, []);
  return (
    <Flex color='orange.800' w='100%' flexDir='column' align='center'>
      <Flex w='100%' gap='3' align='center' justify='center'>
        <Image
          src='/home/pay.png'
          alt='logo'
          w={{ base: '150px', md: '300px' }}
        />
        <Text fontWeight={'bold'} fontSize={{ base: 'lg', md: 'xl' }}>
          {`${user.profile.name} ،لم يتبقى سوى القليل، لدخولك عالم الكيتو معنا`}
        </Text>
      </Flex>
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        align='center'
        justify='space-around'
        w='100%'
      >
        {cards.map((card, i) => (
          <Flex
            align='center'
            border='2px'
            bg='orange.200'
            borderColor='orange.100'
            flexDir='column'
            h='400px'
            w='300px'
            borderRadius={'2xl'}
            boxShadow='2xl'
            gap='3'
            key={i}
          >
            <Text my='2' fontWeight='bold' fontSize='2xl'>
              {' '}
              {card.title}
            </Text>
            {card.feature}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
