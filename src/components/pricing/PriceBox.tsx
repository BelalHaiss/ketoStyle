/* eslint-disable jsx-a11y/role-supports-aria-props */

import { Flex, Text, Divider } from '@chakra-ui/react';
import { useState } from 'react';
import { Price } from 'src/ts/store.types';
import { TEXT_WITH_ICONS } from 'pages/pricing';
import Payment from 'src/components/checkout/Checkout';

type Props = {
  title: string;
  plan: Price;
};

function PricePerMonth(plan: Price) {
  const theCategoryPlan = plan.plans.find((plan) => plan.category === 'meal');

  if (!theCategoryPlan) throw new Error('big problem');
  const monthNumber = +theCategoryPlan.duration / 30;
  const perMonth = Number(+plan.price / +monthNumber).toFixed(0);
  return `${perMonth}ريال/ للشهر`;
}
export function PriceBox({ title, plan }: Props) {
  const [checked, setChecked] = useState(false);
  function handleChecked() {
    setChecked(!checked);
  }
  return (
    <Flex
      w={{ base: '350px', md: '600px' }}
      borderRadius={'xl'}
      flexDir='column'
      p='1'
      bg={!checked ? 'orange.100' : 'orange.500'}
      color={checked ? 'white' : 'orange.900'}
      align='center'
      position={'relative'}
      onClick={handleChecked}
      transition='all 0.3s ease-out'
      cursor='pointer'
    >
      {/* upper part */}

      <Flex w='100%' align='center'>
        <Flex
          w={{ base: '50px', md: '60px' }}
          aria-checked={checked}
          h={{ base: '40px', md: '60px' }}
          bg={'white'}
          role='radiogroup'
          _after={{
            content: '""',
            width: ['27px', '27px', '45px'],
            height: ['27px', '27px', '45px'],
            transition: 'all 0.3s ease-out',
            borderRadius: '50%',
            background: '#F6AD55',
            position: 'absolute',
            right: ['10px', '10px', '12px'],
            top: ['31px', '31px', '16px'],
            opacity: `${checked ? '1' : '0'}`
          }}
          tabIndex={1}
          cursor='pointer'
          onClick={handleChecked}
          ml='2'
          borderRadius='100%'
        ></Flex>
        {/* text  */}
        <Flex flexDir='column' align='center' gap='2'>
          <Text fontWeight={'bold'} fontSize={{ base: 'md', md: '2xl' }}>
            {title}
          </Text>
          <Text>الإشتراك يدفع لمره واحده ولا يتجدد تلقائًيا</Text>
        </Flex>

        <Divider orientation='vertical' />

        {/* price */}
        <Flex
          mr='auto'
          minH='100%'
          border='2px'
          borderLeft={'none'}
          borderTop='none'
          borderBottom={'none'}
          p='2'
          flexDir='column'
          gap='2'
          align='center'
          justify='space-between'
        >
          {plan.before && (
            <Text
              fontSize='xs'
              textDecoration={'line-through'}
              color='gray.600'
            >
              {plan.before} ريال
            </Text>
          )}

          <Text
            w='100%'
            whiteSpace={'nowrap'}
            fontSize={{ base: 'sm', md: 'lg' }}
            fontWeight={'bold'}
          >
            {PricePerMonth(plan)}{' '}
          </Text>
        </Flex>
      </Flex>

      {/* features part */}

      {checked && (
        <Flex gap='3' w='100%' flexDir={'column'}>
          <hr style={{ border: '1px solid white', width: '100%' }} />
          <TEXT_WITH_ICONS />
          <Payment plan={plan} />
        </Flex>
      )}
    </Flex>
  );
}
