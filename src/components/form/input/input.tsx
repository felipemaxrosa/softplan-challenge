import { FC } from 'react';
import TextField from '@mui/material/TextField';
import { FormControl, TextFieldProps } from '@mui/material';

import { Label } from '../shared';

export const Input: FC<TextFieldProps> = ({
  label,
  size = 'small',
  fullWidth = true,
  ...props
}) => {
  return (
    <FormControl fullWidth>
      <Label>{label}</Label>
      <TextField size={size} fullWidth={fullWidth} {...props} />
    </FormControl>
  );
};
