import { MealCategory, MealTimes } from './store.types';
export type Category = {
  value: MealCategory;
  label: string;
};
export type Time = {
  value: MealTimes;
  label: string;
};

export type Count = {
  [key in MealCategory]: {
    categoryCounts: number;
    timesCounts: {
      breakfast: number;
      lunch: number;
      dinner: number;
      snack: number;
    };
  };
};
