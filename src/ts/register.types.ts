export type Willing = 'min' | 'max';
export type User = {
  categories: [] | Category[];
  physicalActivity: Physical;
  willing: Willing;
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
export type Physical = 'sedentary' | 'light' | 'moderate' | 'active';
