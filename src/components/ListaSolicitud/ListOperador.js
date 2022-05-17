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
    dateType: props.orderDate,
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
            defaultValue={props.orderDate}
            name="radio-buttons-group"
            onChange={handleChangeDateByRegister}
          >
            <FormControlLabel
              value={date[0].label}
              control={<Radio />}
              label={date[0].label}
            />
            <FormControlLabel
              value={date[1].label}
              control={<Radio />}
              label={date[1].label}
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
