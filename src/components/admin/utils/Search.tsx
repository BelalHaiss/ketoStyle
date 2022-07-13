import { Flex, Input, Icon } from '@chakra-ui/react';
import { useState } from 'react';
import { MdOutlinePersonSearch } from 'react-icons/md';
type SearchProps = {
  onSearch: (value: string) => void;
  placeholder: string;
};
export default function Search({ placeholder, onSearch }: SearchProps) {
  const [value, setValue] = useState('');
  return (
    <Flex w='60%' layerStyle={'flexCenter'} dir='ltr' position='relative'>
      <Input
        type='text'
        value={value}
        placeholder={placeholder}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSearch(value);
          }
        }}
        size='lg'
        borderRadius={'3xl'}
        focusBorderColor='orange.500'
        onChange={(e) => setValue(e.target.value)}
      />
      <Icon
        as={MdOutlinePersonSearch}
        w='30px'
        h='30px'
        zIndex={40}
        cursor='pointer'
        position={'absolute'}
        right='10px'
        onClick={() => onSearch(value)}
        top='7px'
        color='orange.500'
      />
    </Flex>
  );
}
