import React from 'react';
import TextInput, { TextInputProps } from './textInput';

export type PasswordInputProps = {} & Omit<TextInputProps, 'type' | 'align'>;

const defaultRule = (label: string, required?: boolean) =>
  required
    ? {
        required: `${label} خود را وارد نمایید`,
        // minLength: {
        //   value: 8,
        //   message: 'حداقل 8 کاراکتر شامل عدد و حروف انگلیسی',
        // },
      }
    : {};

const PasswordInput = (props: PasswordInputProps): JSX.Element => {
  const { name, label, required, ...rest } = props;

  return (
    <TextInput name={name} label={label} type="password" align="left" rules={defaultRule(label, required)} {...rest} />
  );
};

export default PasswordInput;
