import React from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import ListOperador from '../components/ListaSolicitud/ListOperador';
import {
  WrapperLayout,
  WrapperPage,
} from '../emotion/GlobalComponents';
import useUrgencyList from '../hooks/useUrgencyList';
import {BREAD_CRUB_PATHS, STATUS} from '../services/Constant';
function Urgency() {
  const [sentList] = useUrgencyList({status: STATUS.SENT});

  return (
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title="Solicitudes urgentes"
          breadcrumbs={BREAD_CRUB_PATHS.URGENCY}
        />
        <div style={{paddingLeft: '30px', paddingRight: '30px'}}>
          <ListOperador list={sentList ? sentList : []} />
        </div>
      </WrapperPage>
    </WrapperLayout>
  );
}
export default Urgency;
