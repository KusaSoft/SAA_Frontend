import {
  Checkbox,
  CircularProgress,
  Dialog,
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
import {ORDER_DATE} from '../../services/Constant';
import {
  ButtonFilter,
  FilterContainer,
  ListFilterContainer,
  ListFilterWrapper,
} from '../../emotion/GlobalComponents';
import {useModal} from '../../hooks/useModal';
import {Filter, FilterList} from '@mui/icons-material';
const ListOperador = (props) => {
  const [
    list,
    filteredList,
    checkedList,
    date,
    handleChangeMotive,
    handleChangeDateByRegister,
    handleChangeDateByReservation,
    loading,
  ] = useFilter({
    requestType: props.requestType,
    dateType: props.orderDate,
  });
  const [isOpenFilter, openFilter, closeFilter] = useModal();

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : list.length !== 0 ? (
        <ListFilterWrapper>
          <ButtonFilter
            variant="contained"
            onClick={openFilter}
            startIcon={<FilterList />}
          >
            Filtrar
          </ButtonFilter>
          <ListFilterContainer>
            {filteredList.map((element) => {
              return (
                <div key={element[0]}>
                  <CardOperador request={element} />
                </div>
              );
            })}
          </ListFilterContainer>
          <FilterContainer>
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
          </FilterContainer>
        </ListFilterWrapper>
      ) : (
        <div>
          {props.orderDate === ORDER_DATE.LEJANOS
            ? 'No existen solicitudes'
            : 'No existen solicitudes con urgencia'}
        </div>
      )}
      <Dialog open={isOpenFilter} onClose={closeFilter}>
        <div
          style={{
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
        </div>
      </Dialog>
    </>
  );
};
export default ListOperador;
