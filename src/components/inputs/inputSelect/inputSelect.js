import React from "react";
import { InputLabel, Select, MenuItem } from "@mui/material";
import { FormControlInput, Wrapper } from "./inputSelect.styles";
export default function FormSelectControl(props) {
  return (
    <Wrapper>
      <FormControlInput>
        <InputLabel>{props.myLabel}</InputLabel>
        <Select
          value={props.value}
          label={props.myLabel}
          onChange={props.setValue}
        >
          {props.list.map((e) => {
            return <MenuItem value={e}>{e}</MenuItem>;
          })}
        </Select>
      </FormControlInput>
    </Wrapper>
  );
}
