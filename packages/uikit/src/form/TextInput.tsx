import React from 'react';
import { FormControl, Typography } from '@mui/material';
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
};

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
  const { name, label, rules, required, margin, align, type } = props;

  return (
    <FormControl margin={margin || 'dense'} fullWidth>
      <Typography variant="body1" mb={1}>
        {props.label}:
      </Typography>
      <Controller
        rules={rules || defaultRule(label, required)}
        render={({ field }) => (
          <TextField
            {...field}
            autoFocus
            type={type || 'text'}
            align={align}
            placeholder={label}
            error={!!errors[name]}
            helperText={errors[name]?.message}
          />
        )}
        name={name}
      />
    </FormControl>
  );
};

export default TextInput;
