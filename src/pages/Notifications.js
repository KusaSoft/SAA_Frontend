import React, {useState} from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import {WrapperLayout, WrapperPage} from '../emotion/GlobalComponents';
import {BREAD_CRUB_PATHS} from '../services/Constant';
import {
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
} from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';
import useAuth from '../hooks/useAuth';
import {Navigate, Link, useNavigate} from 'react-router-dom';
import {fontWeight, minWidth, style} from '@mui/system';
import useListMyNotifications from '../hooks/useListMyNotifications';
import useListAllNotifications from '../hooks/useListAllNotifications';
import {MyTable} from '../emotion/GlobalComponents';
export default function Notifications() {
  const {auth} = useAuth();
  const [listMyNotications] = useListMyNotifications(auth.id);
  const [listAllNotifications] = useListAllNotifications();

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
                    Fecha de emisión
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {auth.roles[0] === 'operador'
                  ? ListO(listAllNotifications ? listAllNotifications : [])
                  : List(listMyNotications ? listMyNotications : [])}
              </TableBody>
            </Table>
          </TableContainer>
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
      sx={{cursor: 'pointer'}}
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
      <TableCell>{props.request.detail}</TableCell>
      <TableCell>{props.request.notification_date}</TableCell>
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
      <TableCell>{props.request.notification_date}</TableCell>
    </TableRow>
    // </Link>
  );
};
