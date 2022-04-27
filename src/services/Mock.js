export const mockTeacher = {
  name: "Corina Flores Villarroel",
  subject: [
    {
      name_subject: "Introducción a la programación",
      group_list: ["7, Corina Flores Villarroel"],
    },
    {
      name_subject: "Taller de Ingenieria de Software",
      group_list: [
        "2, Corina Flores Villarroel",
        "3, Corina Flores Villarroel",
      ],
    },
  ],
};

export const mockNewTeachersIntro = [
  "1, Carla Salazar Serrudo",
  "2, Leticia Blanco Coca",
  "3, Hernan Ustariz Vargas",
  "4, Henry Frank Villarroel Tapia",
  "5, Victor Hugo Montaño Quiroga",
  "6, Carla Salazar Serrudo",
  "10, Vladimir Abel Costas Jauregui",
];

export const mockReservationRequest = {
  id: "1",
  name: "Corina Flores Villarroel",
  subject: "Introducción a la programación",
  group_list: ["7, Corina Flores Villarroel"],
  horario_ini: "03:45",
  horario_end: "05:15",
  request_reason: "Expresito",
  total_students: "12",
  other_group_list: ["2, Carla Salazar Serrudo", "3, Leticia Blanco Coca"],
};

export const mockLogin = [
  {
    id: "1",
    user: "Corina Flores Villarroel",
    password: "12345",
    email: "corina@gmail.com",
    roles: [1984],
  },
  {
    id: "2",
    user: "Carla Salazar Serrudo",
    password: "12345",
    email: "carla@gmail.com",
    roles: [1984],
  },
];

export const mockListSent = [
  {
    IDreserva: 1,
    namedoc: "leticia",
    materia: "introduccion a la Programacion",
    grupo: "2",
    totalEst: "150",
    motivo:
      "examen     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod,nisl eget consectetur consectetur, erat nisi aliquet nunc, euconsectetur nisl nunc euismod nunc. Nullam euismod, nisl eget    ",
    fecha: "10/10/22",
    horaINI: "09:45",
    horaFin: "12:45",
    grupoOtro: "costasG1",
    status: "sent",
  },
  {
    IDreserva: 2,
    namedoc: "leticia",
    materia: "Elementos de la programacion",
    grupo: "1",
    totalEst: "100",
    motivo: "examen",
    fecha: "20/10/22",
    horaINI: "11:15",
    horaFin: "14:15",
    grupoOtro: "RosemaryG1",
    status: "sent",
  },
  {
    IDreserva: 2,
    namedoc: "leticia",
    materia: "Taller Ingenieria Software",
    grupo: "3",
    totalEst: "15",
    motivo: "examen",
    fecha: "30/10/22",
    horaINI: "11:15",
    horaFin: "12:45",
    grupoOtro: "RosemaryG1",
    status: "sent",
  },
];

export const mockListDraft = [
  {
    IDreserva: 1,
    namedoc: "leticia",
    materia: "introduccion a la Programacion",
    grupo: "2",
    totalEst: "150",
    motivo:
      "examen     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod,nisl eget consectetur consectetur, erat nisi aliquet nunc, euconsectetur nisl nunc euismod nunc. Nullam euismod, nisl eget    ",
    fecha: "10/10/22",
    horaINI: "09:45",
    horaFin: "12:45",
    grupoOtro: "costasG1",
    status: "draft",
  },
  {
    IDreserva: 2,
    namedoc: "leticia",
    materia: "Elementos de la programacion",
    grupo: "1",
    totalEst: "100",
    motivo: "examen",
    fecha: "20/10/22",
    horaINI: "11:15",
    horaFin: "14:15",
    grupoOtro: "RosemaryG1",
    status: "draft",
  },
];

