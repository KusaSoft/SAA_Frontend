import React from "react";
import { Box } from "@mui/material";

function MainLayout({ children }) {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: "100%",
        backgroundColor: "blue",
      }}
    >
      {children}
    </Box>
  );
}

export default MainLayout;
