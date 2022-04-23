import React from "react";
import useInput from "../../../hooks/useInput.hooks";
import { TextField } from "@mui/material";
import { FormControlInput, Wrapper } from "./input.styles";
export default function FormInputControl(props) {
  return (
    <Wrapper maxWidth={props.maxWidth}>
      <FormControlInput>
        <TextField
          value={props.value}
          onChange={props.setValue}
          label={props.myLabel}
          type={props.myType}
          variant={props.myVariant}
          multiline={props.myMultiline}
          rows={props.myRows}
          defaultValue={props.myDefaultValue}
          InputProps={props.myInputProps}
          error={props.myError}
          helperText={props.myHelperText}
          margin="normal"
          name={props.myName}
          onBlur={props.myOnBlur}
          fullWidth
          required
        ></TextField>
      </FormControlInput>
    </Wrapper>
  );
}
