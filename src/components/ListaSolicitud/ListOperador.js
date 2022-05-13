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
    date_registration,
    date_reservation,
    handleChangeMotive,
  ] = useFilter({requestType: props.requestType});

  if (list.length !== 0) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
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
            marginTop: '20px',
            backgroundColor: 'white',
            flexDirection: 'column',
            padding: '20px',
          }}
        >
          <Typography variant="h6">Motivo</Typography>
          <FormControlLabel
            label="Todos"
            control={
              <Checkbox
              // checked={checked[0] && checked[1]}
              // indeterminate={checked[0] !== checked[1]}
              // onChange={handleChange1}
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
                  control={
                    <Checkbox
                      checked={checked.value}
                      onChange={handleChangeMotive}
                    />
                  }
                />
              );
            })}
            {/* <FormControlLabel
              label="Examen"
              control={
                <Checkbox
                // checked={checked[0]}
                // onChange={handleChange2}
                />
              }
            />
            <FormControlLabel
              label="Capacitacion"
              control={
                <Checkbox
                // checked={checked[1]}
                // onChange={handleChange3}
                />
              }
            /> */}
          </Box>
          <Divider />
          <Typography variant="h6">Fecha de envio</Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
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
          <Typography variant="h6">Fecha para la reserva</Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
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
        </Box>
      </div>
    );
  } else {
    return <div>No tiene ninguna solicitud pendiente</div>;
  }
};
export default ListOperador;
