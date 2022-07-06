import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText
} from '@chakra-ui/react';

type Props = {
  value: string | number;
  type: string | 'text' | 'number' | 'radio' | 'select';
  name: string;
  label: string;
  onChange: (name: string, value: any) => void;
  width?: string;
};
export function CustomFormControl({
  type = 'string',
  value,
  name,
  label,
  onChange,
  width
}: Props) {
  return (
    <FormControl maxW={width ? width : '500px'}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        color='orange.500'
        id={name}
        focusBorderColor='orange.500'
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      />
    </FormControl>
  );
}
