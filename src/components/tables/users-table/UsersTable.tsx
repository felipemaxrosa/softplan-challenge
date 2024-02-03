import React, { useMemo, useState } from 'react';

import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tooltip,
} from '@mui/material';
import { UsersTableHead } from './UsersTableHead';
import { SortOrder, User } from '../../../models/interfaces';
import { USER_TABLE_HEADS } from '../../../constants';
import { UsersTableToolbar } from './UsersTableToolbar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { getComparator, stableSort } from '../../../utils';
import { useAppSelector } from '../../../store';
import { selectIsAdminUser } from '../../../store/selectors';

interface UsersTableProps {
  tableRows: User[];
}
export const UsersTable = ({ tableRows }: UsersTableProps) => {
  const [order, setOrder] = useState<SortOrder>('asc');
  const [orderBy, setOrderBy] = useState<keyof User>('id');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const isAdmin = useAppSelector(selectIsAdminUser);

  const handleRequestSort = (property: keyof User) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableRows.length) : 0;

  // const sortedRows = useMemo(
  //   () =>
  //     stableSort(tableRows, getComparator(order, orderBy)).slice(
  //       page * rowsPerPage,
  //       page * rowsPerPage + rowsPerPage
  //     ),
  //   [order, orderBy, page, rowsPerPage, tableRows]
  // );

  const handleEditClick = (user: User) => {};
  const handleDeleteClick = (id?: number) => {};

  return (
    <Paper>
      <UsersTableToolbar />
      <TableContainer>
        <Table size="medium">
          <UsersTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={(_, property) => handleRequestSort(property)}
            heads={USER_TABLE_HEADS}
          />

          <TableBody>
            {tableRows.map((row) => (
              <TableRow hover key={row.id}>
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.profile}</TableCell>

                {isAdmin && (
                  <TableCell align="right" padding="normal">
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="flex-end"
                      gap={1}
                    >
                      <Tooltip title="Editar Usuario">
                        <IconButton
                          aria-label="edit"
                          onClick={() => handleEditClick(row)}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Deletar Usuario">
                        <IconButton
                          aria-label="delete"
                          onClick={() => handleDeleteClick(row.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
