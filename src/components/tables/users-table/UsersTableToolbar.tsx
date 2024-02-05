import React, { useEffect, useState } from 'react';
import {
  Button,
  SxProps,
  TextField,
  Theme,
  Toolbar,
  Typography,
} from '@mui/material';
import { selectIsAdminUser } from '../../../store/selectors';
import { useAppDispatch, useAppSelector } from '../../../store';
import { newUser, setFilteredUsers } from '../../../store/actions/user-actions';
import { ToolbarContent } from './UsersTableToolbar.styles';

export const UsersTableToolbar = () => {
  const [search, setSearch] = useState('');
  const isAdmin = useAppSelector(selectIsAdminUser);
  const dispatch = useAppDispatch();

  const toolbarSx: SxProps<Theme> = {
    pl: { sm: 2 },
    pr: { xs: 2, sm: 2 },
    display: 'block',
    pt: 1,
  };

  const handleNewUser = () => {
    dispatch(newUser());
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearch(value);
  };

  useEffect(() => {
    dispatch(setFilteredUsers(search));
  }, [dispatch, search]);

  return (
    <Toolbar sx={toolbarSx} data-testid="users-table-toolbar">
      <Typography variant="h6" component="div" mb={2} display="block">
        Usuários
      </Typography>

      <ToolbarContent>
        <TextField
          size="small"
          fullWidth
          label="Pesquisa usuário"
          name="search"
          value={search}
          onChange={handleSearchChange}
        />

        {isAdmin && (
          <Button
            data-testid="button-new-user"
            variant="outlined"
            onClick={handleNewUser}
            sx={{ height: 40, minWidth: 144 }}
          >
            Novo usuário
          </Button>
        )}
      </ToolbarContent>
    </Toolbar>
  );
};
