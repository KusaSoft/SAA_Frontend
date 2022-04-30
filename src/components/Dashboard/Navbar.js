import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import useAuth from "../../hooks/useAuth";
import { Box, Divider } from "@mui/material";
import LogoFCyT from "../../assets/fcyt.png";
import { Logout } from "@mui/icons-material";
import Button from "../../components/Button/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Sidebar() {
  const { setAuth } = useAuth();
  const { auth } = useAuth();

  return (
    <div className="nav_container">
      <div className="nav_content">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
          <Divider />
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

            <div>
              <Accordion sx={{ background: "#172B4D", color: "white" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Solicitudes</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li className="sidebar-item">
                      <Link to={"/user/Pendientes"}>Pendientes</Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to={"/user/Borradores"}>Borradores</Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </div>
          </ul>
        </Box>
        <Box>
          <Divider
            style={{
              color: "white",
            }}
          />
          <Button
            variant="contained"
            onClick={() => {
              setAuth({
                user: null,
                roles: [],
                token: null,
                id: null,
              });
            }}
            hoverBackground="#DFE1E6"
            hoverColor="#000000"
            color="#fff"
            background="#172b4d"
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
