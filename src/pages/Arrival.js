import React from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import ListOperador from '../components/ListaSolicitud/ListOperador';
import {
  WrapperLayout,
  WrapperPage,
} from '../emotion/GlobalComponents';
import useUrgencyList from '../hooks/useUrgencyList';
import {BREAD_CRUB_PATHS, STATUS} from '../services/Constant';
function Arrival() {
  const [sentList] = useUrgencyList({status: STATUS.SENT});

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
          <ListOperador list={sentList ? sentList : []} />
        </div>
      </WrapperPage>
    </WrapperLayout>
  );
}
export default Arrival;
