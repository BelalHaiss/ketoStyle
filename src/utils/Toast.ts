import { Toast } from '../components/layout/Layout';

type Status = 'error' | 'info' | 'warning' | 'success' | 'loading' | undefined;
function getStatus(status: Status) {
  switch (status) {
    case 'error':
      return 'حدث خطا';
    case 'success':
      return 'تم بنجاح';
    default:
      return 'ملاحظة ';
  }
}
export default function ToastUtil(
  description: string,
  status: Status = 'error',
  duration = 2000
) {
  return Toast({
    title: getStatus(status),
    description,
    status,
    duration
  });
}
