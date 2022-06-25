import { Flex, Text, Button, Icon, Heading } from '@chakra-ui/react';

import Meta from 'src/utils/Meta';
import { useStore } from 'src/store';
import { GiMeal } from 'react-icons/gi';
import { BsWhatsapp } from 'react-icons/bs';
export default function Nutrition() {
  const user = useStore((state) => state.user);
  return (
    <>
      <Meta title='اخصائي التغذية' />
      <Flex gap='10' my='3' align='center' flexDir='column'>
        <Flex gap='2' flexDir={'column'}>
          <Heading as='h3' size='xl' color='orange.800'>
            {`مرحبا, ${user?.profile.name} في قسم اخصائي الاغذية`}
          </Heading>
          <Text>
            يمكنك الأن التواصل مع مختص التغذية الخاص بك عبر النقر على علامة
            الواتساب أدناه
          </Text>
        </Flex>

        <Button
          leftIcon={<BsWhatsapp fontSize='25px' />}
          colorScheme={'whatsapp'}
          size='lg'
          w='250px'
        >
          تواصل مع اخصائي
        </Button>
        <Flex
          justify={{ base: 'center', md: 'space-between' }}
          w='100%'
          px='10'
          align='center'
        >
          <Flex gap='5' flexDir={'column'}>
            <Heading as='h5' size='lg'>
              فريق التغذية
            </Heading>
            <Text>
              يقوم فريق التغذية الخاص بكيتو سايكل، ببذل قصارى جهده لإفادتكم بكل
              ماتريدون وبشكل شخصي وبمحادثة مباشرة، يمكنك سؤال مختص التغذية بكل
              مايدور في بالك من ناحية التغذية أو الوزن او الطرق المثلى للكيتو
            </Text>
          </Flex>

          <Icon
            display={{ base: 'none', md: 'inline-block' }}
            as={GiMeal}
            color='orange.200'
            w='60'
            mr='10'
            h='40'
          />
        </Flex>
      </Flex>
    </>
  );
}
