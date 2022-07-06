import React, {useState} from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import {
  MyDetailContainer,
  WrapperLayout,
  WrapperPage,
} from '../emotion/GlobalComponents';
import {BREAD_CRUB_PATHS, STATUS} from '../services/Constant';
import {
  List,
  ListItem,
  Button,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Select,
  Typography,
  Divider,
  CircularProgress,
} from '@mui/material';
import Modal from '@mui/material/Modal';
import CachedIcon from '@mui/icons-material/Cached';
import useAuth from '../hooks/useAuth';
import {Navigate, Link, useNavigate} from 'react-router-dom';
import {fontWeight, minWidth, style} from '@mui/system';
import useListMyNotifications from '../hooks/useListMyNotifications';
import useListAllNotifications from '../hooks/useListAllNotifications';
import {MyTable} from '../emotion/GlobalComponents';
import {useModal} from '../hooks/useModal';
import DataTransform from '../utilities/DataController/DataTransform';
import apiSettings from '../services/service';
import {useRequest} from '../hooks/useRequest.hooks';
export default function Notifications() {
  const {auth} = useAuth();
  const [listMyNotications] = useListMyNotifications(auth.id);
  const [listAllNotifications] = useListAllNotifications();
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [id, setID] = useState();
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
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title={
            auth.roles[0] === 'operador'
              ? 'Notificaciones emitidas'
              : 'Notificaciones'
          }
          breadcrumbs={BREAD_CRUB_PATHS.NOTIFICATIONS}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: 'navBar.main',
              '&:hover': {
                backgroundColor: 'navBar.dark',
                color: 'navBar.contrastText',
              },
            }}
            style={{
              fontFamily: 'roboto',
              fontSize: '0.8rem',
              borderRadius: '0.5rem',
              border: 'none',
              boxShadow: 'none',
              // '&:hover': {
              //   background: '#FAFBFC',
              //   color: '#172B4D',
              //   boxShadow: 'none',
              //   border: 'none',
              // },
            }}
            onClick={() => {
              window.location.reload();
            }}
          >
            <CachedIcon />
            Recargar
          </Button>
        </BasicBreadcrumbs>
        <br />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '0.5rem',
            padding: '0.5rem',
            boxShadow: 1,
          }}
        >
          <TableContainer style={{overflowX: 'auto'}}>
            <Table
              style={{minWidth: '800px'}}
              size={auth.roles[0] === 'operador' ? 'small' : 'medium'}
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{fontWeight: 'bold', fontSize: '24px'}}>
                    Estado
                  </TableCell>
                  <TableCell sx={{fontWeight: 'bold', fontSize: '24px'}}>
                    Detalle
                  </TableCell>
                  <TableCell sx={{fontWeight: 'bold', fontSize: '24px'}}>
                    Materia
                  </TableCell>
                  {auth.roles[0] === 'operador' ? (
                    <TableCell sx={{fontWeight: 'bold', fontSize: '24px'}}>
                      Docente
                    </TableCell>
                  ) : null}
                  <TableCell sx={{fontWeight: 'bold', fontSize: '24px'}}>
                    Fecha de emisión
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {auth.roles[0] === 'operador'
                  ? ListO(listAllNotifications ? listAllNotifications : [])
                  : ListD(
                      listMyNotications ? listMyNotications : [],
                      (id) => {
                        handleRequestUpd(id);
                        openModal();
                      }
                    )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
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
      </WrapperPage>
    </WrapperLayout>
  );
}

const ListD = (list, functionP) => {
  return list.length !== 0 ? (
    <>
      {list.map((element) => {
        //return <CardNotify request={element} />;

        return (
          <>
            <TableRow
              sx={{cursor: 'pointer'}}
              onClick={() => {
                functionP(element.id);
              }}
              hover
            >
              <TableCell>
                {element.state === 'rejected'
                  ? 'Solicitud rechazada'
                  : 'Solicitud asignada'}
              </TableCell>
              <TableCell>{element.detail}</TableCell>
              <TableCell>{element.subject}</TableCell>
              <TableCell>{element.notification_date}</TableCell>
            </TableRow>
          </>
        );
      })}
    </>
  ) : (
    <div>No tiene ninguna notificación</div>
  );
};
const ListO = (list) => {
  if (list.length !== 0) {
    return list.map((element) => {
      //console.log('aaaaaaaaaa', element);
      return <CardNotifyOperator request={element} />;
    });
  } else {
    return <div>No tiene ninguna notificación realizada</div>;
  }
};

const CardNotify = (props) => {
  //let navigate = useNavigate();

  return (
    <>
      <TableRow
        sx={{cursor: 'pointer'}}
        onClick={() => {
          // ModalP(props.request.id);
          // {
          //   navigate(
          //     props.request.state === 'rejected'
          //       ? '../rejected'
          //       : '../assigned'
          //   );
          // }
        }}
        hover
      >
        <TableCell>
          {props.request.state === 'rejected'
            ? 'Solicitud rechazada'
            : 'Solicitud asignada'}
        </TableCell>
        <TableCell>{props.request.detail}</TableCell>
        <TableCell>{props.request.subject}</TableCell>
        <TableCell>{props.request.notification_date}</TableCell>
      </TableRow>
    </>
  );
};

// function ModalP(id) {
//   const [isOpenModal, openModal, closeModal] = useModal(true);
//   return (
//     <Modal open={isOpenModal} onClose={closeModal}>
//       <ContentDetail2 request={id} />
//     </Modal>
//   );
// }

const CardNotifyOperator = (props) => {
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
    <>
      <TableRow
        sx={{cursor: 'pointer'}}
        //style={{background: click === 0 ? '#F0F0F0' : 'blue'}}
        onClick={() => {
          handleRequestUpd(props.request.id);
          openModal();
        }}
        hover
      >
        <TableCell>
          {props.request.state === 'rejected'
            ? 'Solicitud rechazada'
            : 'Solicitud asignada'}
        </TableCell>
        <TableCell>{props.request.detail}</TableCell>
        <TableCell>{props.request.subject}</TableCell>
        <TableCell>{props.request.userName}</TableCell>
        <TableCell>{props.request.notification_date}</TableCell>
      </TableRow>
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
    </>
  );
};

function ContentDetail2(props) {
  return (
    <MyDetailContainer>
      <Typography variant="h4" align="center">
        Detalle de notificación
      </Typography>
      <Typography variant="body1">
        <b>Emitido el: </b>
        {props.request.notification_date}
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
        {props.request.state === STATUS.CONFIRMED ||
        props.request.state === STATUS.ASSIGNED ? (
          <>
            <b style={{fontWeight: 'bold'}}>Aulas asignadas: </b>{' '}
            <List>
              {props.request.assigned_classrooms &&
                props.request.assigned_classrooms.map((classrom) => (
                  <ListItem>{classrom.name_classroom}</ListItem>
                ))}
            </List>
          </>
        ) : (
          <>
            <b style={{fontWeight: 'bold'}}>Motivo de Rechazo:</b>{' '}
            {props.request.rejection_reason}
            <div>
              <br />
            </div>
          </>
        )}
        <Divider
          style={{
            color: 'white',
          }}
        />
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
    </MyDetailContainer>
  );
}
