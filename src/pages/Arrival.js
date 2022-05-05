import React from "react";
import Lista from "../components/ListaSolicitud/Lista";
import useStatusList from "../hooks/useStatusList";
import { STATUS } from "../services/Constant";
function Arrival() {
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
        Por llegada
      </h1>
    </div>
  );
}
export default Arrival;
