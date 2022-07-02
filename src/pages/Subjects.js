import {Add} from '@mui/icons-material';
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
} from '@mui/material';
import React from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';

import {WrapperLayout, WrapperPage} from '../emotion/GlobalComponents';
import {BREAD_CRUB_PATHS, PATHS} from '../services/Constant';
import useListSubjects from '../hooks/useListSubjects';
//import CardUser from '../components/User/cardUser';
import {Link} from 'react-router-dom';
import {useModal} from '../hooks/useModal';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import apiSettings from '../services/service';
function Subjects() {
  const [listSubjects] = useListSubjects();
  const [isOpenModal, openModal, closeModal] = useModal(false);
  //console.log(listUsers);
  const formik = useFormik({
    initialValues: {
      nameSubject: '',
    },
    validationSchema: Yup.object({
      nameSubject: Yup.string()
        .min(6, 'Mínimo 6 caracteres')
        .max(60, 'Nombre demasiado largo, máximo 60 caracteres')
        .required('Se requiere el nombre de la materia')
        .matches(
          /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/,
          'Solo se permiten letras para este campo'
        ),
    }),
    onSubmit: async () => {
      const responseRegister = await apiSettings.registerSubject({
        ...formik.values,
        name_subject: `${formik.values.nameSubject}`,
      });
      // setMessageError(responseRegister.message);
      // responseRegister.successful === true ? openModal() : openModal();
      //alert('funciona');
      window.location.reload();
    },
  });
  return (
    <>
      <WrapperLayout>
        <WrapperPage>
          <BasicBreadcrumbs
            title="Materias"
            breadcrumbs={BREAD_CRUB_PATHS.SUBJECTS}
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
              Nueva Materia
            </Button>
          </BasicBreadcrumbs>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: '0.5rem',
              padding: '0.5rem',
              //marginLeft: '10rem',
              boxShadow: 1,
              maxWidth: '600px',
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{fontWeight: 'bold', backgroundColor: '#D2D3E2'}}
                  >
                    ID
                  </TableCell>
                  <TableCell
                    sx={{fontWeight: 'bold', backgroundColor: '#D2D3E2'}}
                  >
                    Nombre de la Materia
                  </TableCell>
                  {/* <TableCell>Email</TableCell>
                <TableCell>Rol</TableCell>
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
        onClose={() => {
          formik.resetForm();
          closeModal();
        }}
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
            Registro de nueva materia
          </Typography>

          <br />
          <form onSubmit={formik.handleSubmit}>
            <Grid item xs={12}>
              <TextField
                name="nameSubject"
                placeholder=""
                label="Nombre de la Materia"
                variant="outlined"
                error={Boolean(
                  formik.touched.nameSubject && formik.errors.nameSubject
                )}
                helperText={
                  formik.touched.nameSubject && formik.errors.nameSubject
                }
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.nameSubject}
                fullWidth
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
                    formik.resetForm();
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
      return <CardSubject request={element} />;
    });
  } else {
  }
};
const CardSubject = (props) => {
  return (
    <TableRow>
      <TableCell>{props.request.id}</TableCell>
      <TableCell>{props.request.name_subject}</TableCell>
    </TableRow>
  );
};
