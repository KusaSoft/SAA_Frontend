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
import {WrapperLayout, WrapperPage} from '../emotion/GlobalComponents';
import {BREAD_CRUB_PATHS} from '../services/Constant';

function Users() {
  return (
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title="Usuarios"
          breadcrumbs={BREAD_CRUB_PATHS.USERS}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: 'navBar.main',
              '&:hover': {
                backgroundColor: 'hover.main',
                color: 'hover.contrastText',
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
        </BasicBreadcrumbs>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '0.5rem',
            padding: '0.5rem',
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Apellido</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Rol</TableCell>
                <TableCell>Habilitado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Juan</TableCell>
                <TableCell>Perez</TableCell>
                <TableCell>juan@gmail.com</TableCell>
                <TableCell>Operador</TableCell>
                <TableCell>
                  <input type="checkbox" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Juan</TableCell>
                <TableCell>Perez</TableCell>
                <TableCell>corina@gmail.com</TableCell>
                <TableCell>Docente</TableCell>
                <TableCell>
                  <input type="checkbox" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Juan</TableCell>
                <TableCell>Perez</TableCell>
                <TableCell>leticia@gmail.com</TableCell>
                <TableCell>Docente</TableCell>
                <TableCell>
                  <input type="checkbox" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Juan</TableCell>
                <TableCell>Perez</TableCell>
                <TableCell>alfredo@gmail.com</TableCell>
                <TableCell>Administrador</TableCell>
                <TableCell>
                  <input type="checkbox" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </WrapperPage>
    </WrapperLayout>
  );
}
export default Users;
