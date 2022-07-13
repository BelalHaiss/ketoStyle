import { Flex, Text, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
export type StatType = {
  icon: IconType;
  label: string;
  number: number;
};

export default function StatBox({ icon, label, number }: StatType) {
  return (
    <Flex
      bg='orange.200'
      borderRadius={'xl'}
      flexDir='column'
      p='2'
      w='200px'
      h='150px'
      layerStyle={'flexCenter'}
      gap='2'
    >
      <Icon size='40px' w='30' h='30' color='orange.500' as={icon} />

      <Text my='3' color='orange.800' fontSize='xl' fontWeight='bold'>
        {label}
      </Text>
      <Text color='orange.800' fontSize='2xl' fontWeight='bold'>
        {number}
      </Text>
    </Flex>
  );
}
