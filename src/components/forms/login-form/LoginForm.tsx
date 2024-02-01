import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Button, Input } from '../../form';
import { ROUTES } from '../../../models/enums';
import { userService } from '../../../services';
import { useAppDispatch } from '../../../store';
import { FormContainer, FormPaper } from './LoginForm.styles';
import { setActiveUser } from '../../../store/actions/user-actions';

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
    const user = userService.validateCredentials({
      name: state.name,
      password: state.password,
    });

    if (!user) {
      alert('User NOT FOUND');
    } else {
      dispatch(setActiveUser(user));
      navigate(ROUTES.HOME);
    }
  };

  return (
    <FormPaper>
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
