import React from 'react';

import { TableCell, TableHead, TableRow } from '@mui/material';

import { useAppSelector } from '../../../store';
import { selectIsAdminUser } from '../../../store/selectors';
import { UserTableHeadCell } from '../../../models/interfaces';

interface UsersTableHeadProps {
  heads: UserTableHeadCell[];
}

export const UsersTableHead = ({ heads }: UsersTableHeadProps) => {
  const isAdmin = useAppSelector(selectIsAdminUser);

  return (
    <TableHead>
      <TableRow>
        {heads.map((content) => {
          return (
            <TableCell key={content.id} align="left" padding="normal">
              {content.label}
            </TableCell>
          );
        })}

        {isAdmin && <TableCell align="right" padding="normal" />}
      </TableRow>
    </TableHead>
  );
};
