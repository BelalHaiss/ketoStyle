import { User } from './register.types';
export interface USER extends User {
  _id: string;
  quest: {
    label: string;
    name: string;
    _id: string;
    answers: Answer[];
  };
  role: undefined | 'admin' | 'moderator';
}

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

export type Profile = 'measurements' | 'payments';
export interface AppState {
  user: USER | null;
  setUser: (user: USER | null) => void;
  profile: Profile;
  setProfile: (profile: Profile) => void;
  prices: Price[];
  setPrices: (prices: Price[]) => void;
}
