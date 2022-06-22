import React from 'react';
import {useParams} from 'react-router-dom';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Forward from '../components/FormSolicitud/resolicitud';
import Solicitud from '../components/FormSolicitud/solicitud';
import {WrapperLayout, WrapperPage} from '../emotion/GlobalComponents';
import {BREAD_CRUB_PATHS} from '../services/Constant';

export default function ReservationForward() {
  const {reservationRequest} = useParams();
  return (
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title="Reenvio de solicitud de reserva"
          breadcrumbs={BREAD_CRUB_PATHS.RESERVATION_FORWARD}
        />
        <Forward reservationRequest={reservationRequest} />
      </WrapperPage>
    </WrapperLayout>
  );
}
