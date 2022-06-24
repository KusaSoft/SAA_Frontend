import {Add, FormatItalic} from '@mui/icons-material';
import {
  Button,
  TableContainer,
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
  Fab,
  MenuItem,
} from '@mui/material';
import {Delete} from '@mui/icons-material';
import React from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';

import {WrapperLayout, WrapperPage} from '../emotion/GlobalComponents';
import {BREAD_CRUB_PATHS, PATHS} from '../services/Constant';
import useListSubjects from '../hooks/useListSubjects';
import useListTeachers from '../hooks/useListTeachers';
import useListGroups from '../hooks/useListGroups';
//import CardUser from '../components/User/cardUser';
import {Link} from 'react-router-dom';
import {useModal} from '../hooks/useModal';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Formik, Form} from 'formik';
import apiSettings from '../services/service';
function Groups2() {
  const [listSubjects] = useListSubjects();
  const [listTeachers] = useListTeachers();
  const [listGroups] = useListGroups();
  const [isOpenModal, openModal, closeModal] = useModal(false);
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
      numberGroup: Yup.number()
        .positive()
        .min(1, 'Debe ser número positivo')
        .max(99, 'Máximo un número de 2 cifras')
        .required('Se requiere el numero de grupo'),
    }),
    onSubmit: async () => {
      const responseRegister = await apiSettings.registerGroup({
        ...formik.values,
        subject: formik.values.nameSubject,
        teacher: formik.values.nameTeacher,
        number_group: Number(formik.values.numberGroup),
      });
      // setMessageError(responseRegister.message);
      // responseRegister.successful === true ?  : openModal();
      //alert('funciona');
      window.location.reload();
      // console.log({
      //   ...formik.values,
      //   number_group: Number(formik.values.numberGroup),
      // });
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
                      N° de grupo
                    </TableCell>
                    <TableCell
                      sx={{fontWeight: 'bold', backgroundColor: '#D2D3E2'}}
                    >
                      Eliminar
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{List(listGroups ? listGroups : [])}</TableBody>
              </Table>
            </TableContainer>
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
            Registro de nuevo grupo
          </Typography>
          {/*-------------------------------------------------------------------- */}
          <br />
          <form onSubmit={formik.handleSubmit}>
            <Grid item xs={12}>
              <TextField
                name="nameSubject"
                select
                value={formik.values.nameSubject}
                onChange={formik.handleChange}
                placeholder=""
                label="Materia"
                variant="outlined"
                error={Boolean(
                  formik.touched.nameSubject && formik.errors.nameSubject
                )}
                helperText={
                  formik.touched.nameSubject && formik.errors.nameSubject
                }
                onBlur={formik.handleBlur}
                fullWidth
                sx={{marginTop: '1rem', maxWidth: 400}}
              >
                {listSubjects.map((option) => (
                  <MenuItem key={option.label} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              {/**/}
              <TextField
                name="nameTeacher"
                select
                value={formik.values.nameTeacher}
                onChange={formik.handleChange}
                placeholder=""
                label="Docente"
                variant="outlined"
                error={Boolean(
                  formik.touched.nameTeacher && formik.errors.nameTeacher
                )}
                helperText={
                  formik.touched.nameTeacher && formik.errors.nameTeacher
                }
                onBlur={formik.handleBlur}
                fullWidth
                sx={{marginTop: '1rem', maxWidth: 400}}
              >
                {listTeachers.map((option) => (
                  <MenuItem key={option.label} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                name="numberGroup"
                type="number"
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
export default Groups2;

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <TableRow>
      <TableCell>{props.request.subject}</TableCell>
      <TableCell>{props.request.teacher}</TableCell>
      <TableCell sx={{paddingLeft: '40px'}}>
        {props.request.number_group}
      </TableCell>
      <TableCell>
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
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 300,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                ¿Desea eliminar este grupo?
              </Typography>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button
                sx={{marginLeft: '82px'}}
                onClick={async () => {
                  //alert('eliminar grupo n°: ' + props.request.id);

                  const responseDelete = await apiSettings.deleteGroup(
                    props.request.id
                  );
                  window.location.reload();
                }}
              >
                Eliminar
              </Button>
            </Box>
          </Modal>
        </Fab>
      </TableCell>
    </TableRow>
  );
};
