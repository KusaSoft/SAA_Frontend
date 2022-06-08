import {Add, FormatItalic} from '@mui/icons-material';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Typography,
  Modal,
  TextField,
  Grid,
  Autocomplete,
} from '@mui/material';
import React from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';

import {WrapperLayout, WrapperPage} from '../emotion/GlobalComponents';
import {BREAD_CRUB_PATHS, PATHS} from '../services/Constant';
import useListSubjects from '../hooks/useListSubjects';
import useListUsers from '../hooks/useListUsers';
//import CardUser from '../components/User/cardUser';
import {Link} from 'react-router-dom';
import {useModal} from '../hooks/useModal';
import {useFormik} from 'formik';
import * as Yup from 'yup';
function Subjects() {
  const [listSubjects] = useListSubjects();
  const [listUsers] = useListUsers();
  const [isOpenModal, openModal, closeModal] = useModal(false);
  //console.log(listUsers);
  const formik = useFormik({
    initialValues: {
      nameSubject: '',
      nameTeacher: '',
      numberGroup: '',
    },
    validationSchema: Yup.object({
      nameSubject: Yup.string().required(
        'Se requiere seleccionar una materia'
      ),
      nameTeacher: Yup.string().required(
        'Se requiere seleccionar un docente'
      ),
      numberGroup: Yup.string()
        .min(1, 'Mínimo 1 caracter')
        .max(2, 'Máximo 2 caracteres')
        .required('Se requiere el numero para crear el nuevo grupo'),
    }),
    onSubmit: async () => {
      // const responseRegister = await apiSettings.register({
      //   ...formik.values,
      //   name: `${formik.values.firstName} ${formik.values.lastName}`,
      //   role: formik.values.role.toLowerCase(),
      // });
      // setMessageError(responseRegister.message);
      // responseRegister.successful === true ? openModal() : openModal();
      alert('funciona');
    },
  });
  return (
    <>
      <WrapperLayout>
        <WrapperPage>
          <BasicBreadcrumbs
            title="Grupos"
            breadcrumbs={BREAD_CRUB_PATHS.GROUPS}
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
              onClick={openModal}
            >
              <Add />
              Nuevo Grupo
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
                  <TableCell
                    sx={{fontWeight: 'bold', backgroundColor: '#D2D3E2'}}
                  >
                    Materia
                  </TableCell>
                  <TableCell
                    sx={{fontWeight: 'bold', backgroundColor: '#D2D3E2'}}
                  >
                    Docente
                  </TableCell>
                  <TableCell
                    sx={{fontWeight: 'bold', backgroundColor: '#D2D3E2'}}
                  >
                    Número de grupo
                  </TableCell>
                  {/* <TableCell>Rol</TableCell>
                <TableCell>Habilitado</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {List(listSubjects ? listSubjects : [])}
              </TableBody>
            </Table>
          </Box>
        </WrapperPage>
      </WrapperLayout>
      <Modal
        open={isOpenModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Registro de nuevo grupo
          </Typography>

          <br />
          <form onSubmit={formik.handleSubmit}>
            <Grid item xs={12}>
              <Autocomplete
                //disablePortal
                id="combo-box-demo"
                //
                //onChange={(event, value) => console.log(value)}
                //
                options={listSubjects}
                sx={{width: 350}}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Materia"
                    name="nameSubject"
                    error={Boolean(
                      formik.touched.nameSubject &&
                        formik.errors.nameSubject
                    )}
                    helperText={
                      formik.touched.nameSubject &&
                      formik.errors.nameSubject
                    }
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.nameSubject}
                  />
                )}
              />
              {/*-------------------------------------------------*/}
              <Autocomplete
                //disablePortal
                id="combo-box-demo"
                options={listUsers}
                /*
                getOptionLabel={(user) => `${user?.name}`}
                onChange={(e, value) =>
                  setFieldValue('listUsers', value?.id || '')
                }
                onOpen={handleBlur}
                includeInputInList
                */
                sx={{width: 350, marginTop: '1rem'}}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Docente"
                    name="nameTeacher"
                    error={Boolean(
                      formik.touched.nameTeacher &&
                        formik.errors.nameTeacher
                    )}
                    helperText={
                      formik.touched.nameTeacher &&
                      formik.errors.nameTeacher
                    }
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.nameTeacher}
                  />
                )}
                fullWidth
              />
              {/*-------------------------------------------------*/}
              <TextField
                name="numberGroup"
                placeholder=""
                label="Numero del grupo"
                variant="outlined"
                error={Boolean(
                  formik.touched.numberGroup && formik.errors.numberGroup
                )}
                helperText={
                  formik.touched.numberGroup && formik.errors.numberGroup
                }
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.numberGroup}
                fullWidth
                sx={{marginTop: '1rem'}}
              />
              <Grid item xs={12}>
                <Button
                  sx={{
                    backgroundColor: 'navBar.main',
                    color: 'white',
                    boxShadow: 'none',
                    marginTop: '2rem',
                    '&:hover': {
                      backgroundColor: 'navBar.dark',
                      color: 'white',
                      boxShadow: 'none',
                      border: 'solid 1px',
                    },
                  }}
                  type="submit"
                  fullWidth
                >
                  Registrar
                </Button>
                <Button
                  sx={{
                    backgroundColor: '#D52020',
                    color: 'white',
                    boxShadow: 'none',
                    marginTop: '1rem',
                    '&:hover': {
                      background: '#D52020',
                      color: 'white',
                      boxShadow: 'none',
                      border: 'solid 1px',
                    },
                  }}
                  onClick={async () => {
                    closeModal();
                  }}
                  fullWidth
                >
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </>
  );
}
export default Subjects;

const List = (list) => {
  if (list.length !== 0) {
    return list.map((element) => {
      //console.log('aaaaaaaaaa', element);
      return <CardGroup request={element} />;
    });
  } else {
  }
};
const CardGroup = (props) => {
  return (
    <TableRow>
      <TableCell>{props.request.name_subject}</TableCell>
      <TableCell>{props.request.name_subject}</TableCell>
      <TableCell>{props.request.id}</TableCell>
    </TableRow>
  );
};
