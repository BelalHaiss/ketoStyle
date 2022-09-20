import { Flex, Button, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { UploadImage } from 'src/components/meals/uploadImage';
import AdminHoc from 'src/components/AdminHOC';
import { CustomFormControl } from 'src/utils/FormControl';
import { BackButton } from 'src/utils/BackButton';
import FormAction from 'src/utils/FormActions';
import { MealInfo, Meal } from 'src/ts/store.types';
import { addMeal, deleteMeal } from 'src/utils/fetchData';
import { useStore } from 'src/store';
import { useRouter } from 'next/router';
const initialSubmutButton = {
  submitActive: false,
  submitLoading: false,
  loadingText: 'جاري تحديث البيانات'
};
const mealsInfo = (): MealInfo[] => [
  {
    label: 'الصورة',
    name: 'image',
    type: 'text',
    value: ''
  },
  {
    label: 'اسم الوجبة',
    value: '',
    type: 'text',
    name: 'name'
  },
  {
    label: 'الصنف',
    value: '',
    type: 'select',
    name: 'category',
    options: [
      {
        value: 'chicken',
        label: 'الدجاج'
      },
      {
        value: 'fish',
        label: 'الاسماك'
      },
      {
        value: 'caridea',
        label: 'الروبيان'
      },
      {
        value: 'cow',
        label: 'لحم الابقار'
      },
      {
        value: 'sheep',
        label: 'لحم الاغنام'
      },
      {
        value: 'camel',
        label: 'لحم الجمال'
      },
      {
        value: 'other',
        label: 'اخري'
      }
    ]
  },
  {
    label: 'موعد الوجبة',
    name: 'time',
    type: 'select',
    value: '',
    options: [
      {
        value: 'breakfast',
        label: 'فطور'
      },
      {
        value: 'lunch',
        label: 'غداء'
      },
      {
        value: 'dinner',
        label: 'عشاء'
      },
      {
        value: 'snack',
        label: 'وجبة خفيفة'
      }
    ]
  },
  {
    label: 'المدة الزمنية',
    value: '',
    name: 'duration',
    type: 'number'
  },
  {
    label: 'السعرات الحرارية',
    value: '',
    name: 'calories',
    type: 'number'
  },
  {
    label: 'البروتين',
    value: '',
    name: 'proteins',
    type: 'number'
  },
  {
    label: 'الكاربوهيدرات',
    value: '',
    name: 'carbs',
    type: 'number'
  },
  {
    label: 'الدهون',
    value: '',
    name: 'fats',
    type: 'number'
  },
  {
    label: 'طريقة التحضير',
    value: '',
    name: 'steps',
    type: 'textarea'
  },
  {
    label: 'المكونات',
    value: [''],
    name: 'components',
    type: 'array'
  }
];
function AddMeal() {
  const router = useRouter();
  const query = router.query;
  const setMealView = useStore((state) => state.setMealView);
  const mealView = useStore((state) => state.mealView);
  const user = useStore((state) => state.user);
  const [formData, setFormData] = useState<MealInfo[] | any>(mealsInfo);
  const [submitButton, setSubmitButton] = useState(initialSubmutButton);
  const [imageURL, setImageURL] = useState({
    url: '',
    puplicId: ''
  });

  const [FormActionView, setFormActionView] = useState('none');
  function resetFormAction() {
    setFormActionView('none');
    setSubmitButton(initialSubmutButton);
  }
  function onChange(name: string, value: string) {
    setSubmitButton({ ...submitButton, submitActive: true });
    setFormActionView('flex');
    setFormData(
      formData.map((item: MealInfo) => {
        if (item.name === name) {
          if (item.type === 'number') {
            item.value = +value;
          } else if (item.type === 'array') {
            item.value = value.split(',');
          } else {
            item.value = value;
          }
        }
        return item;
      })
    );
  }
  function setImage(value: string) {
    setSubmitButton({ ...submitButton, submitActive: true });
    setFormActionView('flex');
    setFormData(
      formData.map((item: MealInfo) => {
        if (item.name === 'image') {
          item.value = value;
        }
        return item;
      })
    );
  }

  function editedData() {
    return formData.map((item: MealInfo) => {
      if (item.name === 'category' || item.name === 'time') {
        console.log(mealView, 'mealView');
        // @ts-ignore
        item.value = mealView![item.name].value;
      } else if (item.name === 'image') {
        setImageURL({
          url: mealView!.image.url,
          puplicId: mealView!.image.public_id
        });
        setImage(mealView!.image.public_id);
        item.value = mealView!.image.public_id;
      } else {
        item.value = mealView![item.name];
      }
      return item;
    });
  }
  function onReset() {
    if (query.edit && mealView) {
      setFormData(editedData());
    } else {
      setFormData(mealsInfo());
    }
    resetFormAction();
  }
  function onSubmit() {
    setSubmitButton({
      ...submitButton,
      submitLoading: true
    });
    addMeal(
      [...formData, { name: 'addedBy', value: user?._id }],
      setMealView,
      router,
      query.edit ? query.edit.toString() : ''
    );
    resetFormAction();
  }

  useEffect(() => {
    if (query.edit && mealView && mealView.addedBy === user?._id) {
      setFormData(editedData());
    } else {
      setFormData(mealsInfo());
    }
  }, [query]);
  return (
    <Flex position={'relative'} layerStyle='flexCenter' flexDir='column' p='3'>
      <BackButton path='/admin/meals' />
      <Text fontSize='3xl' fontWeight='bolder'>
        اضف وجبة جديدة
      </Text>
      <UploadImage url={imageURL} updateImage={setImage} />

      <Flex layerStyle={'flexResponsive'} gap='4' w='100%' wrap='wrap'>
        {formData.length &&
          formData.map((item: MealInfo, i: number) => (
            <CustomFormControl
              key={i}
              type={item.type}
              value={item.value}
              name={item.name}
              width='500px'
              label={item.label}
              onChange={onChange}
              options={item.options ? item.options : null}
            />
          ))}
      </Flex>
      <FormAction
        onReset={onReset}
        onSubmit={onSubmit}
        submitButton={submitButton}
        display={FormActionView}
      />

      {query.edit && mealView && (
        <Button
          onClick={() => {
            deleteMeal(
              mealView._id,
              mealView.image.public_id,
              user?._id,
              router
            );
            setMealView(null);
          }}
          my='4'
          colorScheme='red'
          w='80%'
          mx='auto'
        >
          حذف الوجبة
        </Button>
      )}
    </Flex>
  );
}

export default AdminHoc(AddMeal, 'meals');
