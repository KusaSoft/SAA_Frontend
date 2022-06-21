import React from 'react';
import {Delete, Edit} from '@mui/icons-material';
import {CircularProgress, List, ListItem, Divider} from '@mui/material';
import {STATUS} from '../../services/Constant';
import {Card, CardActions, CardContent, Fab, Stack} from '@mui/material';
import {Link} from 'react-router-dom';
import apiSettings from '../../services/service';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useModal} from '../../hooks/useModal';
import ContentDetail from '../details/ContentDetail';
import {useRequest} from '../../hooks/useRequest.hooks';
import DataTransform from '../../utilities/DataController/DataTransform';
import useAuth from '../../hooks/useAuth';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AssignedCard = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [
    loadingUpd,
    errorUpd,
    messageUpd,
    responseUpd,
    statusUpd,
    handleRequestUpd,
  ] = useRequest({
    methodRequest: apiSettings.getReservationRequestD,
  });
  return (
    <Card
      style={{
        marginTop: '20px',
        color: 'black',
      }}
    >
      <CardContent>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            borderBottom: '1px solid #e0e0e0',
          }}
        >
          {props.request.state === STATUS.DRAFT ? (
            <div>
              <b style={{fontWeight: 'bold'}}>Ultima modificación: </b>
              {props.request.register_date}
            </div>
          ) : (
            <div>
              <b style={{fontWeight: 'bold'}}>Fecha de solicitud: </b>
              {props.request.reservation_date}
            </div>
          )}
        </div>
        <div
          style={{
            padding: '10px',
          }}
        >
          <b style={{fontWeight: 'bold'}}>Materia: </b>
          {props.request.subject}
        </div>
        <div>
          <div
            style={{
              color: 'black',
              padding: '10px',
            }}
          >
            <b style={{fontWeight: 'bold'}}>Motivo: </b>{' '}
            {props.request.request_reason}
          </div>
          <div
            style={{
              color: 'black',
              padding: '10px',
            }}
          >
            <b style={{fontWeight: 'bold', color: 'green'}}>
              Aulas asignadas:{' '}
            </b>{' '}
            <List>
              {props.request.assigned_classrooms &&
                props.request.assigned_classrooms.map((classrom) => (
                  <ListItem sx={{display: 'inline'}}>
                    {classrom.name_classroom}
                  </ListItem>
                ))}
            </List>
          </div>
        </div>
      </CardContent>
      <CardActions
        disableSpacing
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            padding: '14px',
          }}
        >
          {/* {props.request.state === STATUS.SENT && (
            <div>
              <b style={{fontWeight: 'bold'}}>Registrado el: </b>
              {props.request.register_date}
            </div>
          )} */}
        </Box>
        <Stack
          direction="row"
          spacing={1}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Fab
            color="success"
            size="small"
            sx={{
              '&:hover': {
                backgroundColor: 'hover.main',
                color: 'hover.contrastText',
              },
            }}
          >
            <ContentPasteSearchIcon
              onClick={() => {
                openModal();
                handleRequestUpd(props.request.id);
              }}
            />
          </Fab>
          {props.request.state == STATUS.DRAFT ? (
            <Link to={`/user/reservationRequest/${props.request.id}`}>
              <Fab
                color="primary"
                size="small"
                sx={{
                  '&:hover': {
                    backgroundColor: 'hover.main',
                    color: 'hover.contrastText',
                  },
                }}
              >
                <Edit />
              </Fab>
            </Link>
          ) : (
            <></>
          )}
          <Fab
            color="error"
            size="small"
            sx={{
              '&:hover': {
                backgroundColor: 'hover.main',
                color: 'hover.contrastText',
              },
            }}
          >
            <Delete
              onClick={() => {
                handleOpen();
              }}
            />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  ¿Está seguro que desea eliminar esta solicitud?
                </Typography>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button
                  sx={{marginLeft: '8rem'}}
                  onClick={async () => {
                    await apiSettings.deleteReservationRequest(
                      props.request.id
                    );
                    handleClose();
                    recargar();
                    //window.location.reload();
                  }}
                >
                  Eliminar
                </Button>
              </Box>
            </Modal>
          </Fab>
        </Stack>
      </CardActions>
      <Modal open={isOpenModal} onClose={closeModal}>
        {loadingUpd ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <CircularProgress color="inherit" />
          </Box>
        ) : (
          <ContentDetail2 request={responseUpd} />
        )}
      </Modal>
    </Card>
  );
};
export default AssignedCard;

function recargar() {
  window.location.reload();
}

function ContentDetail2(props) {
  const {auth} = useAuth();
  return (
    <Box sx={style}>
      <Typography variant="h4" align="center">
        Solicitud de reserva
      </Typography>
      <Typography variant="body1">
        <b>Registrado el: </b>
        {props.request.register_date}
        <br />
        <b>Realizada en nombre de: </b>
        {props.request.user}
        <br />
        <b>Motivo de la solicitud:</b> {props.request.request_reason}
        <br />
        <b>Materia:</b> {props.request.subject}
        <br />
        <b>Cantidad de estudiantes:</b> {props.request.total_students}
        <br />
        <b>Grupo(s):</b>
        {/* <br /> */}
        <List>
          {props.request.group_list &&
            props.request.group_list.map((group) => (
              <ListItem>
                G{group.group} {group.teacher}
              </ListItem>
            ))}

          {props.request.other_groups &&
            props.request.other_groups.map((group) => (
              <ListItem>
                G{group.group} {group.teacher}
              </ListItem>
            ))}
        </List>
        <b style={{fontWeight: 'bold', color: 'green'}}>
          Aulas asignadas:{' '}
        </b>{' '}
        <List>
          {props.request.assigned_classrooms &&
            props.request.assigned_classrooms.map((classrom) => (
              <ListItem sx={{display: 'inline'}}>
                {/* no muestra nada porque va a busar a la DB y ahi aun no estan las aulas */}
                {classrom.name_classroom}
              </ListItem>
            ))}
        </List>
        {/* <br /> */}
        <Divider
          style={{
            color: 'white',
          }}
        />
        {/* <br /> */}
        <b>Fecha para la reserva: </b>
        {props.request.reservation_date} <br />
        <br />
        <b>
          Cantidad de periodos:{' '}
          {DataTransform.getQuantityPeriod(
            props.request.horario_ini,
            props.request.horario_end
          )}
        </b>
        <br />
        <b>Hora Inicio:</b> {props.request.horario_ini}
        <br />
        <b>Hora Fin:</b> {props.request.horario_end}
      </Typography>
    </Box>
  );
}