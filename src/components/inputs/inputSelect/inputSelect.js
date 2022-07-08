import React from 'react';
import {InputLabel, Select, MenuItem, FormHelperText} from '@mui/material';
import {FormControlInput, Wrapper} from './inputSelect.styles';
export default function FormSelectControl(props) {
  return (
    <Wrapper>
      <FormControlInput disabled={props.disabled}>
        <InputLabel>{props.myLabel}</InputLabel>
        <Select
          disabled={props.myDisabled}
          value={props.myValue}
          label={props.myLabel}
          onChange={(e) => {
            props.setValue(e, e.target.value, props.myName);
            props.setError(e.target.value);
          }}
          name={props.myName}
          required
        >
          {props.list.map((e) => {
            return <MenuItem value={e}>{e}</MenuItem>;
          })}
        </Select>
      </FormControlInput>
      {props.children}
    </Wrapper>
  );
}
