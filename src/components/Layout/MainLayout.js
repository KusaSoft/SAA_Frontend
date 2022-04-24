import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import {
  ContentSite,
  Dashboard,
  LayoutSite,
  Header,
} from "./MainLayout.styles";
function MainLayout() {
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
        backgroundColor: "#172B4D",
      }}
    >
      <ContentSite>
        <Dashboard />
        <LayoutSite>
          <Header/>
          <Outlet />
        </LayoutSite>
      </ContentSite>
    </Box>
  );
}

export default MainLayout;
