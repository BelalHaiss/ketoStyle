import { Toast } from '../components/layout/Layout';

type Status = 'error' | 'info' | 'warning' | 'success' | 'loading' | undefined;
export default function ToastUtil(
  description: string,
  status: Status = 'error',
  duration = 2000
) {
  return Toast({
    title: status === 'error' ? 'حدث خطأ' : 'تم  بنجاح',
    description,
    status,
    duration
  });
}
