import styled from 'styled-components';
import { Select as MuiSelect } from '@mui/material';

export const CustomSelect = styled(MuiSelect)`
  &.MuiInputBase-root > div {
    padding: 8.5px 14px;
  }
`;
