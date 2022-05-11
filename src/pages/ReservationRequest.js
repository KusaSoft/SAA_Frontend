import React from 'react';
import {useParams} from 'react-router-dom';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Solicitud from '../components/FormSolicitud/solicitud';

export default function ReservationRequest() {
  const {reservationRequest} = useParams();
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
      <BasicBreadcrumbs title="Solicitud de reserva"></BasicBreadcrumbs>
      <Solicitud reservationRequest={reservationRequest} />
    </div>
  );
}
