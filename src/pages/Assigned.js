import React from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import ListOperador from '../components/ListaSolicitud/ListOperador';
import {
  MyBox,
  MyListBox,
  WrapperLayout,
  WrapperPage,
} from '../emotion/GlobalComponents';
import {BREAD_CRUB_PATHS, ORDER_DATE, STATUS} from '../services/Constant';
import apiSettings from '../services/service';
import useAuth from '../hooks/useAuth';
import AssignedCard from '../components/ListaSolicitud/AssignedCard';
import useListMyAssigned from '../hooks/useListMyAssigned';
function Assigned() {
  const {auth} = useAuth();
  const [listAssigned] = useListMyAssigned(auth.id);
  return (
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title="Solicitudes asignadas"
          breadcrumbs={BREAD_CRUB_PATHS.ASSIGNED}
        />
        <div
          style={{
            padding: '20px',
          }}
        >
          {auth.roles[0] === 'operador' ? (
            <ListOperador
              dataTypeS={'Fecha para la reserva'}
              requestType={apiSettings.getAssignedReservations}
              orderDate={ORDER_DATE.LEJANOS}
            />
          ) : (
            <Lista
              list={listAssigned ? listAssigned : []}
              emptyMessage={'No tiene ninguna solicitud asignada'}
            />
          )}
        </div>
      </WrapperPage>
    </WrapperLayout>
  );
}
export default Assigned;

const Lista = (props) => {
  if (props.list.length !== 0) {
    return (
      <MyListBox>
        {props.list.map((element) => {
          return <AssignedCard request={element} key={element[0]} />;
        })}
      </MyListBox>
    );
  } else {
    return <div>{props.emptyMessage}</div>;
  }
};
