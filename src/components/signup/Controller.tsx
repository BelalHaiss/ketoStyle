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

import { CountrySelect } from './CountrySelect';
import { useStore } from 'src/store';
import {
  User,
  Physical,
  Category,
  Value,
  Profile,
  Measure
} from 'src/ts/register.types';
type Props = {
  page: number;
  setButtonStatus: (
    type: 'next' | 'prev',
    action: 'active' | 'disabled'
  ) => void;
  onClose?: () => void;
  setHeader: Dispatch<SetStateAction<string>>;
  [key: string]: any; //setRegisterDetails
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
export function Controller({
  page,
  setButtonStatus,
  setRegisterDetails,
  onClose,
  setHeader
}: Props) {
  const [user, setUser] = useState<User>({
    categories: [],
    physicalActivity: {
      question: 'physicalActivity',
      answer: ''
    },
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
      lastName: '',
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
          setRegisterDetails={setRegisterDetails}
          page={page}
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
        <Flex align='center' flexDir={'column'} gap='2'>
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
    value: 'no'
  },
  {
    label: ' نشاط خفيف',
    value: 'normal'
  },
  {
    label: '1-2 ساعة يوميا',
    value: 'fit'
  },
  {
    label: 'اكثر من 2 ساعات يوميا',
    value: 'athlete'
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
  const [physicalActivity, setPhysicalActivity] = useState<Physical>(
    user.physicalActivity
  );
  useLayoutEffect(() => {
    setHeader('النشاط البدني');
    if (physicalActivity) {
      setButtonStatus('next', 'active');
    }
  }, []);

  function handleCategory(value: string) {
    setUser((user: any) => ({
      ...user,
      physicalActivity: { ...physicalActivity, answer: value }
    }));
    setPhysicalActivity((old) => ({ ...old, answer: value }));
    value === ''
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
            variant={
              physicalActivity.answer !== activity.value ? 'ghost' : 'solid'
            }
            background={
              physicalActivity.answer !== activity.value
                ? 'orange.50'
                : 'orange.500'
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
    setButtonStatus('next', 'disabled');
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
        <RadioGroup onChange={handleChange} value={value}>
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
export const allMeasurements = [
  {
    label: ' ',
    value: '  الوزن (كجم)  ',
    name: 'weight',
    min: 40,
    max: 150,
    errorMessage: 'الوزن يجب ان يكون بين 40 الي 150 كحد اقصي'
  },
  {
    label: '  ',
    value: ' الوزن المرغوب (كجم)',
    name: 'desiredWeight',

    errorMessage: ' الوزن يجب ان لا يكون اعلي من الوزن الحالي وبين 40 الي 150',
    min: 40,
    max: 150
  },
  {
    label: '',
    value: 'الطول (سم) ',
    name: 'height',
    min: 120,
    max: 220,
    errorMessage: 'الطول يجب ان يكون بين 120 الي 220 كحد اقصي'
  },
  {
    label: '',
    value: ' العمر (سنة)',
    name: 'age',
    min: 18,
    max: 90,
    errorMessage: 'العمر يجب ان لا يقل عن 18 عام'
  }
];

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
  const [weightError, setWeightError] = useState('');

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
        if (name === 'weight') setWeightError('fine');
      } else {
        handleError(name, '');
        if (name === 'weight') setWeightError('');
      }
    }
    if (name === 'desiredWeight' || name === 'weight') {
      validateDesiredWeight(name, +value);
    }
  }
  function validateDesiredWeight(
    name: 'weight' | 'desiredWeight',
    value: number
    // this for update weight error only
  ) {
    if (name === 'weight') {
      if (
        value >= measurements.desiredWeight &&
        measurements.desiredWeight >= 40
      ) {
        handleError('desiredWeight', 'fine');
      } else {
        handleError('desiredWeight', '');
      }
      return;
    }
    if (name === 'desiredWeight') {
      if (value <= measurements.weight && value >= 40) {
        handleError(name, 'fine');
      } else {
        handleError(name, '');
      }
    }
  }
  useEffect(() => {
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
  useEffect(() => {
    weightError === 'fine' || errors.weight
      ? handleError('weight', 'fine')
      : handleError('weight', '');
  }, [weightError]);
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
            انثي
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

export const nameInfo = [
  {
    label: 'الاسم الاول ',
    name: 'name',
    type: 'text',
    // max length: 20
    re: /(?=^.{3,15}$)/
  },
  {
    label: 'اسم العائلة ',
    name: 'lastName',
    type: 'text',
    re: /(?=^.{3,15}$)/
  }
];
export const allProfileInfo = [
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
  user,
  setRegisterDetails
}: Props) {
  useLayoutEffect(() => {
    setHeader('بيانات الحساب');
  }, []);
  const [profile, setProfile] = useState<Profile | any>(user.profile);
  //  dont set user measurements before checking that error state is clear use ( useEffect)
  const [errors, setErrors] = useState(user.profile);

  const theSetUser = useStore((state) => state.setUser);
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setProfile((old: any) => ({ ...old, [name]: value }));
    let find;
    if (name === 'name' || name === 'lastName') {
      find = nameInfo.find((item) => item.name === name);
    } else {
      find = allProfileInfo.find((m) => m.name === name);
    }
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
  useEffect(() => {
    if (user) {
      setRegisterDetails(user);
    }
  }, [user]);

  return (
    <Flex flexDir={'column'} gap='2' w='100%' align='center'>
      <Flex
        gap='1'
        align='center'
        justify='space-between'
        w='100%'
        flexDir={{ base: 'column', md: 'row' }}
      >
        {nameInfo.map((prof, i) => (
          <FormControl
            flex='1'
            isInvalid={errors[prof.name] === '' ? true : false}
            key={i}
          >
            <InputGroup>
              <InputLeftAddon
                w={{ base: '150px', md: '90px' }}
                bg='orange.500'
                children={prof.label}
              />

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
          </FormControl>
        ))}
      </Flex>
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
