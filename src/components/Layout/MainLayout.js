import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Button, IconButton } from "@mui/material";
import { ClearAll, Menu, AccountCircle } from "@mui/icons-material";
import {
  ContentSite,
  Dashboard,
  LayoutSite,
  Header,
} from "./MainLayout.styles";
import useAuth from "../../hooks/useAuth";
import Sidebar from "../Dashboard/Navbar";

function MainLayout() {
  const { auth } = useAuth();
  const [open, setOpen] = useState(true);

  return (
    <body
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 0,
        minHeight: "100%",
        height: "100%",
        background: "#172b4d",
      }}
    >
      <ContentSite>
        <Dashboard open={open}>
          <Sidebar />
        </Dashboard>
        <LayoutSite>
          <Header>
            <Button
              style={{
                color: "#FFFFFF",
                borderColor: "#FFFFFF",
                marginLeft: "1rem",
              }}
              variant="outlined"
              startIcon={open ? <ClearAll /> : <Menu />}
              onClick={() => setOpen(!open)}
            />
            <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "100%",
                color: "white",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              {auth.user}{" "}
              <AccountCircle
                size="large"
                sx={{
                  marginLeft: "1rem",
                  marginRight: "1rem",
                }}
              />
            </Box>
          </Header>
          <Outlet />
        </LayoutSite>
      </ContentSite>
    </body>
  );
}

export default MainLayout;
