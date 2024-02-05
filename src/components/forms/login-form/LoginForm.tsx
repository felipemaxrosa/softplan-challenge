import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Input } from '../../form';
import { ROUTES } from '../../../models/enums';
import { userService } from '../../../services';
import { useAppDispatch } from '../../../store';
import { FormContainer, FormPaper } from './LoginForm.styles';
import { setActiveUser } from '../../../store/actions/user-actions';
import { setAlertModal } from '../../../store/actions/modal-actions';

export const LoginForm = () => {
  const [state, setState] = useState({ name: '', password: '' });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLoginButtonClick = () => {
    const user = userService.validateCredentials(state);

    if (!user) {
      dispatch(
        setAlertModal({ open: true, message: 'Usuário não encontrado' })
      );
    } else {
      dispatch(setActiveUser(user));
      navigate(ROUTES.HOME);
    }
  };

  const isValidatedData = () => {
    return Object.values(state).every((value) => value.length > 0);
  };

  return (
    <FormPaper data-testid="login-form">
      <FormContainer>
        <form>
          <Grid container mb={2} spacing={2}>
            <Grid item xs={12}>
              <Input
                label="Usuário"
                name="name"
                value={state.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                label="Senha"
                name="password"
                type="password"
                value={state.password}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} direction="row-reverse">
            <Grid item xs={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleLoginButtonClick}
                disabled={!isValidatedData()}
                data-testid="login-button"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormContainer>
    </FormPaper>
  );
};
