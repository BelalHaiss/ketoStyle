/* eslint-disable react/no-children-prop */
import {
  Select,
  InputGroup,
  InputLeftAddon,
  Input,
  Flex
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
const allCountries = [
  {
    label: 'الاردن',
    value: 'jordan'
  },
  {
    label: 'الإمارات العربية المتحدة',
    value: 'uae'
  },
  {
    label: 'البحرين',
    value: 'bahrain'
  },
  {
    label: 'الجزائر',
    value: 'algeria'
  },
  {
    label: 'مصر',
    value: 'egy'
  },
  {
    label: 'السعودية',
    value: 'ksa'
  },
  {
    label: 'الكويت',
    value: 'kuwait'
  },
  {
    label: 'المغرب',
    value: 'morocco'
  },
  {
    label: 'اليمن',
    value: 'yemen'
  },
  {
    label: 'السودان',
    value: 'sudan'
  },
  {
    label: 'الصومال',
    value: 'somalia'
  },
  {
    label: 'العراق',
    value: 'iraq'
  },
  {
    label: 'تونس',
    value: 'tunisia'
  },
  {
    label: 'سوريا',
    value: 'syria'
  },
  {
    label: 'عمان',
    value: 'oman'
  },
  {
    label: 'فلسطين',
    value: 'palestine'
  },
  {
    label: 'قطر',
    value: 'qatar'
  },
  {
    label: 'لبنان',
    value: 'lebanon'
  },

  {
    label: 'ليبيا',
    value: 'libya'
  },
  {
    label: 'اخري',
    value: 'other'
  }
];

export function CountrySelect({
  country = '',
  setCountry = (value: string) => {}
}) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'other') {
      setOther(true);
      setCountry('');
    } else {
      setCountry(e.target.value);
      setOther(false);
    }
  };
  const [other, setOther] = useState(false);
  return (
    <Flex
      sx={{
        'div > div': {
          right: 'unset',
          left: '10px'
        }
      }}
      w='100%'
      gap='3'
      flexDir='column'
    >
      <Select
        bg='orange.500'
        color='gray.800'
        borderColor='tomato'
        onChange={handleChange}
        placeholder='اختر البلاد'
      >
        {allCountries.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
      {other && (
        <InputGroup>
          <InputLeftAddon w='150px' bg='orange.500' children='البلد' />

          <Input
            onChange={(e) => setCountry(e.target.value)}
            type={'text'}
            _placeholder={{ color: 'gray.700' }}
            errorBorderColor='crimson'
            isInvalid={country === ('other' || '') ? true : false}
            name={country}
            focusBorderColor='orange.500'
            value={country}
          />
        </InputGroup>
      )}
    </Flex>
  );
}
