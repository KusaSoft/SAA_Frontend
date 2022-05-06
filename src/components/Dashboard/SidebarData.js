import React from "react";
import { Home, Add, Book, Group } from "@mui/icons-material";
import {ROLES, PATHS} from "../../services/Constant";

export const SidebarData = (role) => {
        if (role=== ROLES.ADMIN) {
          return [
           {
             id: 2,
             title: "Usuarios",
             icon: <Group sx={{ marginRight: "1rem" }} />,
             cName: "sidebar-item",
             hasSubmenu: false,
             path: `${PATHS.USERS}`,
           },
         ];
        } else if (role=== ROLES.REVIEWER) {
         return [
           {
             id: 2,
             title: "Solicitudes",
             icon: <Book sx={{ marginRight: "1rem" }} />,
             cName: "sidebar-item",
             hasSubmenu: true,
             elements: [
               {
                 id: 3,
                 title: "Por orden de llegada",
                 cName: "sidebar-item",
                 path: `${PATHS.ARRIVAL}`,
               },
               {
                 id: 4,
                 title: "Por urgencia",
                 cName: "sidebar-item",
                 path: `${PATHS.URGENCY}`,
               },
             ],
           },
         ];
        } else {
          return [
           {
             id: 2,
             title: "Solicitar Reserva",
             cName: "sidebar-item",
             icon: <Add sx={{ marginRight: "1rem" }} />,
             path: `${PATHS.RESERVATION_REQUESTS}/new`,
             hasSubmenu: false,
           },
           {
             id: 3,
             title: "Solicitudes",
             cName: "sidebar-item",
             icon: <Book sx={{ marginRight: "1rem" }} />,
             hasSubmenu: true,
             elements: [
               {
                 id: 4,
                 title: "Pendientes",
                 cName: "sidebar-item",
                 path: `${PATHS.PENDING}`,
               },
               {
                 id: 5,
                 title: "Borradores",
                 cName: "sidebar-item",
                 path: `${PATHS.DRAFTS}`,
               },
             ],
           },
         ];
        }
       };

export const HomeItem ={
  id: 1,
  title: "Inicio",
  icon: <Home sx={{ marginRight: "1rem" }} />,
  cName: "sidebar-item",
  path: `${PATHS.USERHOME}`,
  hasSubmenu: false,
}