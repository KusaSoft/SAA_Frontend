import React from "react";
import useInput from "../../../hooks/useInput.hooks";
import { TextField } from "@mui/material";
import { FormControlInput, Wrapper } from "./input.styles";
export default function FormInputControl(props) {
  const [value, setValue] = useInput(props.typeValue);

  return (
    <Wrapper>
      <FormControlInput>
        <TextField
          onChange={setValue}
          label={props.myLabel}
          type={props.myType}
          variant={props.myVariant}
          multiline={props.myMultiline}
          rows={props.myRows}
          defaultValue={props.myDefaultValue}
          InputProps={props.myInputProps}
        ></TextField>
      </FormControlInput>
    </Wrapper>
  );
}
