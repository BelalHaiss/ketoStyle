import { Flex, Text, Heading, Icon } from '@chakra-ui/react';
import { useState } from 'react';
import { feedbacks } from 'src/utils/dataHelper';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const arrLength = feedbacks.length;
function next(
  currentIndex = 0,
  setState: (num: number) => void,
  setAction: (action: 'prev' | 'next') => void
) {
  if (currentIndex === arrLength - 1) {
    setState(0);
  } else {
    setState(currentIndex + 1);
  }
  setAction('next');
}
function prev(
  currentIndex = 0,
  setState: (num: number) => void,
  setAction: (action: 'prev' | 'next') => void
) {
  if (currentIndex === 0) {
    setState(arrLength - 1);
  } else {
    setState(currentIndex - 1);
  }
  setAction('prev');
}
export function FeedBack() {
  const [feedbackIndex, setFeedBackIndex] = useState(0);
  const [action, setAction] = useState('');
  return (
    <Flex
      color='orange.900'
      flexDir='column'
      overflow={'hidden'}
      align='center'
      mt='5'
      gap='2'
      w={{ base: '90%' }}
      mx='auto'
    >
      <Flex w='100%' fontSize={'40px'} gap='2' align='center' justify='center'>
        <Heading fontSize='1em'>اراء عملاء</Heading>
        <Heading
          fontSize='1em'
          color='red.500'
          fontWeight={'bold'}
          className='ketoHeading'
          //   letterSpacing={'5px'}
        >
          {' '}
          كيتو
        </Heading>
        <Heading
          fontSize='1em'
          color='orange.300'
          fontWeight={'bold'}
          className='ketoHeading'
        >
          {' '}
          ستايل
        </Heading>
      </Flex>

      {/* feedback box */}

      <Flex
        w='100%'
        position={'relative'}
        bg='orange.100'
        h={{ base: '280px', md: '150px' }}
        align='center'
        borderRadius={'xl'}
        p='5'
      >
        <Icon
          as={IoIosArrowBack}
          position={'absolute'}
          left='1'
          bottom='40%'
          onClick={() => prev(feedbackIndex, setFeedBackIndex, setAction)}
          w={'30px'}
          h={'30px'}
          cursor='pointer'
          color={'orange.500'}
        />
        <Flex
          key={Math.random()}
          className={
            action === 'next'
              ? 'nextAnimation'
              : action === 'prev'
              ? 'prevAnimation'
              : ''
          }
          align='center'
          w='100%'
          h={{ base: '280px', md: '150px' }}
        >
          <Text w='90%' mx='auto' fontWeight={'bold'} fontSize='20px'>
            {feedbacks[feedbackIndex].text}
          </Text>

          <Text position={'absolute'} bottom='2' left='10'>
            {feedbacks[feedbackIndex].person}
          </Text>
        </Flex>

        <Icon
          position={'absolute'}
          right='1'
          bottom='40%'
          as={IoIosArrowForward}
          onClick={() => next(feedbackIndex, setFeedBackIndex, setAction)}
          w={'30px'}
          h={'30px'}
          cursor='pointer'
          color={'orange.500'}
        />
      </Flex>
    </Flex>
  );
}
