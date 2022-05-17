export const users = [
  {
    id: '1',
    name: 'Juan Matias Perez',
    email: 'juan@gmail.com',
    enabled: 'true',
    role: 'Operador',
  },
  {
    id: '2',
    name: 'Leticia Blanco Coca',
    email: 'leticia@gmail.com',
    enabled: 'true',
    role: 'Docente',
  },
  {
    id: '3',
    name: 'Corina Flores',
    email: 'corina@gmail.com',
    enabled: 'false',
    role: 'Docente',
  },
];

export const invalidDates = {
  from: new Date(),
  to: new Date('06-30-2022'),
  disable: [new Date('06-01-2022'), new Date('07-01-2022')],
};
