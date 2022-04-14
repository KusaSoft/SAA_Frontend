import React from "react";
import {
  Box,
  OutlinedInput,
  InputLabel,
  Select,
  Chip,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FormControlInput, Wrapper } from "./inputMultiselect.styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(group, groupList, theme) {
  return {
    fontWeight:
      [...groupList].indexOf(group) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function FormMultiselectControl(props) {
  const theme = useTheme();
  return (
    <Wrapper>
      <FormControlInput>
        <InputLabel>{props.myLabel}</InputLabel>
        <Select
          multiple
          value={props.value}
          onChange={props.setValue}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {props.list.map((e) => (
            <MenuItem
              key={e}
              value={e}
              style={getStyles(e, props.value, theme)}
            >
              {e}
            </MenuItem>
          ))}
        </Select>
      </FormControlInput>
    </Wrapper>
  );
}
