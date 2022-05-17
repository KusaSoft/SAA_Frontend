import React from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Lista from '../components/ListaSolicitud/Lista';
import {WrapperLayout, WrapperPage} from '../emotion/GlobalComponents';
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
        <div
          style={{
            padding: '20px',
          }}
        >
          <Lista
            list={draftList ? draftList : []}
            emptyMessage={'No tiene ningun borrador'}
          />
        </div>
      </WrapperPage>
    </WrapperLayout>
  );
}
export default Borradores;
