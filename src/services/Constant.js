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

export const MOTIVES = ['Examen', 'Exposición', 'Capacitación'];

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
  RESERVATION_REQUEST_EDIT:
    'reservationRequest/:reservationRequest/edit',
};
