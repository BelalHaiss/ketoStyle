import { Flex, Button, Radio, RadioGroup } from '@chakra-ui/react';
type Prop = {
  page: number;
  navigatePage: (senario: 'next' | 'prev') => void;
  buttonState: {
    next: boolean;
    prev: boolean;
  };
};
const maxPages = 9;
export function Walkthrough({ page, navigatePage, buttonState }: Prop) {
  return (
    <Flex w='100%' align={'center'} justify='space-between'>
      <Button
        onClick={() => navigatePage('next')}
        colorScheme='orange'
        disabled={buttonState.next}
      >
        التالي
      </Button>
      {/* <RadioGroup> */}
      <Flex gap='1'>
        {Array.from(Array(maxPages)).map((_, i) => (
          <Radio
            size='sm'
            isReadOnly
            isChecked={page === i + 1}
            colorScheme={'orange'}
            key={i}
            value={i + 1}
          ></Radio>
        ))}
      </Flex>
      {/* </RadioGroup> */}

      <Button
        onClick={() => navigatePage('prev')}
        colorScheme='orange'
        variant={'ghost'}
        disabled={buttonState.prev}
      >
        رجوع
      </Button>
    </Flex>
  );
}
