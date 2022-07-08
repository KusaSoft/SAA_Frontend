import React from 'react';
import './App.css';
import {Routes, Route, Navigate, Outlet} from 'react-router-dom';
import ReservationRequest from './pages/ReservationRequest';
import Login from './pages/Login';
import Home from './pages/Home';
import RequireAuth from './components/auth/RequireAuth';

import Unauthorized from './components/auth/Unauthorized';
import MainLayout from './components/Layout/MainLayout';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import Pendientes from './pages/Pendientes';
import Borradores from './pages/Borradores';
import Arrival from './pages/Arrival';
import Urgency from './pages/Urgency';
import {ROLES, PATHS} from './services/Constant';
import Users from './pages/Users';
import {theme} from './Theme';
import NewUser from './pages/NewUser';
import Assigned from './pages/Assigned';
import Rejected from './pages/Rejected';

import ClassroomAssigntaion from './pages/ClassroomAssignation';
import Calendar from './pages/Calendar';
import Subjects from './pages/Subjects';
import Groups2 from './pages/Groups2';

import Notifications from './pages/Notifications';

import ReservationForward from './pages/ReservationForward';
import Expired from './pages/Expired';
import AssignedTeacher from './pages/AssignedTeacher';
import RejectedTeacher from './pages/RejectedTeacher';
import ExpiredTeacher from './pages/ExpiredTeacher';

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

          <Route
            element={
              <RequireAuth
                allowedRoles={[ROLES.TEACHER, ROLES.REVIEWER]}
              />
            }
          >
            <Route
              path={PATHS.NOTIFICATIONS}
              element={<Notifications />}
            />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.TEACHER]} />}>
            <Route
              path={PATHS.RESERVATION_FORWARD}
              element={<ReservationForward />}
            />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.TEACHER]} />}>
            <Route path={PATHS.PENDING} element={<Pendientes />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.TEACHER]} />}>
            <Route path={PATHS.DRAFTS} element={<Borradores />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.TEACHER]} />}>
            <Route path={PATHS.ASSIGNED} element={<AssignedTeacher />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.TEACHER]} />}>
            <Route path={PATHS.REJECTED} element={<RejectedTeacher />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.TEACHER]} />}>
            <Route path={PATHS.EXPIRED} element={<ExpiredTeacher />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.REVIEWER]} />}>
            <Route path={PATHS.ARRIVAL} element={<Arrival />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.REVIEWER]} />}>
            <Route path={PATHS.URGENCY} element={<Urgency />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.REVIEWER]} />}>
            <Route path={PATHS.ASSIGNED_O} element={<Assigned />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.REVIEWER]} />}>
            <Route path={PATHS.REJECTED_O} element={<Rejected />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.REVIEWER]} />}>
            <Route path={PATHS.EXPIRED_O} element={<Expired />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.REVIEWER]} />}>
            <Route
              path={PATHS.CLASSROOM_ASSIGNATION}
              element={<ClassroomAssigntaion />}
            />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
            <Route path={PATHS.USERS} element={<Users />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
            <Route path={PATHS.NEW_USER} element={<NewUser />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
            <Route path={PATHS.CALENDAR} element={<Calendar />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
            <Route path={PATHS.SUBJECTS} element={<Subjects />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
            <Route path={PATHS.GROUPS} element={<Groups2 />} />
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
