import React from 'react';
import useAuth from '../hooks/useAuth';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import {WrapperLayout, WrapperPage} from '../emotion/GlobalComponents';
import {BREAD_CRUB_PATHS, ORDER_DATE, STATUS} from '../services/Constant';
import {useParams} from 'react-router-dom';
import ClassroomsAssignation from '../components/classrooms/ClassroomsAssignation';
export default function ClassroomAssigntaion() {
  const {reservationRequest} = useParams();

  return (
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title="Asignacion de aula(s)"
          breadcrumbs={BREAD_CRUB_PATHS.CLASSROOM_ASSIGNATION}
        />
        <ClassroomsAssignation
          request={reservationRequest}
        ></ClassroomsAssignation>
      </WrapperPage>
    </WrapperLayout>
  );
}
