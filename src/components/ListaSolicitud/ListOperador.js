import React from "react";
import CardOperador from "./CardOperador";

const ListOperador = (props) => {
  if (props.list.length !== 0) {
    return (
      <div style={{ width: "99%" }}>
        {props.list.map((element) => {
          return (
            <div key={element[0]}>
              <CardOperador request={element}/>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>No tiene ninguna solicitud pendiente</div>;
  }
};
export default ListOperador;