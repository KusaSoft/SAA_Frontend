import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import useAuth from "../../hooks/useAuth";
import { Box, Button, Divider } from "@mui/material";
import LogoFCyT from "../../assets/fcyt.png";
import { Logout } from "@mui/icons-material";
function Sidebar() {
  const { setAuth } = useAuth();
  const { auth } = useAuth();

  return (
    <div className="nav_container">
      <div className="nav_content">
        <Box
          component="img"
          sx={{
            width: 120,
            maxWidth: { xs: 120, md: 120 },
            display: "flex",
          }}
          alt="logo fcyt."
          src={LogoFCyT}
        />
        <ul className="sidebar-items">
          {SidebarData.map((sidebarItem) => {
            return (
              <li key={sidebarItem.id} className={sidebarItem.cName}>
                <Link to={sidebarItem.path}>
                  {sidebarItem.icon}
                  <span>{sidebarItem.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <Box>
          <Divider />
          <Button
            className="sidebar-logout"
            onClick={() => {
              setAuth({
                user: null,
                roles: [],
                token: null,
              });
            }}
            style={{
              color: "#FFFFFF",
            }}
          >
            <Logout
              sx={{
                marginRight: "1rem",
              }}
            />
            Cerrar Sesión
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Sidebar;
