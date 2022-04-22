import React from "react";
import { Box } from "@mui/material";

function BoxCenter({ children }) {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: "100%",
        backgroundColor: "green",
      }}
    >
      {children}
    </Box>
  );
}

export default BoxCenter;
