import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import ReservationRequest from "./pages/ReservationRequest";
import Login from "./pages/Login";
import Home from "./pages/Home";
const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};
function App() {
  return (
    <>
      <Routes>
        {/* <Route element={<Layout />}> */}
        {/* <Route path="/" element={<PublicPage />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/reservationRequest" element={<ReservationRequest />} />
        <Route path="/login" element={<Login />} />

        {/* <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          /> */}

        <Route path="/" element={<Navigate replace to="/home" />} />
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
