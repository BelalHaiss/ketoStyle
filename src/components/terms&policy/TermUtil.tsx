import {
  Flex,
  Heading,
  Table,
  Text,
  ListItem,
  UnorderedList
} from '@chakra-ui/react';

export type TermData = {
  heading: string;
  text: string[];
  subHead?: string;
};
export function TermUtil({ heading, text, subHead }: TermData) {
  return (
    <>
      <Heading fontSize='md'> {heading}</Heading>
      {subHead && <Text>{subHead}</Text>}
      {text.length === 1 && <Text> {text[0]} </Text>}
      {text.length > 1 && (
        <UnorderedList>
          {text.map((item, i) => (
            <ListItem key={i}> {item}</ListItem>
          ))}
        </UnorderedList>
      )}
    </>
  );
}
