import React, { useContext } from "react";
import { useFormik } from "formik";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import * as Yup from "yup";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import AuthContext from "../contexts/AuthProvider";
import { Email, Image, Lock, Password } from "@mui/icons-material";

import Footer from "../components/Footer/Footer";

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
          backgroundColor: "#172B4D",
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            backgroundColor: "#fafbfc",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            marginBottom: "150px",
            padding: "20px",
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ mb: 3, textAlign: "center" }}>
              <Typography color="textPrimary" variant="h4">
                Sistema de asignación de aulas
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 1,
              }}
            >
              <Email
                sx={{
                  color: "action.active",
                  fontSize: "34px",
                  mr: 1,
                  my: 0.5,
                  mb: 1,
                  alignSelf:
                    formik.touched.email && formik.errors.email
                      ? "center"
                      : "flex-end",
                }}
              />
              <TextField
                variant="filled"
                sx={{ minWidth: "fit-content", maxWidth: "300px" }}
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
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 1,
              }}
            >
              <Lock
                sx={{
                  color: "action.active",
                  size: "60px",
                  mr: 1,
                  my: 0.5,
                  mb: 1,
                  fontSize: "34px",
                  alignSelf:
                    formik.touched.password && formik.errors.password
                      ? "center"
                      : "flex-end",
                }}
              />
              <TextField
                error={Boolean(
                  formik.touched.password && formik.errors.password
                )}
                variant="filled"
                fullWidth
                sx={{
                  minWidth: "fit-content",
                  maxWidth: "300px",
                }}
                helperText={formik.touched.password && formik.errors.password}
                label="Contraseña"
                margin="normal"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
                value={formik.values.password}
              />
            </Box>
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
      <Footer />
    </>
  ) : (
    <Navigate to="/user" state={{ from: location }} replace />
  );
}

export default Login;
