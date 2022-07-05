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
function Rejected() {
  return (
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title="Solicitudes rechazadas"
          breadcrumbs={BREAD_CRUB_PATHS.REJECTED}
        />
        <MyContainerPage>
          <ListOperador
            dataTypeS={'Fecha para la reserva'}
            requestType={apiSettings.getRejectedReservations}
            orderDate={ORDER_DATE.LEJANOS}
          />
        </MyContainerPage>
      </WrapperPage>
    </WrapperLayout>
  );
}
export default Rejected;
