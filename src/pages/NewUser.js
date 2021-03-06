import React, {useContext, useState} from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import {WrapperLayout, WrapperPage} from '../emotion/GlobalComponents';
import {BREAD_CRUB_PATHS, PATHS} from '../services/Constant';
import {
  MenuItem,
  Box,
  TextField,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Modal,
  Alert,
} from '@mui/material';
import FormInputControl from '../components/inputs/input/input';
import {useRegister} from '../hooks/useRegister';
import {Formik} from 'formik';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useModal} from '../hooks/useModal';
import {ROLS} from '../services/Constant';
import {Link} from 'react-router-dom';
import apiSettings from '../services/service';
function NewUser() {
  const [messageError, setMessageError] = useState('');
  const [currency, setCurrency] = React.useState('');
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, 'Mínimo 3 caracteres')
        .max(30, 'Nombre demasiado largo, máximo 30 caracteres')
        .required('El nombre es requerido')
        .matches(
          /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/,
          'Solo se permiten letras para este campo'
        ),
      lastName: Yup.string()
        .min(3, 'Mínimo 3 caracteres')
        .max(30, 'Apellido demasiado largo, máximo 30 caracteres')
        .required('El apellido es requerido')
        .matches(
          /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/,
          'Solo se permiten letras para este campo'
        ),
      email: Yup.string()
        .email('Debe ser un email valido')
        .max(255)
        .required('El email es requerido'),
      password: Yup.string()
        .min(5, 'Mínimo 5 caracteres')
        .max(255)
        .required('La contraseña es requerida'),
      confirmPassword: Yup.string()
        .max(255)
        .required('La confirmacion de contraseña es requerida')
        .oneOf([Yup.ref('password'), null], 'La contraseña no coincide'),
      role: Yup.string()
        .max(255)
        .required('El Rol es requerido'),
    }),
    onSubmit: async () => {
      const responseRegister = await apiSettings.register({
        ...formik.values,
        name: `${formik.values.lastName} ${formik.values.firstName}`,
        role: formik.values.role.toLowerCase(),
      });
      setMessageError(responseRegister.message);
      responseRegister.successful === true ? openModal() : openModal();
    },
  });

  return (
    <>
      <WrapperLayout>
        <WrapperPage>
          <BasicBreadcrumbs
            title="Nuevo Usuario"
            breadcrumbs={BREAD_CRUB_PATHS.NEW_USER}
          ></BasicBreadcrumbs>

          <Grid marginTop="20px">
            <Card
              style={{
                maxWidth: 450,
                padding: '20px 5px',
                margin: '0 auto',
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    textAlign: 'center',
                  }}
                  gutterBottom
                  variant="h5"
                >
                  Registro
                </Typography>

                <form onSubmit={formik.handleSubmit} autoComplete="off">
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TextField
                        name="firstName"
                        placeholder=""
                        label="Nombres"
                        variant="outlined"
                        error={Boolean(
                          formik.touched.firstName &&
                            formik.errors.firstName
                        )}
                        helperText={
                          formik.touched.firstName &&
                          formik.errors.firstName
                        }
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        name="lastName"
                        placeholder=""
                        label="Apellidos"
                        variant="outlined"
                        error={Boolean(
                          formik.touched.lastName && formik.errors.lastName
                        )}
                        helperText={
                          formik.touched.lastName && formik.errors.lastName
                        }
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        name="email"
                        //type="email"
                        placeholder=""
                        autoComplete="new-password"
                        label="Correo Electrónico"
                        variant="outlined"
                        error={Boolean(
                          formik.touched.email && formik.errors.email
                        )}
                        helperText={
                          formik.touched.email && formik.errors.email
                        }
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        name="password"
                        type="password"
                        placeholder=""
                        autoComplete="new-password"
                        label="Contraseña"
                        variant="outlined"
                        error={Boolean(
                          formik.touched.password && formik.errors.password
                        )}
                        helperText={
                          formik.touched.password && formik.errors.password
                        }
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        name="confirmPassword"
                        type="password"
                        placeholder=""
                        label="Confirmar Contraseña"
                        variant="outlined"
                        error={Boolean(
                          formik.touched.confirmPassword &&
                            formik.errors.confirmPassword
                        )}
                        helperText={
                          formik.touched.confirmPassword &&
                          formik.errors.confirmPassword
                        }
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        name="role"
                        select
                        value={formik.values.role}
                        onChange={formik.handleChange}
                        //onChange={handleChange}
                        placeholder=""
                        label="Rol"
                        variant="outlined"
                        error={Boolean(
                          formik.touched.role && formik.errors.role
                        )}
                        helperText={
                          formik.touched.role && formik.errors.role
                        }
                        onBlur={formik.handleBlur}
                        fullWidth
                      >
                        {ROLS.map((option) => (
                          <MenuItem
                            key={option.value}
                            value={option.value}
                          >
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        sx={{
                          backgroundColor: 'navBar.main',
                          color: 'white',
                          boxShadow: 'none',
                          '&:hover': {
                            backgroundColor: 'navBar.dark',
                            color: 'white',
                            boxShadow: 'none',
                            border: 'solid 1px',
                          },
                        }}
                        type="submit"
                        variant="contained"
                        //color="primary"
                        fullWidth
                        //onClick={}
                      >
                        Registrar
                      </Button>
                    </Grid>
                  </Grid>
                </form>
                <Link to={'../users'} style={{textDecoration: 'none'}}>
                  <Button
                    sx={{
                      backgroundColor: '#D52020',
                      color: 'white',
                      boxShadow: 'none',
                      marginTop: '10px',
                      '&:hover': {
                        background: '#D52020',
                        color: 'white',
                        boxShadow: 'none',
                        border: 'solid 1px',
                      },
                    }}
                    type="submit"
                    variant="contained"
                    //color="primary"
                    fullWidth
                  >
                    Cancelar
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </WrapperPage>
      </WrapperLayout>

      <Modal
        open={isOpenModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Alert
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: 300,
            p: 2,
          }}
          severity={
            messageError === 'Enviado exitosamente' ? 'success' : 'error'
          }
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {messageError}
            {messageError === 'Enviado exitosamente'
              ? ''
              : //: `${(<br />)}Correo no valido`}
                '\n'}
          </Typography>
          <Link
            to={messageError === 'Enviado exitosamente' ? '../users' : ''}
            style={{textDecoration: 'none'}}
          >
            <Button variant="outlined" onClick={closeModal}>
              Continuar
            </Button>
          </Link>
        </Alert>
      </Modal>
    </>
  );
}
export default NewUser;
