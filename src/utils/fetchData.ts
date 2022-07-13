import { fetcher } from './fetcher';
import { MealInfo, Meal } from 'src/ts/store.types';
import ToastUtil from './Toast';
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
export async function destroyImage(id: string, userId: string | undefined) {
  const data = await fetcher({
    url: `/meals/image/destroy?path=meals`,
    method: 'delete',
    data: { id, addedBy: userId },
    successToast: 'تم حذف الصورة بنجاح'
  });
}

export async function deleteMeal(
  id: string,
  public_id: string,
  userId: string | undefined,
  router: any
) {
  const data = await fetcher({
    url: '/meals/update/' + id + '?path=meals',
    method: 'delete',
    data: { public_id, addedBy: userId },
    successToast: 'تم حذف الوجبة بنجاح'
  });
  if (data) {
    router.replace('/admin/meals');
  }
}

export async function addMeal(
  info: MealInfo[],
  setMealView: (meal: Meal) => void,
  router: any,
  id: string // id of the meal to edit
) {
  // remove unneeded fields
  const payload: Meal | any = {};
  for (const key of info) {
    if (!key.value) {
      return ToastUtil('برجاء إدخال البيانات بشكل صحيح');
    }
    payload[key.name] = key.value;
  }
  let data;
  if (id) {
    data = await fetcher({
      url: '/meals/update/' + id + '?path=meals',
      method: 'patch',
      data: payload,
      successToast: 'تم تعديل  الوجبة بنجاح'
    });
  } else {
    data = await fetcher({
      url: '/meals?path=meals',
      method: 'post',
      data: payload,
      successToast: 'تم إضافة الوجبة بنجاح'
    });
  }

  if (data) {
    setMealView(data);
    router.replace('/mealView');
  }
}

export async function registerAdmin(payload: any, onClose: any) {
  const data = await fetcher({
    url: '/admin/register?path=admin',
    method: 'post',
    data: { ...payload, pw: '2320305' },
    successToast: 'تم الاضافة بنجاح'
  });
  onClose();
}

export async function getAgents(setState: any) {
  const data = await fetcher({
    url: '/admin/agents?path=admin',
    method: 'get'
  });
  if (data) {
    setState(data);
  }
}

export async function changePermission(data: { role: string; userId: string }) {
  const res = await fetcher({
    url: '/admin/changePermission?path=admin',
    method: 'patch',
    data,
    successToast: 'تم تغيير الصلاحيات بنجاح'
  });
}
export async function changePassword(data: any, id: string, isAdmin: boolean) {
  if (isAdmin) {
    const res = await fetcher({
      url: '/admin/changepassword/' + id + '?path=admin',
      method: 'patch',
      data: { password: data.password },
      successToast: 'تم تغيير كلمة المرور بنجاح'
    });
    return;
  }
  const res = await fetcher({
    url: '/users/changepassword/' + id,
    method: 'patch',
    data,
    successToast: 'تم تغيير كلمة المرور بنجاح'
  });
}

export async function countUsers(setState: any) {
  const res = await fetcher({
    url: '/admin/count/users?path=admin'
  });
  if (res) {
    setState((prevState: any) => ({ ...prevState, number: res }));
  }
}

export async function SearchUserByNameOrPhone(value: string) {
  const res = await fetcher({
    url: '/admin/find/' + value + '?path=admin'
  });
  return res;
}