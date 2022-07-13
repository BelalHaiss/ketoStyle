import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
  Input,
  FormHelperText,
  Flex,
  Textarea
} from '@chakra-ui/react';
import { Value_Label } from 'src/ts/store.types';

type Props = {
  value: string | number | string[];
  type: 'text' | 'number' | 'radio' | 'select' | 'array' | 'textarea' | string;
  name: string;
  label: string;
  onChange: (name: string, value: any) => void;
  width?: string;
  options?: Value_Label[] | null;
};
export function CustomFormControl({
  type,
  value,
  name,
  label,
  onChange,
  width,
  options
}: Props) {
  return (
    <FormControl maxW={width ? width : '500px'}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      {(type === 'text' || type === 'number' || type === 'array') && (
        <Input
          color='orange.500'
          readOnly={name === 'image'}
          id={name}
          focusBorderColor='orange.500'
          type={type}
          name={name}
          value={typeof value === 'object' ? value.join(',') : value}
          onChange={(e) => onChange(name, e.target.value)}
        />
      )}
      {type === 'select' && (
        <Flex
          sx={{
            'div > div': {
              left: '10px',
              right: 'unset'
            }
          }}
        >
          <Select
            id={name}
            value={value}
            onChange={(e) => onChange(name, e.target.value)}
            name={name}
            placeholder={label}
          >
            {options?.map((option, i) => (
              <option key={i} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </Flex>
      )}
      {type === 'textarea' && (
        <Textarea
          color='orange.500'
          id={name}
          focusBorderColor='orange.500'
          name={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
        />
      )}
    </FormControl>
  );
}
