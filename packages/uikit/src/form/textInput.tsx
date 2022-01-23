import React from 'react';
import { FormControl, Typography, FormLabel } from '@mui/material';
import { TextFieldProps as TextFieldComponentProps } from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '../components/textfiled';

export type TextInputProps = {
  name: string;
  label: string;
  rules?: object;
  required?: boolean;
  align?: 'left' | 'right';
  margin?: 'dense' | 'normal' | 'none';
  type?: 'text' | 'password';
  disableLabel?: boolean;
} & TextFieldComponentProps;

const defaultRule = (label: string, required?: boolean) =>
  required
    ? {
        required: `${label} خود را وارد نمایید`,
      }
    : {};

const TextInput = (props: TextInputProps): JSX.Element => {
  const {
    formState: { errors },
  } = useFormContext();
  const { name, label, rules, required, margin, align, type, disableLabel = false, ...textInputProps } = props;

  return (
    <FormControl margin={margin || 'dense'} fullWidth required>
      {!disableLabel && <FormLabel sx={{ mb: 0.5, color: 'text.primary' }}>{props.label}</FormLabel>}
      <Controller
        rules={rules || defaultRule(label, required)}
        render={({ field }) => (
          <TextField
            {...field}
            autoFocus
            type={type || 'text'}
            align={align}
            required={required}
            label={disableLabel ? label : undefined}
            placeholder={!disableLabel ? label : undefined}
            error={!!errors[name]}
            helperText={errors[name]?.message}
            {...textInputProps}
          />
        )}
        name={name}
      />
    </FormControl>
  );
};

export default TextInput;
