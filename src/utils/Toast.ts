import { Toast } from '../components/Layout';

type Status = 'error' | 'info' | 'warning' | 'success' | 'loading' | undefined;
export default function ToastUtil(
  description: string,
  status: Status = 'error',
  duration = 2000
) {
  return Toast({
    title: status === 'error' ? 'حدث خطأ' : 'تمت العملية بنجاح',
    description,
    status,
    duration
  });
}
