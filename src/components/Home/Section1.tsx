import { Flex, Text, Heading } from '@chakra-ui/react';
import Image from 'next/image';

const section1Fotter = [
  {
    text: 'فقدان وزن سريع',
    src: '/home/weight1.svg'
  },
  {
    text: 'زيادة التركيز',
    src: '/home/focus1.svg'
  },
  {
    text: 'خفض السكر',
    src: '/home/sugar1.svg'
  },
  {
    text: 'تخفيف حب الشباب',
    src: '/home/hab1.svg'
  }
];
export default function Section1() {
  return (
    <>
      <Flex
        align='center'
        py='1'
        my='5'
        px='2'
        gap='2'
        flexDir={{ base: 'column', md: 'row' }}
        justify='space-around'
      >
        <Flex order={{ base: '1', md: '2' }}>
          <Image
            width={400}
            height={400}
            priority
            className='section-image'
            alt='Keto sandwich'
            src='/home/sandwich1.svg'
          />
        </Flex>
        <Heading
          order={{ base: '2', md: '1' }}
          w={{ base: 'auto', md: '300px' }}
          as='h3'
          color='orange.900'
          fontSize={{ base: 'xl', md: '5xl' }}
        >
          وسيلتك الأسهل للوصول للوزن{' '}
          <Text display='inline-block' color='orange.500'>
            {' '}
            المثالي
          </Text>
        </Heading>
      </Flex>
      <Flex my='2' wrap='wrap' align='center' gap='1' justify={'space-around'}>
        {section1Fotter.map(({ text, src }) => (
          <Flex align='center' key={src}>
            <Image width={100} height={100} src={src} alt={text} />
            <Text
              fontSize={{ base: 'md', md: 'xl' }}
              w='100px'
              fontWeight={'bold'}
              color='gray.900'
            >
              {text}
            </Text>
          </Flex>
        ))}
      </Flex>
    </>
  );
}
