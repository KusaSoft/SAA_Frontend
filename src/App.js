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

const ROLES = {
  Reviewer: 2001,
  Teacher: 1984,
  Admin: 5150,
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/user" element={<MainLayout />}>
        <Route path="/user" element={<Navigate replace to="/user/home" />} />
        <Route
          element={
            <RequireAuth
              allowedRoles={[ROLES.Teacher, ROLES.Admin, ROLES.Reviewer]}
            />
          }
        >
          <Route path="home" element={<Home />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Teacher]} />}>
          <Route
            path="reservationRequest/:reservationRequest"
            element={<ReservationRequest />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
