import React from 'react';
import { FormControl, SelectProps as MuiSelectProps } from '@mui/material';

import { Label, MenuItem } from '../../shared';
import { CustomSelect } from './Select.styles';

interface Option {
  value: string | number;
  label: string;
}
interface SelectProps extends MuiSelectProps {
  items: Option[];
}

export const Select = ({
  id = 'custom-select',
  labelId = 'custom-select-label',
  items,
  value,
  label,
  onChange,
  ...otherProps
}: SelectProps) => {
  return (
    <FormControl fullWidth>
      <Label>{label}</Label>
      <CustomSelect
        labelId={labelId}
        id={id}
        value={value}
        onChange={onChange}
        {...otherProps}
      >
        {items.map((item) => (
          <MenuItem key={`item-${item.value}-${item.label}`} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </CustomSelect>
    </FormControl>
  );
};
