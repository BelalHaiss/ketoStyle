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
  type?: 'string' | 'date' | 'boolean' | string;
};
type Props = {
  headers: Field[];
  row: any[];
  onLineClick?: (id: string) => void;
};
function getText(value: any, type?: string) {
  if (typeof value === 'boolean') return value ? 'نعم' : 'لا';
  if (type === 'date') return new Date(value).toLocaleDateString();
  return value;
}

export function DataTable({ headers = [], row = [], onLineClick }: Props) {
  return (
    <TableContainer minW='100%'>
      <Table variant='simple'>
        <Thead>
          <Tr>
            {headers.map((field) => (
              <Th color='orange.100' bg='orange.800' key={field.name}>
                {field.label}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {row.map((item: any) => {
            return (
              <Tr
                cursor={'pointer'}
                transition='all 0.2s ease-in-out'
                _hover={{
                  bg: 'orange.200',
                  transition: 'all 0.2s ease-in-out'
                }}
                key={item.id}
                onClick={() => (onLineClick ? onLineClick(item._id) : null)}
              >
                {headers.map((field) => (
                  <Td color='orange.800' key={field.name}>
                    {field.parentField
                      ? getText(item[field.parentField][field.name], field.type)
                      : getText(item[field.name], field.type)}
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
