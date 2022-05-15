import React from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import ListOperador from '../components/ListaSolicitud/ListOperador';
import {WrapperLayout, WrapperPage} from '../emotion/GlobalComponents';
import {BREAD_CRUB_PATHS, STATUS} from '../services/Constant';
import apiSettings from '../services/service';
function Arrival() {
  return (
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title="Solicitudes por orden de llegada"
          breadcrumbs={BREAD_CRUB_PATHS.ARRIVAL}
        />
        <div
          style={{
            padding: '20px',
          }}
        >
          <ListOperador dataTypeS={"Fecha de envio"} requestType={apiSettings.getRequests} />
        </div>
      </WrapperPage>
    </WrapperLayout>
  );
}
export default Arrival;
