export type User = {
  categories: [] | Category[];
  physicalActivity: Physical;
  willing?: number;
  measurements: Measure;
  profile: Profile;
};
export type Measure = {
  sex: 'male' | 'female';
  weight: number;
  height: number;
  desiredWeight: number;
  age: number;
};

export type Profile = {
  name: string;
  lastName: string;
  email: string;
  password?: string;
  phone: number | '';
  country: string;
};
export type Value = 'chicken' | 'cow' | 'sheep' | 'camel' | 'caridea' | 'fish';
export type Category = {
  label: string;
  value: Value;
  icon: React.ReactElement;
};
export type Physical = {
  question: string;
  answer: string;
};
