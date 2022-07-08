import React from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Lista from '../components/ListaSolicitud/Lista';
import {
  MyContainerPage,
  WrapperLayout,
  WrapperPage,
} from '../emotion/GlobalComponents';
import useStatusList from '../hooks/useStatusList';
import {BREAD_CRUB_PATHS, STATUS} from '../services/Constant';

function Pendientes() {
  const [sentList] = useStatusList({status: STATUS.SENT});
  return (
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title="Solicitudes pendientes"
          breadcrumbs={BREAD_CRUB_PATHS.PENDING}
        />
        <MyContainerPage>
          <Lista
            list={sentList ? sentList : []}
            emptyMessage={'No tiene ninguna solicitud pendiente'}
          />
        </MyContainerPage>
      </WrapperPage>
    </WrapperLayout>
  );
}
export default Pendientes;
