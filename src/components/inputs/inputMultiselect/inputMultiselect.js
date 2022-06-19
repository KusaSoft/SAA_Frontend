import React from 'react';
import {
  Box,
  OutlinedInput,
  InputLabel,
  Select,
  Chip,
  MenuItem,
} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import {FormControlInput, Wrapper} from './inputMultiselect.styles';

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
  // console.log(props, "props");
  return (
    <Wrapper>
      <FormControlInput disabled={props.disabled}>
        <InputLabel>{props.myLabel}</InputLabel>
        <Select
          multiple
          disabled={props.myDisabled}
          required
          value={props.value}
          name={props.myName}
          onChange={(e) => {
            props.setValue(e, e.target.value, props.myName);
          }}
          input={
            <OutlinedInput
              id="select-multiple-chip"
              label={`${props.myLabel}`}
            />
          }
          renderValue={(selected) => (
            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
              {selected.map((value) => {
                return props.labelActive ? (
                  <Chip key={value} label={value} />
                ) : (
                  <Chip
                    key={value}
                    label={value}
                    onMouseDown={(event) => {
                      event.stopPropagation();
                    }}
                    onDelete={(e) => {
                      e.stopPropagation();
                      props.deleteT(e, value);
                    }}
                  />
                );
              })}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {props.stringJoin
            ? props.list.map((e) => (
                <MenuItem
                  key={e.id}
                  value={`G${e.group} ${e.name}`}
                  style={getStyles(e, props.value, theme)}
                >
                  {`G${e.group} ${e.name}`}
                </MenuItem>
              ))
            : props.list.map((e) => (
                <MenuItem
                  key={e.id}
                  value={`G${e.group}`}
                  style={getStyles(e, props.value, theme)}
                >
                  {`G${e.group}`}
                </MenuItem>
              ))}
        </Select>
      </FormControlInput>
      {props.children}
    </Wrapper>
  );
}
