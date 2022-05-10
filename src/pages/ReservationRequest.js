import React from 'react';
import {useParams} from 'react-router-dom';
import Solicitud from '../components/FormSolicitud/solicitud';

export default function ReservationRequest() {
  const {reservationRequest} = useParams();
  return (
    <div
      style={{
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        background: '#FAFBFC',
        height: '100%',
        width: '100%',
        minHeight: '90vh',
      }}
    >
      <Solicitud reservationRequest={reservationRequest} />
    </div>
  );
}
