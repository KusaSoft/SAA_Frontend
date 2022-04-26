import React from "react";
import { Home, Add } from "@mui/icons-material";
export const SidebarData = [
  {
    id: 1,
    title: "Home",
    cName: "sidebar-item",
    icon: <Home sx={{ marginRight: "1rem" }} />,
    path: "/user/home",
  },
  {
    id: 2,
    title: "Solicitar Reserva",
    cName: "sidebar-item",
    icon: <Add sx={{ marginRight: "1rem" }} />,
    path: "/user/reservationRequest/new",
  },
];
