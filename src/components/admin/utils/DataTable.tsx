import {
  Flex,
  Text,
  Badge,
  Table,
  TableContainer,
  Td,
  Thead,
  Tr,
  Th,
  Tbody
} from '@chakra-ui/react';

export type Field = {
  label: string;
  name: string;
  parentField?: string;
  custom?: (item: any) => string;
  type?: 'string' | 'date' | 'boolean' | string;
};
type Props = {
  headers: Field[];
  row: any[];
  onLineClick?: (id: string) => void;
};
function getText(value: any, type?: string) {
  if (typeof value === 'boolean') return value ? 'نعم' : 'لا';
  if (type === 'date')
    return new Date(value).toLocaleString('ar', {
      // timeStyle: 'full'
    });
  return value;
}
function handleText(field: Field, item: any) {
  if (field.custom) {
    return field.custom(item);
  }
  if (field.parentField) {
    return !item[field.parentField]
      ? ''
      : getText(item[field.parentField][field.name], field.type);
  }

  return getText(item[field.name], field.type);
}
export function DataTable({ headers = [], row = [], onLineClick }: Props) {
  return (
    <TableContainer minW='100%'>
      <Table variant='simple'>
        <Thead>
          <Tr>
            {headers.map((field, i) => (
              <Th color='orange.100' bg='orange.800' key={i}>
                {field.label}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {row.map((item: any, i) => {
            return (
              <Tr
                cursor={'pointer'}
                transition='all 0.2s ease-in-out'
                _hover={{
                  bg: 'orange.200',
                  transition: 'all 0.2s ease-in-out'
                }}
                key={i}
                onClick={() => (onLineClick ? onLineClick(item._id) : null)}
              >
                {headers.map((field) => (
                  <Td color='orange.800' key={field.name}>
                    {handleText(field, item)}
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
