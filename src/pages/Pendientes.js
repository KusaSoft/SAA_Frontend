import React from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Lista from '../components/ListaSolicitud/Lista';
import {
  WrapperLayout,
  WrapperPage,
} from '../emotion/GlobalComponents';
import useStatusList from '../hooks/useStatusList';
import {BREAD_CRUB_PATHS, STATUS} from '../services/Constant';

function Pendientes() {
  const [value, setValue] = React.useState(0);
  const [sentList] = useStatusList({status: STATUS.SENT});
  const [draftList] = useStatusList({status: STATUS.DRAFT});
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title="Solicitudes pendientes"
          breadcrumbs={BREAD_CRUB_PATHS.PENDING}
        />
        <div style={{paddingLeft: '30px', paddingRight: '30px'}}>
          <Lista
            list={sentList ? sentList : []}
            emptyMessage={'No tiene ninguna solicitud pendiente'}
          />
        </div>
      </WrapperPage>
    </WrapperLayout>
  );
}
export default Pendientes;
