import React from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import {
  MyContainerPage,
  MyListBox,
  WrapperLayout,
  WrapperPage,
} from '../emotion/GlobalComponents';
import {BREAD_CRUB_PATHS, ORDER_DATE, STATUS} from '../services/Constant';
import apiSettings from '../services/service';
import useAuth from '../hooks/useAuth';
import RejectedCard from '../components/ListaSolicitud/RejectedCard';
import useListMyRejects from '../hooks/useListMyRejects';
function RejectedTeacher() {
  const {auth} = useAuth();
  const [listRejected] = useListMyRejects(auth.id);
  return (
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title="Solicitudes rechazadas"
          breadcrumbs={BREAD_CRUB_PATHS.REJECTED}
        />
        <MyContainerPage>
          <Lista
            list={listRejected ? listRejected : []}
            emptyMessage={'No tiene ninguna solicitud rechazada'}
          />
        </MyContainerPage>
      </WrapperPage>
    </WrapperLayout>
  );
}
export default RejectedTeacher;

const Lista = (props) => {
  if (props.list.length !== 0) {
    return (
      <MyListBox>
        {props.list.map((element) => {
          return <RejectedCard key={element[0]} request={element} />;
        })}
      </MyListBox>
    );
  } else {
    return <div>{props.emptyMessage}</div>;
  }
};
