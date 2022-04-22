import React, { useContext } from "react";
import { useFormik } from "formik";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import * as Yup from "yup";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import AuthContext from "../contexts/AuthProvider";

function Login() {
  const location = useLocation();
  const { setAuth } = useContext(AuthContext);
  const { auth } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Debe ser un email valido")
        .max(255)
        .required("El email es requerido"),
      password: Yup.string()
        .max(255)
        .required("La contraseña es requerida"),
    }),
    onSubmit: () => {
      setAuth({
        user: "mochito",
        roles: [1984],
      });
    },
  });
  return auth.user === null ? (
    <>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          flexGrow: 1,
          minHeight: "100%",
          height: "100vh",
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 9, textAlign: "center" }}>
              <Typography color="textPrimary" variant="h2">
                Iniciar Sesión
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Correo electrónico"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
              sx={{ mt: 5 }}
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Contraseña"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
              sx={{ mt: 5 }}
            />
            <Button
              color="primary"
              disabled={!formik.isValid || formik.isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              sx={{ mt: 5, width: "fit-content" }}
            >
              Iniciar Sesión
            </Button>
          </form>
        </Container>
      </Box>
    </>
  ) : (
    <Navigate to="/home" state={{ from: location }} replace />
  );
}

export default Login;
