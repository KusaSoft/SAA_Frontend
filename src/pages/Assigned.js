import React from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import ListOperador from '../components/ListaSolicitud/ListOperador';
import {WrapperLayout, WrapperPage} from '../emotion/GlobalComponents';
import {BREAD_CRUB_PATHS, ORDER_DATE, STATUS} from '../services/Constant';
import apiSettings from '../services/service';
function Assigned() {
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
          <ListOperador
            dataTypeS={'Fecha para la reserva'}
            requestType={apiSettings.getAllReservations}
            orderDate={ORDER_DATE.LEJANOS}
          />
        </div>
      </WrapperPage>
    </WrapperLayout>
  );
}
export default Assigned;
