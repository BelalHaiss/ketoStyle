import { User, Profile as UserProfile } from './register.types';
export interface USER extends User {
  _id: string;

  role: Role;
  water: Water;
}
export type Water = {
  date: Date;
  cups: number;
};
export type Role = undefined | 'admin' | 'meals' | 'subscriptions' | 'workouts';

type Video = {
  duration: number;
  url: string;
};
export type Workout = {
  _id: number;
  day: number;
  label: string;
  videos: Video[];
};
export type Answer = {
  _id: string;
  answer: string;
};
export type Price = {
  _id: string;
  category: 'meal' | 'nutritionist' | 'workout';
  label: string;
  price: number;
  duration: number;
};

export type Profile = 'measurements' | 'payments' | 'account';
export interface AppState {
  user: USER | null;
  setUser: (user: USER | null) => void;
  profile: Profile;
  setProfile: (profile: Profile) => void;
  prices: Price[];
  setPrices: (prices: Price[]) => void;
  mealView: Meal | null;
  setMealView: (meal: Meal | null) => void;
}

export type MealCategory =
  | 'chicken'
  | 'cow'
  | 'sheep'
  | 'camel'
  | 'caridea'
  | 'fish';

export type MealTimes = 'breakfast' | 'lunch' | 'dinner' | 'snack';
export type Meal = {
  name: string;
  category: Value_Label;
  time: Value_Label;
  image: {
    url: string;
    public_id: string;
  };
  duration: number;
  carbs: number;
  proteins: number;
  fats: number;
  calories: number;
  components: string[];
  steps: string;
  addedBy: string;
  _id: string;
};

export type Value_Label = {
  value: string;
  label: string;
};

export type MealInfo = {
  name: keyof Meal;
  value: string | number | string[];
  type: 'text' | 'number' | 'radio' | 'select' | 'array' | 'textarea';
  label: string;
  options?: Value_Label[];
};

export type AdminUser = {
  _id: string;
  role: Role;
  profile: UserProfile;
};
