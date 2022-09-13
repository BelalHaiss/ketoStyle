import { Plans, USER } from 'src/ts/store.types';
export function checkSubscription(user: USER, plan: Plans): boolean {
  const thePlan = user.plans.find((plans) => plans.category === plan);
  if (!thePlan) {
    return false;
  }
  if (new Date(thePlan.end) > new Date()) {
    return true;
  } else return false;
}
