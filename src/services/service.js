import axios from 'axios';
import {availableClassrooms} from './Mock';
const API_URL = 'https://tis-server2.herokuapp.com/api';
const apiSettings = {
  getSubjects: async (userID) => {
    const response = await axios.get(`${API_URL}/subjects/${userID}`);
    const subjects = response.data.map((subject) => {
      return {
        name_subject: subject.subject_name,
        id: subject.id,
      };
    });

    let promises = [];
    subjects.forEach((subject) => {
      let promise = axios.get(`${API_URL}/groups/${subject.id}/${userID}`);
      promises.push(promise);
    });
    const subjectList = await Promise.all(promises);
    const newSubjects = subjects.map((subject, index) => {
      return {
        name_subject: subject.name_subject,
        group_list: subjectList[index].data.map((group) => group),
      };
    });
    return newSubjects;
  },
  getTeachers: async (userID) => {
    const response = await axios.get(`${API_URL}/subjects/${userID}`);
    const subjectsF = response.data.map((subject) => {
      return {
        name_subject: subject.subject_name,
        id: subject.id,
      };
    });
    const subjects = subjectsF.filter((obj, index, subjectsF) => {
      return (
        subjectsF.map((mapObj) => mapObj.id).indexOf(obj.id) === index
      );
    });

    let promises = [];
    subjects.forEach((subject) => {
      let promise = axios.get(
        `${API_URL}/groupsExc/${subject.id}/${userID}`
      );
      promises.push(promise);
    });
    const subjectList = await Promise.all(promises);
    let newSubjects = [];
    subjects.filter((subject, index) => {
      if (
        subjectList[index].data.message !== 'no hay grupos registrados'
      ) {
        console.log(subject.name_subject, '.......');
        const newSubject = {
          name_subject: subject.name_subject,
          group_list: [...subjectList[index].data],
        };
        newSubjects.push(newSubject);
      }
    });
    console.log(newSubjects, 'siiiiiiiiiiiiiiiiiii');
    return newSubjects;
  },

  postReservationRequest: async (reservationRequest) => {
    //post in form data
    const response = await axios.post(
      `${API_URL}/reservation-request`,
      reservationRequest
    );
    console.log(response);
    return response;
  },

  putReservationRequest: async (reservationRequest) => {
    //put in form data
    console.log(reservationRequest);
    let response = await axios.post(
      `${API_URL}/reservation-request/${reservationRequest.id}`,
      reservationRequest
    );
    console.log(response);
    response = {
      error:
        'Lo sentimos, no se pudo realizar la solicitud de reserva!! :(',
      message: 'Lamentalbemente usted tiene una reserva mal planeada',
      data: reservationRequest,
    };
    response = {
      error: '',
      message: 'Reserva fue actualizada correctamente',
      data: reservationRequest,
    };
    return response;
  },

  getReservationRequest: async (reservationRequest) => {
    const response = await axios.get(
      `${API_URL}/reservation/${reservationRequest}`
    );
    return response.data;
  },
  getReservationRequestD: async (reservationRequest) => {
    const response = await axios.get(
      `${API_URL}/reservation/${reservationRequest}`
    );
    return response;
  },

  getStatusList: async (status) => {
    return [];
  },

  login: async (user) => {
    const response = await axios.post(`${API_URL}/login`, user);
    return response.data;
  },

  getRequestStatus: async (userID, status) => {
    const response = await axios.get(
      `${API_URL}/reservation/${userID}/${status}`
    );
    console.log(response);

    // const list = response.data.map((id) => {
    //   return {
    //     id: id.id,
    //     subject: id.subject,
    //     fecha: id.reservation_date,
    //     motivo: id.request_reason,
    //     state: id.state,
    //   };
    // });
    // console.log(list);
    return response.data;
    // return response.data;
  },

  deleteReservationRequest: async (requestID) => {
    const response = await axios.delete(`${API_URL}/draft/${requestID}`);
    return response;
  },
  getRequests: async () => {
    const response = await axios.get(`${API_URL}/test/user_booking`);
    const list = response.data.map((id) => {
      return {...id};
    });
    return list;
  },

  getUsers: async () => {
    const response = await axios.get(`${API_URL}/users`);
    const list = response.data.map((id) => {
      return {...id, label: id.name};
      //return {label: id.name, role: id.role_id===1?(id.role_id):()};
    });
    //const response = users; mock
    return list;
  },

  register: async (user) => {
    const response = await axios.post(`${API_URL}/users`, user);
    return response.data;
  },

  getAllReservations: async () => {
    const response = await axios.get(`${API_URL}/reservations`);
    return response.data;
  },

  getUrgentReservations: async () => {
    const response = await axios.get(`${API_URL}/reservations/urgent`);
    return response.data;
  },

  getAssignedReservations: async () => {
    const response = await axios.get(`${API_URL}/reservations/assigned`);
    return response.data;
  },

  getRejectedReservations: async () => {
    const response = await axios.get(`${API_URL}/reservations/rejected`);
    return response.data;
  },

  getSentReservations: async () => {
    const response = await axios.get(`${API_URL}/reservations/sent`);
    return response.data;
  },

  getGroups: async (subjectIDs) => {
    let promises = [];
    subjectIDs.forEach((subjectID) => {
      let promise = axios.get(`${API_URL}/group/${subjectID}`);
      promises.push(promise);
    });
    const response = await Promise.all(promises);
    const groups = response.map((group) => {
      return group.data;
    });
    return groups;
  },

  enable: async (idUser, cosas) => {
    const response = await axios.put(`${API_URL}/users/${idUser}`, cosas);
    return response.data;
  },

  getClassrooms: async (id) => {
    // const response = await axios.get(
    //   `${API_URL}/classrooms/${reservation_date}/${horario_ini}/${horario_end}`
    // );
    const response = availableClassrooms;
    console.log(response);
    return response;
  },

  getSubjectsAll: async () => {
    const response = await axios.get(`${API_URL}/subjects`);
    const list = response.data.map((id) => {
      //return {...id};
      return {...id, label: id.name_subject, value: id.name_subject};
    });
    //const response = users; mock
    return list;
  },
  getAllGroups: async () => {
    const response = await axios.get(`${API_URL}/subject_user`);
    const list = response.data.map((id) => {
      return {...id};
    });
    //const response = users; mock
    return list;
  },
  registerSubject: async (subject) => {
    const response = await axios.post(`${API_URL}/subjects`, subject);
    return response.data;
  },

  registerGroup: async (group) => {
    const response = await axios.post(`${API_URL}/subject_user`, group);
    return response.data;
  },
  deleteGroup: async (groupID) => {
    const response = await axios.delete(
      `${API_URL}/subject_user/${groupID}`
    );
    return response;
  },
  getTeachersS: async () => {
    const response = await axios.get(`${API_URL}/roles/users/docente`);
    const list = response.data.map((id) => {
      return {label: id.name, ...id};
      //return {label: id.name, role: id.role_id===1?(id.role_id):()};
    });
    //const response = users; mock
    return list;
  },
  putReservationRequest: async (reservationRequest) => {
    const response = await axios.put(
      `${API_URL}/reservations`,
      reservationRequest
    );
    return response;
  },
};

export default apiSettings;
