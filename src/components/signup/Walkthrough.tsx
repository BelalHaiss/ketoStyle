import { Flex, Button, Radio, RadioGroup } from '@chakra-ui/react';
type Prop = {
  page: number;
  navigatePage: (senario: 'next' | 'prev') => void;
  buttonState: {
    next: boolean;
    prev: boolean;
  };
};
const maxPages = 8;
export function Walkthrough({ page, navigatePage, buttonState }: Prop) {
  return (
    <Flex>
      <Button
        onClick={() => navigatePage('prev')}
        colorScheme='orange'
        variant={'ghost'}
        disabled={buttonState.prev}
      >
        {' '}
        رجوع
      </Button>
      <RadioGroup defaultValue={page}>
        {/* <Flex gap='1'>{Array.from(Array(maxPages)).map}</Flex> */}
      </RadioGroup>
      <Button
        onClick={() => navigatePage('next')}
        colorScheme='orange'
        disabled={buttonState.next}
      >
        التالي
      </Button>
    </Flex>
  );
}
