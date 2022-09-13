import { Flex, Text } from '@chakra-ui/react';

type Props = {
  rText: string | number;
  lText: string | number;
  width?: string;
  rBold?: boolean;
  lBold?: boolean;
};
export default function TextBetween({
  rText,
  lText,
  width,
  rBold,
  lBold
}: Props) {
  return (
    <Flex
      align='center'
      gap='1'
      wrap='wrap'
      justify='space-between'
      w={width ?? '100%'}
    >
      <Text fontWeight={rBold ? 'bold' : 'normal'}> {rText}</Text>
      <Text fontWeight={lBold ? 'bold' : 'normal'}>{lText}</Text>
    </Flex>
  );
}
