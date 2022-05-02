import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Lista from "../components/ListaSolicitud/Lista";
import useStatusList from "../hooks/useStatusList";
import { STATUS } from "../services/Constant";
import useAuth from "../hooks/useAuth"

export default function Home() {
  const { auth } = useAuth();
  const [value, setValue] = React.useState(0);
  const [sentList] = useStatusList({ status: STATUS.SENT });
  const [draftList] = useStatusList({ status: STATUS.DRAFT });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        Bienvenido docente {auth.user}
      </h1>
      
    </div>
  );
}
