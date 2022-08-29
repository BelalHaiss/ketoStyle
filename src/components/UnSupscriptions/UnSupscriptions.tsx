import { Flex, Text, Button } from '@chakra-ui/react';

type TextIcon = { text: string; icon: any };
type ArrTextIcon = [TextIcon, TextIcon];
type Props = {
  title: string;
  subTitle: string;
  children: React.ReactNode;
  submitButton: {
    price: number;
    onClick: () => void;
    isLoading: boolean;
  };
};
export default function UnSupscriptions({
  title,
  subTitle,
  children,
  submitButton
}: Props) {
  return (
    <Flex flexDir='column' w='100%' align='center'>
      <Text>{subTitle}</Text>

      <Flex
        flexDir='column'
        w='100%'
        align='center'
        color='orange.800'
        bg='orange.100'
        p='4'
        borderRadius={'lg'}
        gap='3'
      >
        <Text fontSize={{ base: 'lg', md: '2xl' }} fontWeight={'bold'}>
          {title}
        </Text>
        {children}
        <Button
          my='3'
          bg='white'
          _hover={{
            bg: 'orange.600',
            color: 'orange.50'
          }}
          _active={{
            bg: 'orange.600',
            color: 'orange.50'
          }}
          isLoading={!submitButton.price || submitButton.isLoading}
          onClick={submitButton.onClick}
        >
          اشترك الان ب {submitButton.price} ريال/شهريًا
        </Button>
      </Flex>
    </Flex>
  );
}
