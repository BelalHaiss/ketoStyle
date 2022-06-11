import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

import Image from 'next/image';
import { Flex, Text, Heading, Icon } from '@chakra-ui/react';
export type Section = {
  bg: string | undefined;
  heading: React.ReactElement;
  image: { src: string; width: string; alt: string; order: string };
  text: string;
  checkedText?: string[];
};

type Props = {
  sections: Section[];
};
export function Sections({ sections = [] }: Props) {
  return (
    <>
      {sections.map((section, i) => (
        <Flex
          key={i}
          align='center'
          py='1'
          my='5'
          gap={{ base: '4', md: '1' }}
          px='2'
          bg={section.bg}
          flexDir={{ base: 'column', md: 'row' }}
          justify='space-around'
        >
          <Flex
            flex='1'
            justify={'center'}
            order={{ base: '1', md: section.image.order }}
          >
            <Image
              width={section.image.width}
              height={section.image.width}
              alt={section.image.alt}
              src={section.image.src}
            />
          </Flex>
          <Flex
            flex='1'
            w={{ base: 'auto', lg: '405px' }}
            gap='4'
            wrap='wrap'
            fontSize={{ base: 'sm', md: 'md' }}
            order={{ base: '2', md: section.image.order === '1' ? '2' : '1' }}
            alignItems='center'
            flexDir={'column'}
          >
            {section.heading}
            <Text>{section.text}</Text>
            {section.checkedText?.map((text, i) => (
              <Flex gap='2' w={{ base: '250px', md: '350px' }} key={i}>
                <Icon as={BsCheck2Circle} w='5' h='5' color='green.400' />
                <Text fontWeight={'bold'}>{text}</Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      ))}{' '}
    </>
  );
}
