import React from "react";
import { Delete, Edit } from "@mui/icons-material";
import { STATUS } from "../../services/Constant";
import { Fab, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import apiSettings from "../../services/service";

const Card = (props) => {
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
            {props.request.state == STATUS.DRAFT ? (
              <Link to={`/user/reservationRequest/${props.request.id}`}>
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
                  <Edit />
                </Fab>
              </Link>
            ) : (
              <></>
            )}
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
              <Delete onClick={() => apiSettings.deleteReservationRequest(props.request.id)} 
              />
            </Fab>
          </Stack>
        </div>
      </div>
    </div>
  );
};
export default Card;
