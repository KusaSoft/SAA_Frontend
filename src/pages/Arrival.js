import React from "react";
import ListOperador from "../components/ListaSolicitud/ListOperador";
import useUrgencyList from "../hooks/useUrgencyList";
import { STATUS } from "../services/Constant";
function Arrival(){
 
  const [sentList] = useUrgencyList({ status: STATUS.SENT });
  
  return(
      <div style={{background: "#FAFBFC",
                      flex: "1",
                      width: "100%",
                      height: "100%",
                      minHeight: "95vh",}}>
          <h1 style={{ color: "#172B4D", 
                      textAlign: "center", 
                      fontFamily: "roboto" }} >Por orden de llegada</h1> 
          <div style={{paddingLeft:"30px", paddingRight:"30px"}}>
              <ListOperador list={sentList ? sentList : []} />
          </div>
      </div>
  );
}
export default Arrival;
