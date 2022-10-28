import { Image } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
const maxImage = 2;
export function BeforeAfterSlider() {
  const [img, setImg] = useState(1);

  function swapImage() {
    setImg((old) => {
      return old === maxImage ? 1 : old + 1;
    });
  }

  useEffect(() => {
    const myInterval = setInterval(swapImage, 3000);
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <Image
      alt='before'
      w='400px'
      h='400px'
      key={img}
      borderRadius={'xl'}
      className='before-after'
      src={`/home/before-after/${img}.jpeg`}
    />
  );
}
