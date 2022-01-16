import React from 'react';
import { default as TextFieldComponent, TextFieldProps as TextFieldComponentProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export type TextFieldProps = { align?: 'right' | 'left' } & TextFieldComponentProps;

const TextField = styled(TextFieldComponent)<TextFieldProps>(({ theme, align }) => ({
  '& input':
    align === 'left'
      ? {
          textAlign: 'right',
          direction: 'rtl',
        }
      : {},
}));

export default TextField;
