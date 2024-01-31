import React from 'react';
import { Grid, Paper } from '@mui/material';
import { Button, Input } from '../../form';
import { FormContainer } from './LoginForm.styles';

export const LoginForm = () => {
  return (
    <Paper>
      <FormContainer>
        <form>
          <Grid container mb={2} spacing={2}>
            <Grid item xs={12} sm={2}>
              <Input
                label="Usuario"
                name="user"
                // value={state?.id ? state.id : ''}
                // onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
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
            <Grid item xs={6} md={2}>
              <Button
                variant="contained"
                fullWidth
                // onClick={handleSaveButtonClick}
                // disabled={isSubmitting}
              >
                Login
              </Button>
            </Grid>
            {/* <Grid item xs={6} md={2}>
              <Button
                fullWidth
                onClick={handleCancelButtonClick}
                disabled={isSubmitting}
              >
                Cancelar
              </Button>
            </Grid> */}
          </Grid>
        </form>
      </FormContainer>
    </Paper>
  );
};
