import React from "react";
import Solicitud from "../components/FormSolicitud/solicitud";

export default function ReservationRequest() {
  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#FAFBFC",
        height: "100%",
        width: "100%",
        padding: "2rem 0",
      }}
    >
      <Solicitud />
    </div>
  );
}
