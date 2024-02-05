import styled from 'styled-components';
import { MenuItem as MuiMenuItem } from '@mui/material';

export const PageContainer = styled.div`
  height: 100%;
`;

export const Label = styled.label`
  margin-bottom: 8px;
`;

export const MenuItem = styled(MuiMenuItem)`
  &.MuiMenuItem-root {
    padding: 8px;
  }
`;
