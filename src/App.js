import React from "react";
import "./App.css";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import ReservationRequest from "./pages/ReservationRequest";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RequireAuth from "./components/auth/RequireAuth";

import Unauthorized from "./components/auth/Unauthorized";
import MainLayout from "./components/Layout/MainLayout";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Pendientes from "./pages/Pendientes";
import Borradores from "./pages/Borradores";
import Arrival from "./pages/Arrival";
import Urgency from "./pages/Urgency";
import { ROLES, PATHS} from "./services/Constant";
import Users from "./pages/Users";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    redDark: {
      main: "#c62828",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path={PATHS.ROOT}
          element={<Navigate replace to={PATHS.LOGIN} />}
        />
        <Route path={PATHS.LOGIN} element={<Login />} />
        <Route path={PATHS.UNAUTHORIZED} element={<Unauthorized />} />
        <Route path={PATHS.USER} element={<MainLayout />}>
          <Route
            path={PATHS.USER}
            element={<Navigate replace to={PATHS.USERHOME} />}
          />
          <Route
            element={
              <RequireAuth
                allowedRoles={[ROLES.TEACHER, ROLES.ADMIN, ROLES.REVIEWER]}
              />
            }
          >
            <Route path={PATHS.USERHOME} element={<Home />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.TEACHER]} />}>
            <Route
              path={PATHS.RESERVATION_REQUEST}
              element={<ReservationRequest />}
            />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.TEACHER]} />}>
            <Route path={PATHS.PENDING} element={<Pendientes />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.TEACHER]} />}>
            <Route path={PATHS.DRAFTS} element={<Borradores />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.REVIEWER]} />}>
            <Route path={PATHS.ARRIVAL} element={<Arrival />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.REVIEWER]} />}>
            <Route path={PATHS.URGENCY} element={<Urgency />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
            <Route path={PATHS.USERS} element={<Users />} />
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
