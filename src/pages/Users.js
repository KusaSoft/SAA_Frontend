import {Add} from '@mui/icons-material';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
} from '@mui/material';
import React from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import {
  WrapperLayout,
  WrapperPage,
} from '../emotion/GlobalComponents';
import {BREAD_CRUB_PATHS, PATHS} from '../services/Constant';
import useListUsers from '../hooks/useListUsers';
import CardUser from '../components/User/cardUser';
import {Link} from 'react-router-dom';
function Users() {
  const [listUsers] = useListUsers();
  console.log(listUsers);
  return (
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title="Usuarios"
          breadcrumbs={BREAD_CRUB_PATHS.USERS}
        >
          <Link
            to={PATHS.NEW_USER}
            style={{textDecoration: 'none'}}
          >
            <Button
              variant="contained"
              color="primary"
              style={{
                background: '#172B4D',
                color: '#FAFBFC',
                fontFamily: 'roboto',
                fontSize: '0.8rem',
                borderRadius: '0.5rem',
                border: 'none',
                boxShadow: 'none',
                '&:hover': {
                  background: '#FAFBFC',
                  color: '#172B4D',
                  boxShadow: 'none',
                  border: 'none',
                },
              }}
            >
              <Add />
              Nuevo usuario
            </Button>
          </Link>
        </BasicBreadcrumbs>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            background: '#FAFBFC',
            borderRadius: '0.5rem',
            padding: '0.5rem',
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre y Apellido</TableCell>
                {/* <TableCell>Apellido</TableCell> */}
                <TableCell>Email</TableCell>
                <TableCell>Rol</TableCell>
                <TableCell>Habilitado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {List(listUsers ? listUsers : [])}
            </TableBody>
          </Table>
        </Box>
      </WrapperPage>
    </WrapperLayout>
  );
}
export default Users;

const List = (list) => {
  if (list.length !== 0) {
    return list.map((element) => {
      //console.log('aaaaaaaaaa', element);
      return <CardUser request={element} />;
    });
  } else {
  }
};
