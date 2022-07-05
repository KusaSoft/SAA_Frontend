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
function Expired() {
  const {auth} = useAuth();
  return (
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title="Solicitudes caducadas"
          breadcrumbs={BREAD_CRUB_PATHS.EXPIRED}
        />
        <MyContainerPage>
          <ListOperador
            dataTypeS={'Fecha para la reserva'}
            orderDate={ORDER_DATE.LEJANOS}
          />
        </MyContainerPage>
      </WrapperPage>
    </WrapperLayout>
  );
}
export default Expired;
