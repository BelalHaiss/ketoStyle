import { Progress, Flex, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Energy } from './UserCalories';

type Props = {
  energy: Energy;
  label: string;
  colorScheme: string;
  value: number;
};
export function EnergyProgress({ label, energy, colorScheme, value }: Props) {
  return (
    <Flex color='orange.800' flexDir='column' gap='2'>
      <Text fontSize='lg' fontWeight='bold'>
        {' '}
        احتياجك من {label + ` ${energy.total} جم`}{' '}
      </Text>
      <Progress
        hasStripe
        isAnimated
        colorScheme={colorScheme}
        size='xs'
        mx='2'
        value={value}
        bg={colorScheme + '.100'}
      />
      <Text fontSize='xs'>
        {energy.total - energy.actual < 0
          ? `لقد استهلكت اكثر من اللازم  (${energy.actual}) جم`
          : `استهلكت ${energy.actual} متبقي لك ${
              energy.total - energy.actual
            } غم`}
      </Text>
    </Flex>
  );
}
