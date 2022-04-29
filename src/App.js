import React from "react";
import "./App.css";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import ReservationRequest from "./pages/ReservationRequest";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RequireAuth from "./components/auth/RequireAuth";
import Navbar from "./components/Dashboard/Navbar";
import Unauthorized from "./components/auth/Unauthorized";
import { Box } from "@mui/material";
import MainLayout from "./components/Layout/MainLayout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ROLES } from "./services/Constant";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/user" element={<MainLayout />}>
          <Route path="/user" element={<Navigate replace to="/user/home" />} />
          <Route
            element={ 
              <RequireAuth
                allowedRoles={[ROLES.TEACHER, ROLES.ADMIN, ROLES.REVIEWER]}
              />
            }
          >
            <Route path="home" element={<Home />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.TEACHER]} />}>
            <Route
              path="reservationRequest/:reservationRequest"
              element={<ReservationRequest />}
            />
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
