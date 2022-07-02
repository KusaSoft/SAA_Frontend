import React from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import ListOperador from '../components/ListaSolicitud/ListOperador';
import {
  MyContainerPage,
  MyListBox,
  WrapperLayout,
  WrapperPage,
} from '../emotion/GlobalComponents';
import {BREAD_CRUB_PATHS, ORDER_DATE, STATUS} from '../services/Constant';
import apiSettings from '../services/service';
import useAuth from '../hooks/useAuth';
import RejectedCard from '../components/ListaSolicitud/RejectedCard';
import useListMyRejects from '../hooks/useListMyRejects';
function Expired() {
  const {auth} = useAuth();
  const [listRejected] = useListMyRejects(auth.id);
  return (
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title="Solicitudes caducadas"
          breadcrumbs={BREAD_CRUB_PATHS.EXPIRED}
        />
        <MyContainerPage>
          {/* {auth.roles[0] === 'operador' ? (
            <ListOperador
              dataTypeS={'Fecha para la reserva'}
              requestType={apiSettings.getRejectedReservations}
              orderDate={ORDER_DATE.LEJANOS}
            />
          ) : (
            <Lista
              list={listRejected ? listRejected : []}
              emptyMessage={'No tiene ninguna solicitud rechazada'}
            />
          )} */}
        </MyContainerPage>
      </WrapperPage>
    </WrapperLayout>
  );
}
export default Expired;

const Lista = (props) => {
  if (props.list.length !== 0) {
    return (
      <MyListBox>
        {/* {props.list.map((element) => {
          return <RejectedCard key={element[0]} request={element} />;
        })} */}
      </MyListBox>
    );
  } else {
    return <div>{props.emptyMessage}</div>;
  }
};
