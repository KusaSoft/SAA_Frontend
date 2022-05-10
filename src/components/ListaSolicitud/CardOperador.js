import React from "react";
import { Delete, Edit } from "@mui/icons-material";
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import { STATUS } from "../../services/Constant";
import { Fab, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import apiSettings from "../../services/service";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};


const CardOperador = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          background: "#172B4D",
        }}
      >
        <div>
          <b style={{ fontWeight: "bold" }}>Materia: </b>{" "}
          {props.request.subject}
        </div>
        <div style={{}}>
          <b style={{ fontWeight: "bold" }}>Fecha: </b> {props.request.fecha}
        </div>
      </div>
      <div>
        <div style={{ background: "#EBECF0", color: "black", padding: "10px" }}>
          <b style={{ fontWeight: "bold" }}>Motivo: </b> {props.request.motivo}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          background: "linear-gradient(180deg, #EBECF0 50%, #FAFBFC 50%)",
          color: "black",
        }}
      >
        <div
          style={{
            minWidth: "100px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Stack direction="row" spacing={1}>
            
            <Fab
              color="neutral"
              size="small"
              sx={{
                "&:hover": {
                  backgroundColor: "#DFE1E6",
                  color: "black",
                },
              }}
            >
                <ContentPasteSearchIcon onClick={()=>{alert("redirect Request: "+props.request.id)}}/>
                {/* <Delete onClick={ () =>{ }}/> */}
            </Fab>
          </Stack>
        </div>
      </div>
    </div>
  );
};
export default CardOperador;