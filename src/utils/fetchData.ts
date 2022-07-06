import { fetcher } from './fetcher';

export async function fetchPrices(setPrices: any) {
  const prices = await fetcher({ url: '/prices', noErrorToast: true });
  setPrices(prices);
}

export async function fetchWorkouts(setWorkouts: any) {
  const workouts = await fetcher({ url: '/workout' });
  setWorkouts(workouts);
}
