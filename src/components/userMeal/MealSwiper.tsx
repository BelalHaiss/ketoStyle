import { Flex, Text, IconButton, Icon } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Swiper } from './Swiper';
import { useAsync } from 'src/customHooks/useAsync';
type Props = {
  link: string;
  label: string;
};
const iconsWidth = 60; // next and prev icons width with px
function handleDocsOnscreen(
  width: number,
  setDocsOnScreen?: React.Dispatch<React.SetStateAction<number>>,
  setIndex?: any // setIndex state
) {
  //handle how many docs are onscreen
  const swiperContainerWidth = width - iconsWidth;
  const docOnScreenCount = Math.floor(swiperContainerWidth / 190);
  if (setDocsOnScreen) setDocsOnScreen(docOnScreenCount);
  if (setIndex) setIndex({ start: 0, end: docOnScreenCount });
  return docOnScreenCount;
}
export function MealSwiper({ link, label }: Props) {
  const [docsOnScreen, setDocsOnScreen] = useState(
    handleDocsOnscreen(window.innerWidth)
  ); // docs that can show inside the container swiper
  const [page, setPage] = useState({ current: 1, docsNumbers: 0 });
  const [docsData, setDocsData] = useState([]); // all the data
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState({ start: 0, end: 0 }); // start and end index of the docs onscreen
  const [action, setAction] = useState<'prev' | 'next' | ''>('');
  const [shouldFetch, setShouldFetch] = useState(true); // to tell when to fetch

  useAsync(
    shouldFetch
      ? {
          url: link + page.current,
          noErrorToast: true
        }
      : null,
    null,
    {
      onRequest: () => setShouldFetch(false),
      onSuccess: (data) => {
        const newDocs = data.meals;
        setDocsData(docsData.concat(newDocs));
        setPage({ ...page, docsNumbers: data.count });
        handleDocsOnscreen(
          window.innerWidth,
          setDocsOnScreen,
          page.current === 1 ? setIndex : null
        );
        if (page.current > 1) {
          setIndex({
            start: index.start + docsOnScreen,
            end: index.end + docsOnScreen
          });
        }
        setLoading(false);
      }
    }
  );
  const handleResizeWindow = () => {
    setLoading(true);
    setDocsOnScreen(
      handleDocsOnscreen(window.innerWidth, setDocsOnScreen, setIndex)
    );
    setLoading(false);
  };

  function handleNext() {
    if (
      loading ||
      !page.docsNumbers ||
      !docsData.length ||
      index.end >= page.docsNumbers
    )
      return;

    if (
      index.end < docsData.length &&
      (index.end + docsOnScreen <= docsData.length ||
        docsData.length === page.docsNumbers)
    ) {
      setIndex({
        start: index.start + docsOnScreen,
        end: index.end + docsOnScreen
      });
    } else {
      setLoading(true);
      const newCurrent = page.current + 1;
      setPage({ ...page, current: newCurrent });
      setShouldFetch(true);
    }
    setAction('next');
    setTimeout(() => {
      setAction('');
    }, 300);
  }

  function handlePrev() {
    if (loading || !page.docsNumbers || index.start === 0) return;
    setIndex({ start: index.start - docsOnScreen, end: index.start });
    setAction('prev');
    setTimeout(() => {
      setAction('');
    }, 300);
  }
  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);
  return (
    <Flex w='100%' flexDir='column' my='4' gap='2'>
      <Text px='4' fontSize={{ base: 'md', md: 'xl' }} fontWeight='bold'>
        {label}
      </Text>

      <Flex
        justify='space-between'
        bg='orange.50'
        borderRadius={'xl'}
        align='center'
        py='10px'
        h='270px'
        w='100%'
      >
        <Icon
          as={IoIosArrowForward}
          onClick={handleNext}
          cursor='pointer'
          w={'30px'}
          h={'30px'}
          color={
            !loading &&
            page.docsNumbers &&
            (index.end < docsData.length || docsData.length < page.docsNumbers)
              ? 'orange.500'
              : 'orange.100'
          }
        />

        <Swiper
          action={action}
          loading={loading}
          docsCount={docsOnScreen}
          data={docsData.slice(index.start, index.end)}
        />
        <Icon
          as={IoIosArrowBack}
          onClick={handlePrev}
          w={'30px'}
          h={'30px'}
          cursor='pointer'
          color={
            !loading && page.docsNumbers && index.start > 0
              ? 'orange.500'
              : 'orange.200'
          }
        />
      </Flex>
    </Flex>
  );
}
