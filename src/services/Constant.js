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

export const STATUS = {
  SENT: 'sent',
  DRAFT: 'draft',
  REJECTED: 'rejected',
  APPROVED: 'approved',
};

export const ROLES = {
  REVIEWER: 'operador',
  TEACHER: 'docente',
  ADMIN: 'admin',
};

export const PATHS = {
  ROOT: '/',
  LOGIN: '/login',
  UNAUTHORIZED: '/unauthorized',
  USER: '/user',
  USERHOME: 'home',
  USERS: 'users',
  RESERVATION_REQUEST: 'reservationRequest/:reservationRequest',
  RESERVATION_REQUESTS: 'reservationRequest',
  PENDING: 'pendings',
  DRAFTS: 'drafts',
  ARRIVAL: 'firstServedOrder',
  URGENCY: 'urgency',
  RESERVATION_REQUEST_DETAIL:
    'reservationRequest/:reservationRequest/detail',
  RESERVATION_REQUEST_EDIT: 'reservationRequest/:reservationRequest/edit',
};

export const BREAD_CRUB_PATHS = {
  RESERVATION_REQUEST: [
    {
      name: 'Solicitudes de reserva',
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
      route: PATHS.USER,
      link: true,
    },
    {
      name: 'Nuevo usuario',
      route: PATHS.USER,
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

export const ORDER_DATE = {
  PROXIMOS: 'Proximos-Lejanos',
  LEJANOS: 'Lejanos-Proximos',
};
