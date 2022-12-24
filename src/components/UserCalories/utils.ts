import { MealTimes } from 'src/ts/store.types';
import { Measure, Physical, Willing } from 'src/ts/register.types';
import { MealsData, CustomMeal } from './TimesEnergy';
import { Meal } from 'src/ts/store.types';

export type Energy = 'carbs' | 'proteins' | 'fats' | 'calories';

export function calculateActualEnergy(data: MealsData, custom: CustomMeal) {
  let carbs = 0,
    fats = 0,
    proteins = 0,
    calories = 0;
  // @
  for (let energy in data) {
    // @ts-ignore
    data[energy].map((meal: Meal) => {
      carbs += meal.carbs;
      fats += meal.fats;
      proteins += meal.proteins;
      calories += meal.calories;
    });
  }
  carbs += custom.carbs;
  fats += custom.fats;
  proteins += custom.proteins;
  calories += custom.calories;
  return {
    carbs,
    fats,
    proteins,
    calories
  };
}

export function calculateEnergy(
  willing: Willing,
  physical: Physical,
  measurements: Measure
) {
  let calories, carbs, fats, proteins;
  // 900 + 1,062.5  -  125 +5  // 1,842.5
  // 170  25
  calories =
    10 * measurements.weight +
    6.25 * measurements.height -
    5 * measurements.age;

  calories += measurements.sex === 'male' ? 5 : -161;

  calories = calories * getPhysicalValue(physical);

  calories = netCalories(calories, measurements.sex, willing);
  fats = (0.7 * calories) / 9;
  proteins = (0.25 * calories) / 4;
  carbs = (0.05 * calories) / 4;
  return {
    calories,
    carbs,
    fats,
    proteins
  };
}

export function getTimeLabel(time: MealTimes) {
  let label = '';
  switch (time) {
    case 'breakfast':
      label = 'الافطار';
      break;

    case 'dinner':
      label = 'العشاء';
      break;

    case 'lunch':
      label = 'الغداء';
      break;

    case 'snack':
      label = 'خفيفة';
      break;
  }
  return label;
}
export function getEnergyLabel(time: Energy) {
  switch (time) {
    case 'carbs':
      return 'الكربوهيدرات';
    case 'proteins':
      return 'البروتينات';
    case 'fats':
      return 'الدهون';
    case 'calories':
      return 'السعرات الحرارية';

    default:
      break;
  }
}

function getPhysicalValue(physical: Physical) {
  switch (physical) {
    case 'sedentary':
      return 1.2;
    case 'light':
      return 1.375;
    case 'moderate':
      return 1.55;
    case 'active':
      return 1.725;
  }
}

function netCalories(
  calories: number,
  sex: 'male' | 'female',
  willing: Willing
) {
  let net = calories;
  if (sex === 'male') {
    net -= willing === 'max' ? 500 : 250;
    return net;
  } else {
    net -= willing === 'max' ? 300 : 150;
    return net;
  }
}

export const isSafari = (navigator: any) => false;
// export const isSafari = (navigator: any) =>
//   navigator?.vendor &&
//   navigator?.vendor.indexOf('Apple') > -1 &&
//   navigator?.userAgent &&
//   navigator?.userAgent.indexOf('CriOS') == -1 &&
//   navigator?.userAgent.indexOf('FxiOS') == -1;
