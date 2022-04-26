import React from "react";

import { useNavigate } from "react-router-dom";
import Modals from "../Modals/Modals";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section>
      <h1>Acceso no autorizado</h1>
      <br />
      <p>No tienes permisos para acceder a esta pagina.</p>
      <div className="flexGrow">
        <button onClick={goBack}>Retroceder</button>
      </div>
    </section>
  );
};

export default Unauthorized;
