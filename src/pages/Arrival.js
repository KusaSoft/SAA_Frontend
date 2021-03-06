import React from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import ListOperador from '../components/ListaSolicitud/ListOperador';
import {
  MyContainerPage,
  WrapperLayout,
  WrapperPage,
} from '../emotion/GlobalComponents';
import {BREAD_CRUB_PATHS, ORDER_DATE, STATUS} from '../services/Constant';
import apiSettings from '../services/service';
function Arrival() {
  return (
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title="Solicitudes por orden de llegada"
          breadcrumbs={BREAD_CRUB_PATHS.ARRIVAL}
        />
        <MyContainerPage>
          <ListOperador
            dataTypeS={'Fecha de envio'}
            requestType={apiSettings.getSentReservations}
            orderDate={ORDER_DATE.LEJANOS}
          />
        </MyContainerPage>
      </WrapperPage>
    </WrapperLayout>
  );
}
export default Arrival;
