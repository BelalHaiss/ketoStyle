import { Flex, Button } from '@chakra-ui/react';

export default function FormAction({
  onReset = () => {},
  onSubmit = () => {},
  display = 'none',
  submitButton = {
    submitActive: false,
    submitLoading: false,
    loadingText: 'جاري تحديث البيانات'
  }
}) {
  return (
    <Flex
      display={display}
      my='2'
      align='center'
      w='100%'
      justify='space-around'
    >
      <Button w='200px' colorScheme={'yellow'} onClick={onReset}>
        الغاء التعديلات
      </Button>
      <Button
        isLoading={submitButton.submitLoading}
        loadingText={submitButton.loadingText}
        disabled={!submitButton.submitActive}
        w='200px'
        colorScheme={'green'}
        onClick={onSubmit}
      >
        حفظ التعديلات
      </Button>
    </Flex>
  );
}
