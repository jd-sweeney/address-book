import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from '@nextui-org/react';

import UserHistoryType from '@/types/UserHistory';

const UserHistory = ({ userHistory }: { userHistory: UserHistoryType[] }) => (
  <Table aria-label="table" removeWrapper hideHeader isStriped>
    <TableHeader>
      <TableColumn>Years</TableColumn>
      <TableColumn>Institution</TableColumn>
    </TableHeader>
    <TableBody items={userHistory}>
      {(item) => (
        <TableRow key={item.id}>
          <TableCell className="pt-0 pl-0 w-1/2 align-top">
            <span className="font-semibold">
              {item.startYear} - {item.endYear || 'Present'}
            </span>
          </TableCell>
          <TableCell className="pt-0 pl-0">
            <p className="font-semibold">{item.institution}</p>
            <p>{item.title || item.degree}</p>
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  </Table>
);

export default UserHistory;
