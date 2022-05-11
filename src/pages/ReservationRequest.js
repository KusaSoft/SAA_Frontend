import React from 'react';
import {useParams} from 'react-router-dom';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Solicitud from '../components/FormSolicitud/solicitud';
import {
  WrapperLayout,
  WrapperPage,
} from '../emotion/GlobalComponents';
import {BREAD_CRUB_PATHS} from '../services/Constant';

export default function ReservationRequest() {
  const {reservationRequest} = useParams();
  return (
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title="Solicitud de reserva"
          breadcrumbs={BREAD_CRUB_PATHS.RESERVATION_REQUEST}
        />
        <Solicitud reservationRequest={reservationRequest} />
      </WrapperPage>
    </WrapperLayout>
  );
}
