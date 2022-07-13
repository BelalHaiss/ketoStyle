import { Flex, Button, Image } from '@chakra-ui/react';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { useStore } from 'src/store';
declare global {
  interface Window {
    cloudinary: any;
  }
}
import { destroyImage } from 'src/utils/fetchData';

type Props = {
  updateImage: (image: string) => void;
  url: {
    url: string;
    puplicId: string;
  };
};
export function UploadImage({ updateImage, url }: Props) {
  const user = useStore((state) => state.user);
  const [cloudinary, setCloudinary] = useState(window.cloudinary);
  const [myWidget, setMyWidget] = useState<any>(null);
  const [image, setImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    if (url.puplicId && url.url) {
      setImageUrl(url.url);
      setImage(url.puplicId);
    }
  }, [url]);
  async function handleButton() {
    if (!image) {
      myWidget.open();
    } else {
      destroyImage(image, user?._id);
      setImage('');
      updateImage('');
      setImageUrl('');
    }
  }

  function createWidget(cloudinary: any) {
    const widget = cloudinary.createUploadWidget(
      {
        cloudName: 'ketoar',
        uploadPreset: 'keto-meal',
        multiple: false,
        maxImageFileSize: 9 * 1024 * 1024,
        cropping: true,
        // thumbnails: '.myThumbnail',
        singleUploadAutoClose: false
        // thumbnailTransformation: 'w_150,h_150,r_20'
      },
      (err: any, result: any) => {
        if (result.event === 'success') {
          setImage(result.info.public_id);
          updateImage(result.info.public_id);
          setImageUrl(result.info.secure_url);
        }
      }
    );
    setMyWidget(widget);
  }

  useEffect(() => {
    if (cloudinary) {
      createWidget(cloudinary);
    }
  }, [cloudinary]);

  return (
    <Flex w='100%'>
      <Script
        src='https://upload-widget.cloudinary.com/global/all.js'
        type='text/javascript'
        onLoad={() => {
          setCloudinary(window.cloudinary);
        }}
      />

      {cloudinary && (
        <Flex w='90%' justify={'space-around'} mx='auto' align={'center'}>
          <Button onClick={handleButton} colorScheme={image ? 'red' : 'green'}>
            {image ? 'حذف الصورة' : 'اختر صورة'}
          </Button>
          <Flex
            w='150px'
            h='150px'
            layerStyle={'flexCenter'}
            className='myThumbnail'
          >
            <Image
              src={
                imageUrl ? imageUrl : 'https://via.placeholder.com/150x150.png'
              }
              w='150px'
              h='150px'
              rounded='3xl'
              alt='thumbnail'
            />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
