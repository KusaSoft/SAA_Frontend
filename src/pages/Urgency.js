import React from "react";
import BasicBreadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ListOperador from "../components/ListaSolicitud/ListOperador";
import useUrgencyList from "../hooks/useUrgencyList";
import { STATUS } from "../services/Constant";
function Urgency(){
 
  const [sentList] = useUrgencyList({ status: STATUS.SENT });
  
  return (
    <div
      style={{
        background: '#FAFBFC',
        flex: '1',
        width: '100%',
        height: '100%',
        minHeight: '95vh',
      }}
    >
      <BasicBreadcrumbs title="Solicitudes urgentes"></BasicBreadcrumbs>
      <div style={{paddingLeft: '30px', paddingRight: '30px'}}>
        <ListOperador list={sentList ? sentList : []} />
      </div>
    </div>
  );
}
export default Urgency;
