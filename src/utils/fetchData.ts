import { fetcher } from './fetcher';

export async function fetchPrices(setPrices: any) {
  const prices = await fetcher({ url: '/prices', noErrorToast: true });
  setPrices(prices);
}

export async function fetchWorkouts(setWorkouts: any) {
  const workouts = await fetcher({ url: '/workout' });
  setWorkouts(workouts);
}

export async function fetchMealsCount(setMealsCount: any) {
  const url = '/meals/count?category=';
  const allCategories = ['chicken', 'fish', 'caridea', 'cow', 'sheep', 'camel'];
  const [chicken, fish, caridea, cow, sheep, camel] = await Promise.all(
    allCategories.map((category) => {
      const meals = fetcher({ url: url + category });
      return meals;
    })
  );
  setMealsCount({
    chicken,
    fish,
    caridea,
    cow,
    sheep,
    camel
  });
}

export async function fetchAllMeals(
  query: { category: string; time: string },
  setMeals: (meal: any) => void
) {
  const data = await fetcher({
    url: `meals/all?category=${query.category}&time=${query.time}`
  });
  setMeals(data);
}
