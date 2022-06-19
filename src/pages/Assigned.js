import React from 'react';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import ListOperador from '../components/ListaSolicitud/ListOperador';
import {WrapperLayout, WrapperPage} from '../emotion/GlobalComponents';
import {BREAD_CRUB_PATHS, ORDER_DATE, STATUS} from '../services/Constant';
import apiSettings from '../services/service';
import useAuth from '../hooks/useAuth';
import AssignedCard from '../components/ListaSolicitud/AssignedCard';
function Assigned() {
  const {auth} = useAuth();
  return (
    <WrapperLayout>
      <WrapperPage>
        <BasicBreadcrumbs
          title="Solicitudes asignadas"
          breadcrumbs={BREAD_CRUB_PATHS.ASSIGNED}
        />
        <div
          style={{
            padding: '20px',
          }}
        >
          {auth.roles[0] === 'operador' ? (
            <ListOperador
              dataTypeS={'Fecha para la reserva'}
              requestType={apiSettings.getAssignedReservations}
              orderDate={ORDER_DATE.LEJANOS}
            />
          ) : (
            <Lista
              list={listAssigned ? listAssigned : []}
              emptyMessage={'No tiene ninguna solicitud asignada'}
            />
          )}
        </div>
      </WrapperPage>
    </WrapperLayout>
  );
}
export default Assigned;

const Lista = (props) => {
  if (props.list.length !== 0) {
    return (
      <div style={{width: '80%'}}>
        {props.list.map((element) => {
          return (
            <div key={element[0]}>
              <AssignedCard request={element} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>{props.emptyMessage}</div>;
  }
};

const listAssigned = [
  {
    id: 1,
    user_id: 2,
    user: 'Corina Flores',
    subject_id: 1,
    subject: 'Introduccion a la programacion',
    classroom_id: 1,
    register_date: '2022-06-07 08:55:35',
    reservation_date: '2022-06-23',
    total_students: '140',
    request_reason: 'Examen',
    horario_ini: '12:45',
    horario_end: '14:15',
    state: 'assigned',
    group_list: '2',
    other_groups: '',
    rejection_reason: null,
    assigned_classrooms: [
      {
        id: 2,
        name_classroom: '690A',
        edifice: 'edificio nuevo',
        floor: 'primera planta',
        amount: 120,
      },
      {
        id: 3,
        name_classroom: '691A',
        edifice: 'edificio nuevo',
        floor: 'primera planta',
        amount: 90,
      },
    ],
  },
  {
    id: 5,
    user_id: 1,
    user: 'Blanco Coca Leticia',
    subject_id: 2,
    subject: 'Elementos de Programacion Y Estructura De Datos',
    classroom_id: 1,
    register_date: '2022-06-10 16:48:06',
    reservation_date: '2022-06-14',
    total_students: '205',
    request_reason: 'Capacitación',
    horario_ini: '14:15',
    horario_end: '17:15',
    state: 'assigned',
    group_list: '14 15',
    other_groups: '16',
    rejection_reason: null,
    assigned_classrooms: [
      {
        id: 2,
        name_classroom: '690A',
        edifice: 'edificio nuevo',
        floor: 'primera planta',
        amount: 120,
      },
    ],
  },
  {
    id: 10,
    user_id: 2,
    user: 'Corina Flores',
    subject_id: 4,
    subject: 'Interaccion Humano Computador',
    classroom_id: 1,
    register_date: '2022-06-15 22:39:05',
    reservation_date: '2022-06-17',
    total_students: '80',
    request_reason: 'Laboratorio',
    horario_ini: '12:45',
    horario_end: '14:15',
    state: 'assigned',
    group_list: '25',
    other_groups: '',
    rejection_reason: null,
    assigned_classrooms: [
      {
        id: 2,
        name_classroom: '690A',
        edifice: 'edificio nuevo',
        floor: 'primera planta',
        amount: 120,
      },
      {
        id: 3,
        name_classroom: '691A',
        edifice: 'edificio nuevo',
        floor: 'primera planta',
        amount: 90,
      },
    ],
  },
  {
    id: 14,
    user_id: 1,
    user: 'Blanco Coca Leticia',
    subject_id: 2,
    subject: 'Elementos de Programacion Y Estructura De Datos',
    classroom_id: 1,
    register_date: '2022-06-16 22:16:56',
    reservation_date: '2022-06-20',
    total_students: '119',
    request_reason: 'Exposición',
    horario_ini: '12:45',
    horario_end: '14:15',
    state: 'assigned',
    group_list: '14',
    other_groups: '16',
    rejection_reason: null,
    assigned_classrooms: [
      {
        id: 3,
        name_classroom: '691A',
        edifice: 'edificio nuevo',
        floor: 'primera planta',
        amount: 90,
      },
    ],
  },
];
