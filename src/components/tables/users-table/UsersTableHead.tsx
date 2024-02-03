import React from 'react';

import { visuallyHidden } from '@mui/utils';
import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material';

import { SortOrder, User, UserTableHeadCell } from '../../../models/interfaces';

interface UsersTableHeadProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof User
  ) => void;
  order: SortOrder;
  orderBy: string;
  heads: UserTableHeadCell[];
}

export const UsersTableHead = ({
  heads,
  onRequestSort,
  order,
  orderBy,
}: UsersTableHeadProps) => {
  const createSortHandler =
    (property: keyof User) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {heads.map((content) => {
          const sortDirection = orderBy === content.id ? order : false;
          const sortLabelDirection = orderBy === content.id ? order : 'asc';
          const orderLabel =
            order === 'desc' ? 'sorted descending' : 'sorted ascending';

          return (
            <TableCell
              key={content.id}
              align="left"
              padding="normal"
              sortDirection={sortDirection}
            >
              <TableSortLabel
                active={orderBy === content.id}
                direction={sortLabelDirection}
                onClick={createSortHandler(content.id)}
              >
                {content.label}
                {orderBy === content.id && (
                  <Box component="span" sx={visuallyHidden}>
                    {orderLabel}
                  </Box>
                )}
              </TableSortLabel>
            </TableCell>
          );
        })}
        <TableCell align="right" padding="normal"></TableCell>
      </TableRow>
    </TableHead>
  );
};
