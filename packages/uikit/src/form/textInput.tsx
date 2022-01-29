import React from 'react';
import { TextFieldProps as TextFieldComponentProps } from '@mui/material/TextField';
import { useFormContext } from 'react-hook-form';
import TextField from '../components/textfiled';
import { FormBase, FormBaseProps } from './base';

export type TextInputProps = {
  align?: 'left' | 'right';
  type?: 'text' | 'password';
} & Omit<FormBaseProps, 'render'> &
  TextFieldComponentProps;

const TextInput = (props: TextInputProps): JSX.Element => {
  const {
    formState: { errors },
  } = useFormContext();
  const { name, label, required, align, type, margin, disableLabel = false, ...textInputProps } = props;

  return (
    <FormBase
      {...props}
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
    />
  );
};

export default TextInput;
