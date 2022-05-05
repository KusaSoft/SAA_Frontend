export const PERIODSRANGE = [
  "06:00",
  "06:45",
  "07:30",
  "08:15",
  "09:00",
  "09:45",
  "10:30",
  "11:15",
  "12:00",
  "12:45",
  "13:30",
  "14:15",
  "15:00",
  "15:45",
  "16:30",
  "17:15",
  "18:00",
  "18:45",
  "19:30",
  "20:15",
  "21:00",
  "21:45",
];

export const MOTIVES = ["Examen", "Exposición", "Capacitación"];

export const STATUS = {
  SENT: "sent",
  DRAFT: "draft",
  REJECTED: "rejected",
  APPROVED: "approved",
};

export const ROLES = {
         REVIEWER: "operador",
         TEACHER: "docente",
         ADMIN: "admin",
};

export const PATHS = {
  ROOT: "/",
  LOGIN: "/login",
  UNAUTHORIZED: "/unauthorized",
  USER: "/user",
  USERHOME: "home",
  USERS: "users",
  RESERVATION_REQUEST: "reservationRequest/:reservationRequest",
  RESERVATION_REQUESTS: "reservationRequest",
  PENDING:"pendings",
  DRAFTS:"drafts",
  ARRIVAL: "firstServedOrder",
  URGENCY: "urgency",
  RESERVATION_REQUEST_DETAIL: "reservationRequest/:reservationRequest/detail",
  RESERVATION_REQUEST_EDIT: "reservationRequest/:reservationRequest/edit",

};


