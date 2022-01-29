import React from 'react';
import { FormControl, FormLabel, FormControlProps } from '@mui/material';
import { Controller, UseControllerReturn } from 'react-hook-form';

export type FormBaseProps = {
  name: string;
  label: string;
  render: (props: UseControllerReturn) => JSX.Element;
  rules?: object;
  disableLabel?: boolean;
} & FormControlProps;

const defaultRule = (label: string, required?: boolean) =>
  required
    ? {
        required: `${label} خود را وارد نمایید`,
      }
    : {};

export const FormBase = ({
  name,
  label,
  render,
  disableLabel = false,
  rules,
  required,
  ...formControlProps
}: FormBaseProps) => (
  <FormControl margin="dense" fullWidth required={required} {...formControlProps}>
    {!disableLabel && <FormLabel sx={{ mb: 0.5, color: 'text.primary' }}>{label}</FormLabel>}
    <Controller rules={rules || defaultRule(label, required)} render={(props) => render(props)} name={name} />
  </FormControl>
);
