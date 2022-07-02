import React from 'react';
import {Home, Add, Book, Group} from '@mui/icons-material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SubjectIcon from '@mui/icons-material/Subject';
import GroupsIcon from '@mui/icons-material/Groups';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {ROLES, PATHS} from '../../services/Constant';

export const SidebarData = (role) => {
  if (role === ROLES.ADMIN) {
    return [
      {
        id: 2,
        title: 'Usuarios',
        icon: <Group sx={{marginRight: '1rem'}} />,
        cName: 'sidebar-item',
        hasSubmenu: false,
        path: `${PATHS.USERS}`,
      },
      // {
      //   id: 3,
      //   title: 'Calendario',
      //   icon: <CalendarTodayIcon sx={{marginRight: '1rem'}} />,
      //   cName: 'sidebar-item',
      //   hasSubmenu: false,
      //   path: `${PATHS.CALENDAR}`,
      // },
      {
        id: 4,
        title: 'Materias',
        icon: <SubjectIcon sx={{marginRight: '1rem'}} />,
        cName: 'sidebar-item',
        hasSubmenu: false,
        path: `${PATHS.SUBJECTS}`,
      },
      {
        id: 5,
        title: 'Grupos',
        icon: <GroupsIcon sx={{marginRight: '1rem'}} />,
        cName: 'sidebar-item',
        hasSubmenu: false,
        path: `${PATHS.GROUPS}`,
      },
    ];
  } else if (role === ROLES.REVIEWER) {
    return [
      {
        id: 7,
        title: 'Notificaciones emitidas',
        cName: 'sidebar-item',
        icon: <NotificationsIcon sx={{marginRight: '1rem'}} />,
        path: `${PATHS.NOTIFICATIONS}`,
        hasSubmenu: false,
      },
      {
        id: 2,
        title: 'Solicitudes',
        icon: <Book sx={{marginRight: '1rem'}} />,
        cName: 'sidebar-item',
        hasSubmenu: true,
        elements: [
          {
            id: 3,
            title: 'Por orden de llegada',
            cName: 'sidebar-item',
            path: `${PATHS.ARRIVAL}`,
          },
          {
            id: 4,
            title: 'Por urgencia',
            cName: 'sidebar-item',
            path: `${PATHS.URGENCY}`,
          },
          {
            id: 5,
            title: 'Asignados',
            cName: 'sidebar-item',
            path: `${PATHS.ASSIGNED}`,
          },
          {
            id: 6,
            title: 'Rechazados',
            cName: 'sidebar-item',
            path: `${PATHS.REJECTED}`,
          },
          {
            id: 7,
            title: 'Caducados',
            cName: 'sidebar-item',
            path: `${PATHS.EXPIRED}`,
          },
        ],
      },
    ];
  } else {
    return [
      {
        id: 2,
        title: 'Solicitar Reserva',
        cName: 'sidebar-item',
        icon: <Add sx={{marginRight: '1rem'}} />,
        path: `${PATHS.RESERVATION_REQUESTS}/new`,
        hasSubmenu: false,
      },
      {
        id: 3,
        title: 'Notificaciones',
        cName: 'sidebar-item',
        icon: <NotificationsIcon sx={{marginRight: '1rem'}} />,
        path: `${PATHS.NOTIFICATIONS}`,
        hasSubmenu: false,
      },
      {
        id: 4,
        title: 'Solicitudes',
        cName: 'sidebar-item',
        icon: <Book sx={{marginRight: '1rem'}} />,
        hasSubmenu: true,
        elements: [
          {
            id: 5,
            title: 'Pendientes',
            cName: 'sidebar-item',
            path: `${PATHS.PENDING}`,
          },
          {
            id: 6,
            title: 'Borradores',
            cName: 'sidebar-item',
            path: `${PATHS.DRAFTS}`,
          },
          {
            id: 7,
            title: 'Asignados',
            cName: 'sidebar-item',
            path: `${PATHS.ASSIGNED}`,
          },
          {
            id: 8,
            title: 'Rechazados',
            cName: 'sidebar-item',
            path: `${PATHS.REJECTED}`,
          },
          {
            id: 9,
            title: 'Caducados',
            cName: 'sidebar-item',
            path: `${PATHS.EXPIRED}`,
          },
        ],
      },
    ];
  }
};

export const HomeItem = {
  id: 1,
  title: 'Inicio',
  icon: <Home sx={{marginRight: '1rem'}} />,
  cName: 'sidebar-item',
  path: `${PATHS.USERHOME}`,
  hasSubmenu: false,
};
