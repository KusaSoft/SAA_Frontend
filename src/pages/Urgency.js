import React from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import ListOperador from '../components/ListaSolicitud/ListOperador';
import {MyContainerPage, WrapperLayout, WrapperPage} from '../emotion/GlobalComponents';
import {BREAD_CRUB_PATHS, ORDER_DATE} from '../services/Constant';
import apiSettings from '../services/service';
function Urgency() {
  return (
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title="Solicitudes urgentes"
          breadcrumbs={BREAD_CRUB_PATHS.URGENCY}
        />
        <MyContainerPage>
          <ListOperador
            dataTypeS={'Fecha para la reserva'}
            orderDate={ORDER_DATE.PROXIMOS}
            requestType={apiSettings.getUrgentReservations}
          />
        </MyContainerPage>
      </WrapperPage>
    </WrapperLayout>
  );
}
export default Urgency;
