import React from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Lista from '../components/ListaSolicitud/Lista';
import {MyContainerPage, WrapperLayout, WrapperPage} from '../emotion/GlobalComponents';
import useStatusList from '../hooks/useStatusList';
import {BREAD_CRUB_PATHS, STATUS} from '../services/Constant';
function Borradores() {
  const [draftList] = useStatusList({status: STATUS.DRAFT});
  return (
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title="Solicitudes en borrador"
          breadcrumbs={BREAD_CRUB_PATHS.DRAFTS}
        />
        <MyContainerPage>
          <Lista
            list={draftList ? draftList : []}
            emptyMessage={'No tiene ningun borrador'}
          />
        </MyContainerPage>
      </WrapperPage>
    </WrapperLayout>
  );
}
export default Borradores;
