import React from 'react';
import {
  Box,
  Button,
  Grid,
  SxProps,
  Theme,
  Toolbar,
  Typography,
} from '@mui/material';
import { useAppSelector } from '../../../store';
import { selectIsAdminUser } from '../../../store/selectors';

export const UsersTableToolbar = () => {
  const isAdmin = useAppSelector(selectIsAdminUser);
  const toolbarSx: SxProps<Theme> = {
    pl: { sm: 2 },
    pr: { xs: 1, sm: 1 },
  };

  const handleNewUser = () => {};

  return (
    <Toolbar sx={toolbarSx}>
      <Grid container justifyContent="space-between">
        <Typography variant="h6" component="div">
          Usuarios
        </Typography>

        <Box display="flex" gap={1}>
          {isAdmin && (
            <Button variant="outlined" onClick={handleNewUser}>
              Novo usuario
            </Button>
          )}
        </Box>
      </Grid>
    </Toolbar>
  );
};
