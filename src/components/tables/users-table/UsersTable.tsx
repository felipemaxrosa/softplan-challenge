import React, { useMemo, useState } from 'react';

import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Tooltip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { UsersTableHead } from './UsersTableHead';
import { User } from '../../../models/interfaces';
import { USER_TABLE_HEADS } from '../../../constants';
import { UsersTableToolbar } from './UsersTableToolbar';
import { selectActiveUser, selectIsAdminUser } from '../../../store/selectors';
import { useAppDispatch, useAppSelector } from '../../../store';
import { deleteUser, editUser } from '../../../store/actions/user-actions';

interface UsersTableProps {
  tableRows: User[];
}
export const UsersTable = ({ tableRows }: UsersTableProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const isAdmin = useAppSelector(selectIsAdminUser);
  const activeUser = useAppSelector(selectActiveUser);
  const dispatch = useAppDispatch();

  const handleEditClick = (user: User) => {
    dispatch(editUser(user));
  };
  const handleDeleteClick = (id: number) => {
    dispatch(deleteUser(id));
  };
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const limitedRows = useMemo(
    () => tableRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage, tableRows]
  );

  return (
    <Paper>
      <UsersTableToolbar />
      <TableContainer>
        <Table size="medium" data-testid="users-table">
          <UsersTableHead heads={USER_TABLE_HEADS} />

          <TableBody>
            {limitedRows?.map((row) => (
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
                      <Tooltip title="Editar Usuário">
                        <IconButton
                          data-testid={`users-table-edit-button-user-${row.id}`}
                          aria-label="edit"
                          onClick={() => handleEditClick(row)}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>

                      {activeUser?.id !== row.id && (
                        <Tooltip title="Deletar Usuário">
                          <IconButton
                            data-testid={`users-table-delete-button-user-${row.id}`}
                            aria-label="delete"
                            onClick={() => handleDeleteClick(row.id!)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                    </Box>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        labelRowsPerPage="Linhas por página"
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={tableRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(_, page) => handleChangePage(page)}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
