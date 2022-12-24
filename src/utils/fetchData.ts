import { fetcher } from './fetcher';
import ToastUtil from './Toast';
import { MealInfo, Meal } from 'src/ts/store.types';
import axios from 'axios';

const getDate = () => new Date().toLocaleDateString('en');
export async function fetchPrices(setPrices: any, setLoading?: any) {
  const prices = await fetcher({ url: '/prices', noErrorToast: true });
  setPrices(prices);
  setLoading && setLoading(false);
}

export async function fetchWorkouts(setWorkouts: any) {
  const workouts = await fetcher({ url: '/workout' });
  setWorkouts(workouts);
}

export async function fetchMealsCount(setMealsCount: any) {
  const url = '/meals/count?category=';
  const allCategories = [
    'chicken',
    'fish',
    'caridea',
    'cow',
    'sheep',
    'camel',
    'other'
  ];
  const [chicken, fish, caridea, cow, sheep, camel, other] = await Promise.all(
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
    camel,
    other
  });
}

export async function fetchAllMeals(
  query: { category: string; time: string },
  setMeals: (meal: any) => void,
  setLoading: (bool: boolean) => void
) {
  const data = await fetcher({
    url: `meals/all?category=${query.category}&time=${query.time}`
  });
  setMeals(data);
  setLoading(false);
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
export async function deleteRoledPerson(id: string) {
  const res = await fetcher({
    url: `/admin/role/${id}?path=admin`,
    method: 'delete',
    successToast: 'تم حذف الشخص بنجاح'
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

export async function AddWater(data: any, user: any, setState: any) {
  const res = await fetcher({
    url: '/users/water/' + user._id,
    method: 'post',
    data,
    successToast: 'تم الاضافة بنجاح',
    errorToast: 'حدث خطأ ما'
  });

  if (res) {
    setState(res);
  }
}

export async function fetchUser(userId: string, setState: any) {
  const res = await fetcher({
    url: '/users/user/' + userId,
    method: 'get',
    noErrorToast: true
  });
  if (res) {
    setState(res);
  } else {
    document.cookie = 'keto=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie =
      'keto.sig=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; ';
    setState(null);
  }
}

export async function getWater(
  userId: string,
  setState: any,
  setSavedData: any,
  mount: any
) {
  const res = await fetcher({
    url: `/users/water/${userId}?date=${getDate()}`,
    method: 'get'
  });

  if (res && mount.isMount) {
    setState(res);
    setSavedData(res);
  }
}
export async function getStatus(
  userId: string,
  setState: any,
  mount: any,
  setSavedStatus: any
) {
  const res = await fetcher({
    url: `/users/status/${userId}?date=${getDate()}`,
    method: 'get'
  });

  if (res && mount.current) {
    setState(res);
    setSavedStatus(res);
  }
}

export async function getPayLink(data: any) {
  try {
    const res = await axios({
      url: `/payments/payLink`,
      method: 'post',
      data
    });
    return res.data;
  } catch (error) {
    ToastUtil('برجاء المحاوله لاحقا');
  }
}
