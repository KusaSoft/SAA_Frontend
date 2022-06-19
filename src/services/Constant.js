export const PERIODSRANGE = [
  '06:45',
  '08:15',
  '09:45',
  '11:15',
  '12:45',
  '14:15',
  '15:45',
  '17:15',
  '18:45',
  '20:15',
  '21:45',
];

export const MOTIVES = [
  'Examen',
  'Exposición',
  'Capacitación',
  'Laboratorio',
  'Simulacro',
  'Otros',
];

export const FLOORS = {
  CERO: 'Planta baja',
  ONE: 'Primera planta',
  SECOND: 'Segunda planta',
  THIRD: 'Tercera planta',
  FOURTH: 'Cuarta planta',
};

export const STATUS = {
  SENT: 'sent',
  DRAFT: 'draft',
  REJECTED: 'rejected',
  ASSIGNED: 'assigned',
};

export const ROLES = {
  REVIEWER: 'operador',
  TEACHER: 'docente',
  ADMIN: 'administrador',
};

export const PATHS = {
  ROOT: '/',
  LOGIN: '/login',
  UNAUTHORIZED: '/unauthorized',
  USER: '/user',
  NEW_USER: '/user/users/newUser',
  USERHOME: 'home',
  USERS: 'users',
  RESERVATION_REQUEST: 'reservationRequest/:reservationRequest',
  RESERVATION_FORWARD: 'reservationForward/:reservationRequest',
  RESERVATION_REQUESTS: 'reservationRequest',
  RESERVATION_FORWARDS: 'reservationForward',
  PENDING: 'pendings',
  DRAFTS: 'drafts',
  ARRIVAL: 'firstServedOrder',
  URGENCY: 'urgency',
  ASSIGNED: 'assigned',
  REJECTED: 'rejected',
  REJECTED_RES: '/user/rejected',
  RESERVATION_REQUEST_DETAIL:
    'reservationRequest/:reservationRequest/detail',
  RESERVATION_REQUEST_EDIT: 'reservationRequest/:reservationRequest/edit',
  CLASSROOM_ASSIGNATION:
    'reservationRequest/:reservationRequest/classroomAssignation',
  CALENDAR: 'calendar',
  SUBJECTS: 'subjects',
  GROUPS: 'groups',
  NOTIFICATIONS: 'notifications',
};

export const BREAD_CRUB_PATHS = {
  RESERVATION_REQUEST: [
    {
      name: 'Solicitudes de reserva',
      route: `${PATHS.RESERVATION_REQUESTS}/new`,
      link: false,
    },
  ],
  RESERVATION_FORWARD: [
    {
      name: 'Solicitudes',
      route: PATHS.REJECTED,
      link: false,
    },
    {
      name: 'Rechazados',
      route: PATHS.REJECTED_RES,
      link: true,
    },
    {
      name: 'Reenvio de solicitud de reserva',
      route: `${PATHS.RESERVATION_REQUESTS}/new`,
      link: false,
    },
  ],
  DRAFTS: [
    {
      name: 'Solicitudes',
      route: PATHS.DRAFTS,
      link: false,
    },
    {
      name: 'Borradores',
      route: PATHS.DRAFTS,
      link: false,
    },
  ],
  PENDING: [
    {
      name: 'Solicitudes',
      route: PATHS.PENDING,
      link: false,
    },
    {
      name: 'Pendientes',
      route: PATHS.PENDING,
      link: false,
    },
  ],

  ARRIVAL: [
    {
      name: 'Solicitudes',
      route: PATHS.ARRIVAL,
      link: false,
    },
    {
      name: 'Por orden de llegada',
      route: PATHS.ARRIVAL,
      link: false,
    },
  ],
  REJECTED: [
    {
      name: 'Solicitudes',
      route: PATHS.REJECTED,
      link: false,
    },
    {
      name: 'Rechazados',
      route: PATHS.REJECTED,
      link: false,
    },
  ],
  ASSIGNED: [
    {
      name: 'Solicitudes',
      route: PATHS.ASSIGNED,
      link: false,
    },
    {
      name: 'Asignados',
      route: PATHS.ASSIGNED,
      link: false,
    },
  ],
  URGENCY: [
    {
      name: 'Solicitudes',
      route: PATHS.URGENCY,
      link: false,
    },
    {
      name: 'Por urgencia',
      route: PATHS.URGENCY,
      link: false,
    },
  ],
  USERS: [
    {
      name: 'Usuarios',
      route: PATHS.USERS,
      link: false,
    },
  ],
  NEW_USER: [
    {
      name: 'Usuarios',
      route: `${PATHS.USER}/${PATHS.USERS}`,
      link: true,
    },
    {
      name: 'Nuevo usuario',
      route: PATHS.NEW_USER,
      link: false,
    },
  ],
  CLASSROOM_ASSIGNATION: [
    {
      name: 'Solicitudes',
      route: PATHS.CLASSROOM_ASSIGNATION,
      link: false,
    },
    {
      name: 'Asignación de aula',
      route: PATHS.CLASSROOM_ASSIGNATION,
      link: false,
    },
  ],
  CALENDAR: [
    {
      name: 'Calendario Académico',
      route: PATHS.CALENDAR,
      link: false,
    },
  ],
  SUBJECTS: [
    {
      name: 'Materias',
      route: PATHS.SUBJECTS,
      link: false,
    },
  ],
  GROUPS: [
    {
      name: 'Grupos',
      route: PATHS.GROUPS,
      link: false,
    },
  ],
  NOTIFICATIONS: [
    {
      name: 'Notificaciones',
      route: PATHS.NOTIFICATIONS,
      link: false,
    },
  ],
};

export const ERRORFORM = {
  emptyMessage: 'El campo es obligatorio',
  saveMessage: 'Para guardar, este campo es obligatorio',
  subject: {
    isEmpty: false,
    isUnsaveable: false,
  },
  mygroup: {
    isEmpty: false,
  },
  totalStudents: {
    isEmpty: false,
  },
  motive: {
    isEmpty: false,
    isUnsaveable: false,
  },
  date: {
    isError: false,
    isEmpty: false,
    message: 'La fecha ingresada no esta permitida',
  },
  iniPeriod: {
    isEmpty: false,
    isError: false,
    message: 'La hora de inicio debe ser menor a la hora de fin',
  },
  endPeriod: {
    isEmpty: false,
    isError: false,
    message: 'La hora de fin debe ser mayor a la hora de inicio',
  },
};

export const ROLS = [
  {
    value: 'Docente',
    label: 'Docente',
  },
  {
    value: 'Operador',
    label: 'Operador',
  },
  {
    value: 'Administrador',
    label: 'Administrador',
  },
];

export const ORDER_DATE = {
  PROXIMOS: 'Proximos-Lejanos',
  LEJANOS: 'Lejanos-Proximos',
};
