import { Flex, Text, Icon } from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa';

type Props = {
  title: string;
  texts: string[];
  isValues: boolean;
};
export default function MealSquare({ title, texts, isValues }: Props) {
  return (
    <Flex
      flexDir='column'
      //   layerStyle={'flexCenter'}
      align='center'
      p='2'
      bg='orange.200'
      rounded={'xl'}
      w='250px'
      minH='350px'
    >
      <Text fontSize='2xl' mt='2' mb='3' fontWeight={'bold'}>
        {title}
      </Text>
      <Flex flexDir={'column'} mt={isValues ? 7 : 0} w='100%' px='1' gap='2'>
        {texts.map((text, index) => (
          <Flex align='center' gap='1' key={index}>
            <Icon as={FaCircle} w='2' color='orange.800' />
            <Text fontSize={isValues ? 'lg' : 'md'} fontWeight='semibold'>
              {text}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
