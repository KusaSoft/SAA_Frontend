import { Add } from "@mui/icons-material";
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Box } from "@mui/material";
import React from "react";

function Users() {
  return (
    <div
      style={{
        background: "#FAFBFC",
        flex: "1",
        width: "100%",
        height: "100%",
        minHeight: "95vh",
      }}
    >
      <h1
        style={{ color: "#172B4D", textAlign: "center", fontFamily: "roboto" }}
      >
        Usuarios
      </h1>
      <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",

      }}
      >
        <Button
            variant="contained"
            color="primary"
            style={{
                background: "#172B4D",
                color: "#FAFBFC",
                fontFamily: "roboto",
                fontSize: "0.8rem",
                borderRadius: "0.5rem",
                border: "none",
                boxShadow: "none",
                "&:hover": {
                    background: "#FAFBFC",
                    color: "#172B4D",
                    boxShadow: "none",
                    border: "none",
                }
            }}
        >
            <Add />
            Nuevo usuario
        </Button>
        </Box>
        <Box
        sx={{
            display: "flex",
            alignItems: "center",
            background: "#FAFBFC",
            borderRadius: "0.5rem",
            padding: "0.5rem",
        }}
            >

      <Table>
        <TableHead>
            <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Apellido</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Rol</TableCell>
                <TableCell>Habilitado</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>Juan</TableCell>
                <TableCell>Perez</TableCell>
                <TableCell>
                    juan@gmail.com
                </TableCell>
                <TableCell>
                    Operador
                </TableCell>
                <TableCell>
                    <input type="checkbox" />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Juan</TableCell>
                <TableCell>Perez</TableCell>
                <TableCell>
                    corina@gmail.com
                </TableCell>
                <TableCell>
                    Docente
                </TableCell>
                <TableCell>
                    <input type="checkbox" />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Juan</TableCell>
                <TableCell>Perez</TableCell>
                <TableCell>
                    leticia@gmail.com
                </TableCell>
                <TableCell>
                    Docente
                </TableCell>
                <TableCell>
                    <input type="checkbox" />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Juan</TableCell>
                <TableCell>Perez</TableCell>
                <TableCell>
                    alfredo@gmail.com
                </TableCell>
                <TableCell>
                    Administrador
                </TableCell>
                <TableCell>
                    <input type="checkbox" />
                </TableCell>
            </TableRow>
        </TableBody>
      </Table>
        </Box>
    </div>
  );
}
export default Users;
