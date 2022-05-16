import axios from 'axios';
import {users} from './Mock';

const API_URL = 'https://tis-server2.herokuapp.com/api';
const LOGIN_URL = 'https://tis-server2.herokuapp.com/api';
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
    const subjects = response.data.map((subject) => {
      return {
        name_subject: subject.subject_name,
        id: subject.id,
      };
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
        const newSubject = {
          name_subject: subject.name_subject,
          group_list: {...subjectList[index].data[0]},
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
    const response = await axios.post(`${LOGIN_URL}/login`, user);
    return response.data;
  },

  getRequestStatus: async (userID, status) => {
    const response = await axios.get(
      `${API_URL}/reservation/${userID}/${status}`
    );
    console.log(response);

    const list = response.data.map((id) => {
      return {
        id: id.id,
        subject: id.subject,
        fecha: id.reservation_date,
        motivo: id.request_reason,
        state: id.state,
      };
    });
    console.log(list);
    return list;
    // return response.data;
  },

  deleteReservationRequest: async (requestID) => {
    const response = await axios.delete(`${API_URL}/draft/${requestID}`);
    return response;
  },
  getRequests: async () => {
    const response = await axios.get(`${API_URL}/test/user_booking`);
    console.log(response);
    const list = response.data.map((id) => {
      return {...id};
    });
    return list;
  },

  getUsers: async () => {
    // const response = await axios.get(`${API_URL}/users`);
    const response = users;
    // return response.data;
    return response;
  },

  getAllReservations: async () => {
    const response = await axios.get(`${API_URL}/reservations`);
    return response.data;
  },
  getUrgentReservations: async () => {
    const response = await axios.get(`${API_URL}/reservations/urgent`);
    return response.data;
  },
};

export default apiSettings;
