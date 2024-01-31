import React from 'react';
import { Grid } from '@mui/material';

import { Button, Input } from '../../form';
import { FormContainer, FormPaper } from './LoginForm.styles';

export const LoginForm = () => {
  return (
    <FormPaper>
      <FormContainer>
        <form>
          <Grid container mb={2} spacing={2}>
            <Grid item xs={12}>
              <Input
                label="Usuário"
                name="user"
                // value={state?.id ? state.id : ''}
                // onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                label="Senha"
                name="password"
                type="password"
                // value={state?.id ? state.id : ''}
                // onChange={handleInputChange}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} direction="row-reverse">
            <Grid item xs={6}>
              <Button
                variant="contained"
                fullWidth
                // onClick={handleSaveButtonClick}
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
