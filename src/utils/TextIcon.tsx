import { Text, Icon, Flex, Image } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type Props = {
  text: string;
  icon?: IconType;
  image?: string;
};
export default function TextIcon({ text, icon, image }: Props) {
  return (
    <Flex w={{ base: '200px', md: '300px' }} align='center' gap='2'>
      {icon && (
        <Icon
          as={icon}
          w={{ base: 8, md: 12 }}
          h={{ base: 8, md: 12 }}
          color='orange.800'
        />
      )}
      {image && (
        <Image
          src={image}
          w={{ base: 8, md: 12 }}
          borderRadius={'full'}
          h={{ base: 8, md: 12 }}
          alt='keto'
        />
      )}
      <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight='bold'>
        {text}
      </Text>
    </Flex>
  );
}
