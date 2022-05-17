import React from 'react';
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
        .required('El nombre es requerido'),
      lastName: Yup.string()
        .min(3, 'Mínimo 3 caracteres')
        .max(30, 'Apellido demasiado largo, máximo 30 caracteres')
        .required('El apellido es requerido'),
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
        name: `${formik.values.firstName} ${formik.values.lastName}`,
        role: formik.values.role.toLowerCase(),
      });
      responseRegister.successful === true
        ? openModal()
        : alert('email no valido');
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

                <form onSubmit={formik.handleSubmit}>
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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Registro completado con éxito.
          </Typography>
          <Link to={'../users'} style={{textDecoration: 'none'}}>
            <Button sx={{}} onClick={closeModal}>
              Continuar
            </Button>
          </Link>
        </Box>
      </Modal>
    </>
  );
}
export default NewUser;
