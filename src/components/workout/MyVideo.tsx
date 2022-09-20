import { Flex, AspectRatio, Text } from '@chakra-ui/react';

type Props = {
  mins: number;
  src: string;
};
export default function MyVideo({ src, mins }: Props) {
  return (
    <Flex
      p='5'
      bg='orange.200'
      direction='column'
      borderRadius={'xl'}
      gap='3'
      align='center'
      justify='center'
    >
      <AspectRatio minW='300px' maxW='400px' ratio={4 / 2.5}>
        <iframe title='workout' src={src} allowFullScreen />
      </AspectRatio>
      <Text fontWeight='hairline' fontSize={'lg'}>
        {`مدة التمرين: ${mins} دقائق`}
      </Text>
    </Flex>
  );
}
