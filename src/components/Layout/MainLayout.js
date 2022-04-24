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

function MainLayout() {
  const { auth } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        alignItems: "center",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        flexGrow: 1,
        minHeight: "100%",
        height: "100vh",
      }}
    >
      <ContentSite>
        <Dashboard open={open} />
        <LayoutSite>
          <Header>
            <Button
              variant="outlined"
              startIcon={open ? <ClearAll /> : <Menu />}
              onClick={() => setOpen(!open)}
            />
            <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "100%",
                padding: "1rem",
                justifyContent: "flex-end",
              }}
            >
              {auth.user}{" "}
              <AccountCircle
                size="large"
                sx={{
                  marginLeft: "1rem",
                }}
              />
            </Box>
          </Header>
          <Outlet />
        </LayoutSite>
      </ContentSite>
    </Box>
  );
}

export default MainLayout;
