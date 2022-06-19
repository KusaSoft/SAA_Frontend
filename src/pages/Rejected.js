import React from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import ListOperador from '../components/ListaSolicitud/ListOperador';
import {WrapperLayout, WrapperPage} from '../emotion/GlobalComponents';
import {BREAD_CRUB_PATHS, ORDER_DATE, STATUS} from '../services/Constant';
import apiSettings from '../services/service';
import useAuth from '../hooks/useAuth';
import RejectedCard from '../components/ListaSolicitud/RejectedCard';
import useListMyRejects from '../hooks/useListMyRejects';
function Rejected() {
  const {auth} = useAuth();
  const [listaRechazados] = useListMyRejects();
  return (
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title="Solicitudes rechazadas"
          breadcrumbs={BREAD_CRUB_PATHS.REJECTED}
        />
        <div
          style={{
            padding: '20px',
          }}
        >
          {auth.roles[0] === 'operador' ? (
            <ListOperador
              dataTypeS={'Fecha para la reserva'}
              requestType={apiSettings.getRejectedReservations}
              orderDate={ORDER_DATE.LEJANOS}
            />
          ) : (
            <Lista
              list={listaRechazados ? listaRechazados : []}
              emptyMessage={'No tiene ninguna solicitud rechazada'}
            />
          )}
        </div>
      </WrapperPage>
    </WrapperLayout>
  );
}
export default Rejected;

const Lista = (props) => {
  if (props.list.length !== 0) {
    return (
      <div style={{width: '80%'}}>
        {props.list.map((element) => {
          return (
            <div key={element[0]}>
              <RejectedCard request={element} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>{props.emptyMessage}</div>;
  }
};

const listRejected = [
  {
    id: 3,
    user_id: 2,
    user: 'Corina Flores',
    subject_id: 13,
    subject: 'TYUTWUY&*(((kdsfj',
    classroom_id: 1,
    register_date: '2022-06-07 10:55:49',
    reservation_date: '2022-07-23',
    total_students: '499',
    request_reason: 'Examen',
    horario_ini: '06:45',
    horario_end: '20:15',
    state: 'rejected',
    group_list: '42',
    other_groups: '',
    rejection_reason: 'No se puede por la capacidad solicitada',
    assigned_classrooms: null,
  },
  {
    id: 12,
    user_id: 2,
    user: 'Corina Flores',
    subject_id: 4,
    subject: 'Interaccion Humano Computador',
    classroom_id: 1,
    register_date: '2022-06-16 22:09:20',
    reservation_date: '2022-06-30',
    total_students: '500',
    request_reason: 'Examen',
    horario_ini: '11:15',
    horario_end: '14:15',
    state: 'rejected',
    group_list: '25',
    other_groups: '',
    rejection_reason:
      'No existen aulas disponibles en la hora y fecha seleccionada para esa cantidad de estudiantes bla bla bla bla bla bla bla bla',
    assigned_classrooms: null,
  },
  {
    id: 13,
    user_id: 1,
    user: 'Blanco Coca Leticia',
    subject_id: 2,
    subject: 'Elementos de Programacion Y Estructura De Datos',
    classroom_id: 1,
    register_date: '2022-06-16 22:10:39',
    reservation_date: '2022-07-01',
    total_students: '499',
    request_reason: 'Examen',
    horario_ini: '11:15',
    horario_end: '14:15',
    state: 'rejected',
    group_list: '15',
    other_groups: '17 18 16',
    rejection_reason:
      'No hay aulas disponibles por el numero de estudiantes',
    assigned_classrooms: null,
  },
];
