import React from 'react';
import TextInput, { TextInputProps } from './textInput';
import { MenuItem } from '@mui/material';

export type SelectInputOption = { label: string; value: string | number };

export type SelectInputProps = { options?: Array<SelectInputOption> } & TextInputProps;

const SelectInput = (props: SelectInputProps): JSX.Element => {
  const { options, ...rest } = props;

  return (
    <TextInput select {...rest}>
      {!!options &&
        options.map((option, index) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </TextInput>
  );
};

export default SelectInput;
