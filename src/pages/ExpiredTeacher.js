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
function ExpiredTeacher() {
  const {auth} = useAuth();
  const [listRejected] = [];
  return (
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title="Solicitudes caducadas"
          breadcrumbs={BREAD_CRUB_PATHS.EXPIRED}
        />
        <MyContainerPage>
          <Lista
            list={listRejected ? listRejected : []}
            emptyMessage={'No tiene ninguna solicitud caducada'}
          />
        </MyContainerPage>
      </WrapperPage>
    </WrapperLayout>
  );
}
export default ExpiredTeacher;

const Lista = (props) => {
  if (props.list.length !== 0) {
    return (
      <MyListBox>
        {/* {props.list.map((element) => {
          return <RejectedCard key={element[0]} request={element} />;
        })} */}
      </MyListBox>
    );
  } else {
    return <div>{props.emptyMessage}</div>;
  }
};
