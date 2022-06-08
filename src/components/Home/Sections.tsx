import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

import { Flex, Image, Text, Heading, Icon } from '@chakra-ui/react';
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
          <Image
            order={{ base: '1', md: section.image.order }}
            w={{ base: '300px', md: '350px' }}
            alt={section.image.alt}
            src={section.image.src}
          />
          <Flex
            w={{ base: 'auto', lg: '405px' }}
            gap='4'
            wrap='wrap'
            order={{ base: '2', md: section.image.order === '1' ? '2' : '1' }}
            alignItems='center'
            flexDir={'column'}
          >
            {section.heading}
            <Text>{section.text}</Text>
            {section.checkedText?.map((text, i) => (
              <Flex gap='2' w='350px' key={i}>
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
