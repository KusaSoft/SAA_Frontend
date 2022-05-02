import React from "react";
import { InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import { FormControlInput, Wrapper } from "./inputSelect.styles";
export default function FormSelectControl(props) {
  return (
    <Wrapper>
      <FormControlInput disabled={props.disabled}>
        <InputLabel>{props.myLabel}</InputLabel>
        <Select
          value={props.myValue}
          label={props.myLabel}
          onChange={props.setValue}
          required
        >
          {props.list.map((e) => {
            return <MenuItem value={e}>{e}</MenuItem>;
          })}
        </Select>
        <FormHelperText>{props.helperText}</FormHelperText>
      </FormControlInput>
    </Wrapper>
  );
}
