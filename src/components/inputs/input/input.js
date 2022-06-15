import React from 'react';
import useInput from '../../../hooks/useInput.hooks';
import {TextField} from '@mui/material';
import {FormControlInput, Wrapper} from './input.styles';
export default function FormInputControl(props) {
  return (
    <Wrapper maxWidth={props.maxWidth}>
      <FormControlInput>
        <TextField
          hidden={props.hidden}
          value={props.value}
          onChange={(e) => {
            props.setValue(e, e.target.value, props.myName);
          }}
          label={props.myLabel}
          type={props.myType}
          variant={props.myVariant}
          multiline={props.myMultiline}
          rows={props.myRows}
          defaultValue={props.myDefaultValue}
          InputProps={props.myInputProps}
          error={props.myError}
          helperText={props.myHelperText}
          name={props.myName}
          onBlur={props.myOnBlur}
          fullWidth
          disabled={props.myDisabled}
          onInput={(event) => {
            if (props.myName === 'totalStudents') {
              if (event.target.value.length > props.myMaxLength) {
                event.target.value = event.target.value.substring(
                  0,
                  props.myMaxLength
                );
              }
              if (event.target.value === '0') {
                event.target.value = '';
              }
              if (event.target.value > 500) {
                event.target.value = 500;
              }
              if (event.target.value.charAt(0) === '0') {
                event.target.value = event.target.value.substring(1);
              }

              if (event.target.value.match(/^[0-9]+$/) === null) {
                event.target.value = event.target.value.substring(
                  0,
                  event.target.value.length - 1
                );
              }
            }
          }}
        ></TextField>
      </FormControlInput>
      {props.children}
    </Wrapper>
  );
}
