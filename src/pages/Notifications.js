import React, {useState} from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import {WrapperLayout, WrapperPage} from '../emotion/GlobalComponents';
import {BREAD_CRUB_PATHS} from '../services/Constant';
import {
  ListItem,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Select,
} from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';
import useAuth from '../hooks/useAuth';
import {Navigate, Link, useNavigate} from 'react-router-dom';
import {style} from '@mui/system';
import useListMyNotifications from '../hooks/useListMyNotifications';

export default function Notifications() {
  const {auth} = useAuth();
  const [listMyNotications] = useListMyNotifications(auth.id);
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
          <Table size={auth.roles[0] === 'operador' ? 'small' : 'medium'}>
            <TableHead>
              <TableRow>
                <TableCell sx={{fontWeight: 'bold', fontSize: '24px'}}>
                  Motivo
                </TableCell>

                <TableCell sx={{fontWeight: 'bold', fontSize: '24px'}}>
                  {auth.roles[0] === 'operador' ? 'Materia' : 'Detalle'}
                </TableCell>
                {auth.roles[0] === 'operador' ? (
                  <TableCell sx={{fontWeight: 'bold', fontSize: '24px'}}>
                    Docente
                  </TableCell>
                ) : null}
                <TableCell sx={{fontWeight: 'bold', fontSize: '24px'}}>
                  Fecha de emisión o reserva?
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {auth.roles[0] === 'operador'
                ? ListO(mockOperatorNotify ? mockOperatorNotify : [])
                : List(listMyNotications ? listMyNotications : [])}
            </TableBody>
          </Table>
        </Box>
      </WrapperPage>
    </WrapperLayout>
  );
}

const List = (list) => {
  if (list.length !== 0) {
    return list.map((element) => {
      //console.log('aaaaaaaaaa', element);
      return <CardNotify request={element} />;
    });
  } else {
    return <div>No tiene ninguna notificación</div>;
  }
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
  let navigate = useNavigate();
  const [click, setClick] = useState(0);
  return (
    <TableRow
      onClick={() => {
        setClick(1);
        {
          navigate(
            props.request.state === 'rejected'
              ? '../rejected'
              : '../assigned'
          );
        }
      }}
      hover
    >
      <TableCell>
        {props.request.state === 'rejected'
          ? 'Solicitud rechazada'
          : 'Solicitud asignada'}
      </TableCell>
      <TableCell>
        {props.request.detail}
        {/* {props.request.state === 'rejected'
          ? props.request.rejected_reason
          : props.request.assigned_classrooms &&
            props.request.assigned_classrooms.map((classrom) => (
              <ListItem sx={{display: 'inline'}}>
                {classrom.name_classroom}
              </ListItem>
            ))} */}
      </TableCell>
      <TableCell>{props.request.reservation_date}</TableCell>
    </TableRow>
    // </Link>
  );
};

const CardNotifyOperator = (props) => {
  return (
    <TableRow
      //style={{background: click === 0 ? '#F0F0F0' : 'blue'}}
      onClick={() => {}}
      hover
      selected
    >
      <TableCell>
        {props.request.state === 'rejected'
          ? 'Solicitud rechazada'
          : 'Solicitud asignada'}
      </TableCell>
      <TableCell>{props.request.subject}</TableCell>
      <TableCell>{props.request.userName}</TableCell>
      <TableCell sx={{fontWeight: 'bold'}}>
        {props.request.fechaEmision}
      </TableCell>
    </TableRow>
    // </Link>
  );
};

function redireccionar() {
  return <Navigate replace to="../" />;
}
// const mockTeacherNotify = [
//   {
//     id: 1, //id notificación
//     user_id: 1,
//     reservation_request_id: 3,
//     state: 'rejected',
//     reservation_date: 'date…',
//     rejected_reason:
//       'No se pudo aceptar tu solicitud… No se pudo aceptar tu solicitud…No se pudo aceptar tu solicitud…No se pudo aceptar tu solicitud…',
//     fechaEmision: '30/06/2022',
//   },
//   {
//     id: 1, //id notificación
//     user_id: 1,
//     reservation_request_id: 3,
//     reservation_date: 'date…',
//     state: 'assigned',
//     fechaEmision: '20/06/2022',
//     assigned_classrooms: [
//       {
//         id: 2,
//         name_classroom: '690A',
//         edifice: 'edificio nuevo',
//         floor: 'primera planta',
//         amount: 120,
//       },
//       {
//         id: 3,
//         name_classroom: '691A',
//         edifice: 'edificio nuevo',
//         floor: 'primera planta',
//         amount: 90,
//       },
//     ],
//   },
//   {
//     id: 3, //id notificación
//     user_id: 1,
//     reservation_request_id: 3,
//     state: 'rejected',
//     reservation_date: 'date…',
//     rejected_reason: 'No se pudo aceptar tu solicitud…',
//     fechaEmision: '30/06/2022',
//   },
// ];
const mockOperatorNotify = [
  {
    id: 1, //id notificación
    user_id: 1,
    reservation_request_id: 3,
    state: 'rejected',
    reservation_date: 'date…',
    rejected_reason: 'No se pudo aceptar tu solicitud…',
    subject: 'intro a la progra',
    userName: 'Corina Flores',
    fechaEmision: '10/06/2022',
  },
  {
    id: 1, //id notificación
    user_id: 1,
    reservation_request_id: 3,
    reservation_date: 'date…',
    state: 'assigned',
    subject: 'Elementos de la programacion',
    userName: 'Leticia Blanco',
    fechaEmision: '12/06/22',
    assigned_classrooms: [
      {
        id: 2,
        name_classroom: '690A',
        edifice: 'edificio nuevo',
        floor: 'primera planta',
        amount: 120,
      },
      {
        id: 3,
        name_classroom: '691A',
        edifice: 'edificio nuevo',
        floor: 'primera planta',
        amount: 90,
      },
      {
        id: 4,
        name_classroom: '692A',
        edifice: 'edificio nuevo',
        floor: 'primera planta',
        amount: 120,
      },
    ],
  },
  {
    id: 3, //id notificación
    user_id: 4,
    reservation_request_id: 5,
    reservation_date: 'date…',
    state: 'assigned',
    subject: 'Elementos de la programacion',
    userName: 'Leticia Blanco',
    fechaEmision: '12/06/22',
    assigned_classrooms: [
      {
        id: 2,
        name_classroom: '690',
        edifice: 'edificio nuevo',
        floor: 'primera planta',
        amount: 120,
      },
      {
        id: 3,
        name_classroom: '690B',
        edifice: 'edificio nuevo',
        floor: 'primera planta',
        amount: 90,
      },
      {
        id: 4,
        name_classroom: '690C',
        edifice: 'edificio nuevo',
        floor: 'primera planta',
        amount: 120,
      },
    ],
  },
];
