import React, { useState } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';
import { UsersTableHead } from './UsersTableHead';
import { SortOrder, User } from '../../../models/interfaces';
import { USER_TABLE_HEADS } from '../../../constants';

export const UsersTable = () => {
  const [order, setOrder] = useState<SortOrder>('asc');
  const [orderBy, setOrderBy] = useState<keyof User>('id');

  const handleRequestSort = (property: keyof User) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <Paper>
      <div>Toolbar</div>
      <TableContainer>
        <Table sx={{ minWidth: 750 }} size="medium">
          <UsersTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={(_, property) => handleRequestSort(property)}
            heads={USER_TABLE_HEADS}
          />
        </Table>
      </TableContainer>
    </Paper>
  );
};
