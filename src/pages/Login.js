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
      email: "demo@devias.io",
      password: "Password123",
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
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Iniciar Sesión
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            {/* button login */}
            <Button
              color="primary"
              disabled={!formik.isValid || formik.isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
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
