import axios from 'axios';
import Toast from './Toast';

type Args = {
  url: string;
  method?: 'get' | 'post' | 'put' | 'delete';
  data?: any;
  successToast?: string;
  errorToast?: string; //mesage when error
  abortRequest?: boolean;
  selfHandling?: boolean;
};

let controller = new AbortController();

let lastFetch: number;
export const fetcher = async ({
  url,
  method = 'get',
  data = null,
  successToast = '', // text to display on success
  errorToast,
  abortRequest = false,
  selfHandling
}: Args) => {
  // const productionURL = 'https://auto-service-api.herokuapp.com';
  const devUrl = 'https://autoservice-staging.herokuapp.com';
  const STATGIN_COUNTRY_CODE = '61e888a4f7274d001692753e';
  axios.defaults.baseURL = devUrl;
  if (abortRequest) {
    const now = Date.now();

    if (now - lastFetch < 1000) {
      controller.abort('multiple requests');
      controller = new AbortController();
    }
    lastFetch = Date.now();
  }
  try {
    const res = await axios({
      url: url,
      method,
      headers: {
        Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwMDIyMjA5OSIsImlhdCI6MTYzNTg5NTg0MSwiZXhwIjoxOTUxMjU1ODQxfQ.eu8D7aUZ_u-U6zoH41Y4XbRq0wfkBu7kYtVNt1m08c8`,
        country: STATGIN_COUNTRY_CODE,
        //  localStorage.getItem('country') || '6184aea034e78407518074e8',
        languageCode:
          localStorage.getItem('i18nextLng') === 'en-US' ? 'en' : 'ar'
      },
      data,
      signal: controller.signal
    });
    if (successToast) {
      Toast(successToast, 'success');
    }

    return res.data;
  } catch (error: any) {
    if (selfHandling) throw new Error(error.message);

    if (error.message === 'canceled') return;
    // if (abortRequest) return;
    Toast(errorToast ?? 'حدث خطا في الاتصال بالخادم', 'error');

    return 'error';
  }
};
