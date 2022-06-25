import { Flex, AspectRatio, Text } from '@chakra-ui/react';
import MyVideo from './MyVideo';
const videos = [
  {
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    mins: 10
  },
  {
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    mins: 10
  },
  {
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    mins: 10
  }
];
export default function WorkoutVideos() {
  return (
    <Flex wrap='wrap' flexDir={{ base: 'column', md: 'row' }} gap='3'>
      {videos.map((video, i) => (
        <MyVideo key={i} src={video.src} mins={video.mins} />
      ))}
    </Flex>
  );
}
