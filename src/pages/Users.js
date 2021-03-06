import {Add} from '@mui/icons-material';
import {
  Button,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
} from '@mui/material';
import React from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';

import {WrapperLayout, WrapperPage} from '../emotion/GlobalComponents';
import {BREAD_CRUB_PATHS, PATHS} from '../services/Constant';
import useListUsers from '../hooks/useListUsers';
import CardUser from '../components/User/cardUser';
import {Link} from 'react-router-dom';

function Users() {
  const [listUsers] = useListUsers();
  return (
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title="Usuarios"
          breadcrumbs={BREAD_CRUB_PATHS.USERS}
        >
          <Link to={PATHS.NEW_USER} style={{textDecoration: 'none'}}>
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
                // background: '#172B4D',
                // color: '#FAFBFC',
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
            borderRadius: '0.5rem',
            padding: '0.5rem',
            boxShadow: 1,
          }}
        >
          <TableContainer style={{overflowX: 'auto'}}>
            <Table style={{minWidth: '800px'}}>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{fontWeight: 'bold', backgroundColor: '#D2D3E2'}}
                  >
                    Apellidos y Nombres
                  </TableCell>
                  {/* <TableCell>Apellido</TableCell> */}
                  <TableCell
                    sx={{fontWeight: 'bold', backgroundColor: '#D2D3E2'}}
                  >
                    Email
                  </TableCell>
                  <TableCell
                    sx={{fontWeight: 'bold', backgroundColor: '#D2D3E2'}}
                  >
                    Rol
                  </TableCell>
                  <TableCell
                    sx={{fontWeight: 'bold', backgroundColor: '#D2D3E2'}}
                  >
                    Habilitado
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{List(listUsers ? listUsers : [])}</TableBody>
            </Table>
          </TableContainer>
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
