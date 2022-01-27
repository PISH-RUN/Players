import React from 'react';
import TextInput, { TextInputProps } from './textInput';
import { MenuItem, Select, SelectProps, InputLabel, FormHelperText } from '@mui/material';
import { FormBase, FormBaseProps } from './base';
import { useFormContext } from 'react-hook-form';

export type SelectInputOption = { label: string; value: string | number };

export type SelectInputProps = { options?: Array<SelectInputOption> } & Omit<SelectProps, 'margin'> &
  Omit<FormBaseProps, 'render'>;

const SelectInput = (props: SelectInputProps): JSX.Element => {
  const { name, options, margin, label, required, ...rest } = props;
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <FormBase
      {...props}
      error={!!errors[name]}
      render={({ field }) => (
        <>
          <InputLabel>{label}</InputLabel>
          <Select {...field} required={required} error={!!errors[name]} {...rest} label={label}>
            {!!options &&
              options.map((option, index) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </Select>
          <FormHelperText>{errors[name]?.message}</FormHelperText>
        </>
      )}
    />
  );
};

export default SelectInput;
