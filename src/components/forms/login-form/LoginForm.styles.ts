import { Container, Paper } from '@mui/material';
import styled from 'styled-components';

export const FormContainer = styled(Container)`
  &.MuiContainer-root {
    padding: 32px 24px;
  }
`;

export const FormPaper = styled(Paper)`
  &.MuiPaper-root {
    max-width: 360px;
    margin: auto;
    margin-top: 240px;
  }
`;
