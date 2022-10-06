import { Plans, USER } from 'src/ts/store.types';
export function checkSubscription(user: USER, plan: Plans) {
  const thePlan = user.plans.find((plans) => plans.category === plan);
  if (!thePlan) {
    return { status: false, end: '' };
  }
  if (new Date(thePlan.end) > new Date()) {
    return {
      status: true,
      end: new Date(new Date(thePlan.end)).toLocaleDateString('ar', {
        dateStyle: 'full'
      })
    };
  } else return { status: false, end: '' };
}
