import {
  Checkbox,
  Divider,
  Fab,
  FormControlLabel,
  Icon,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import {Box} from '@mui/system';
import React from 'react';
import {Link} from 'react-router-dom';
import CardOperador from './CardOperador';
import useFilter from '../../hooks/useFilter';
const ListOperador = (props) => {
  const [
    list,
    filteredList,
    checkedList,
    date,
    handleChangeMotive,
    handleChangeDateByRegister,
    handleChangeDateByReservation,
  ] = useFilter({
    requestType: props.requestType,
    dateType: 'register_date',
  });

  if (list.length !== 0) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          color: 'black',
        }}
      >
        <div style={{width: '75%'}}>
          {filteredList.map((element) => {
            return (
              <div key={element[0]}>
                <CardOperador request={element} />
              </div>
            );
          })}
        </div>
        <Box
          style={{
            display: 'flex',
            width: '20%',
            height: '400px',
            marginTop: '20px',
            backgroundColor: 'white',
            flexDirection: 'column',
            padding: '20px',
          }}
        >
          <Typography variant="h6">Motivo</Typography>
          <FormControlLabel
            label="Todos"
            name="Todos"
            control={
              <Checkbox
                checked={checkedList.every(
                  (element) => element.checked === true
                )}
                // indeterminate={checked[0] !== checked[1]}
                onChange={handleChangeMotive}
              />
            }
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              ml: 3,
            }}
          >
            {checkedList.map((checked) => {
              return (
                <FormControlLabel
                  label={checked.label}
                  name={checked.label}
                  control={
                    <Checkbox
                      checked={checked.checked}
                      onChange={handleChangeMotive}
                    />
                  }
                />
              );
            })}
          </Box>
          <Divider />
          <Typography variant="h6">{props.dataTypeS}</Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Nuevos"
            name="radio-buttons-group"
            onChange={handleChangeDateByRegister}
          >
            <FormControlLabel
              value="Antiguos"
              control={<Radio />}
              label="Antiguos"
            />
            <FormControlLabel
              value="Nuevos"
              control={<Radio />}
              label="Nuevos"
            />
          </RadioGroup>
          <Divider />
        </Box>
      </div>
    );
  } else {
    return <div>No tiene ninguna solicitud pendiente</div>;
  }
};
export default ListOperador;
