import React from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Lista from '../components/ListaSolicitud/Lista';
import useStatusList from '../hooks/useStatusList';
import {STATUS} from '../services/Constant';
function Pendientes() {
  const [value, setValue] = React.useState(0);
  const [sentList] = useStatusList({status: STATUS.SENT});
  const [draftList] = useStatusList({status: STATUS.DRAFT});
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div
      style={{
        background: '#FAFBFC',
        flex: '1',
        width: '100%',
        height: '100%',
        minHeight: '95vh',
      }}
    >
      <BasicBreadcrumbs title="Solicitudes pendientes"></BasicBreadcrumbs>
      <div style={{paddingLeft: '30px', paddingRight: '30px'}}>
        <Lista
          list={sentList ? sentList : []}
          emptyMessage={'No tiene ninguna solicitud pendiente'}
        />
      </div>
    </div>
  );
}
export default Pendientes;
