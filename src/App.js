import React from "react";
import "./App.css";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import ReservationRequest from "./pages/ReservationRequest";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RequireAuth from "./components/auth/RequireAuth";
import Navbar from "./components/Dashboard/Navbar";
import Unauthorized from "./components/auth/Unauthorized";

const ROLES = {
  Reviewer: 2001,
  Teacher: 1984,
  Admin: 5150,
};

function MainLayout() {
  return (
    <div style={{ background: "blue" }}>
      <Navbar />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/user" element={<MainLayout />}>
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
          <Route path="reservationRequest" element={<ReservationRequest />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
