import React, { useState } from 'react';
import { Grid } from '@mui/material';

import { Button, Input } from '../../form';
import { FormContainer, FormPaper } from './LoginForm.styles';

export const LoginForm = () => {
  const [state, setState] = useState({ user: '', password: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLoginButtonClick = () => {
    console.log({ state });
  };

  return (
    <FormPaper>
      <FormContainer>
        <form onSubmit={(e) => alert('Test')}>
          <Grid container mb={2} spacing={2}>
            <Grid item xs={12}>
              <Input
                label="Usuário"
                name="user"
                value={state.user}
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
                // disabled={isSubmitting}
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
