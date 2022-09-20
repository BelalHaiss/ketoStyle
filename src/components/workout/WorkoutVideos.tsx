import { Flex, AspectRatio, Text } from '@chakra-ui/react';
import MyVideo from './MyVideo';
import { useState } from 'react';
import { useAsync } from 'src/customHooks/useAsync';
import Loader from 'src/utils/Loader';
type Video = { url: string; duration: number };

export default function WorkoutVideos() {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState<Video[]>([]);
  const [shouldFetch, setShouldFetch] = useState(true);
  useAsync(
    !shouldFetch
      ? null
      : {
          url: `/workout/${new Date().getDate()}`
        },
    setVideos,
    {
      onRequest: () => setShouldFetch(false),
      onSuccess: () => setLoading(false)
    }
  );
  return (
    <Flex wrap='wrap' flexDir={{ base: 'column', md: 'row' }} gap='3'>
      {loading && <Loader />}
      {!loading &&
        videos.map((video, i) => (
          <MyVideo key={i} src={video.url} mins={video.duration} />
        ))}
    </Flex>
  );
}
