import axios from "axios";
import AuthContext from "../contexts/AuthProvider";
import { useRef, useState, useContext } from "react";

const API_URL = "https://tis-server2.herokuapp.com/api";
const LOGIN_URL = "https://tis-server2.herokuapp.com/api";
const apiSettings = {
  getSubjects: async (userID) => {
    const response = await axios.get(`${API_URL}/subjects/${userID}`);
    const subjects = response.data.map((subject) => {
      return { name_subject: subject.subject_name, id: subject.id };
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
      return { name_subject: subject.subject_name, id: subject.id };
    });

    let promises = [];
    subjects.forEach((subject) => {
      let promise = axios.get(`${API_URL}/groupsExc/${subject.id}/${userID}`);
      promises.push(promise);
    });
    const subjectList = await Promise.all(promises);
    let newSubjects = [];
    subjects.filter((subject, index) => {
      if (subjectList[index].data.message !== "no hay grupos registrados") {
        const newSubject = {
          name_subject: subject.name_subject,
          group_list: { ...subjectList[index].data[0] },
        };
        newSubjects.push(newSubject);
      }
    });
    console.log(newSubjects, "siiiiiiiiiiiiiiiiiii");
    return newSubjects;
  },

  postReservationRequest: async (reservationRequest) => {
    //post in form data
    console.log(reservationRequest);
    let response = await axios.post(
      `${API_URL}/reservation-request`,
      reservationRequest
    );
    response = {
      error: "Lo sentimos, no se pudo realizar la solicitud de reserva!! :(",
      message: "Lamentalbemente usted tiene una reserva mal planeada",
      data: reservationRequest,
    };
    response = {
      error: "",
      message: "Reserva creada correctamente",
      data: reservationRequest,
    };
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
      error: "Lo sentimos, no se pudo realizar la solicitud de reserva!! :(",
      message: "Lamentalbemente usted tiene una reserva mal planeada",
      data: reservationRequest,
    };
    response = {
      error: "",
      message: "Reserva fue actualizada correctamente",
      data: reservationRequest,
    };
    return response;
  },

  getReservationRequest: async (reservationRequest) => {
    const response = await axios.get(
      `${API_URL}/reservation/${reservationRequest}`
    );
    console.log(response.data);
    return response.data;
  },

  getStatusList: async (status) => {
    return [];
  },
};

export default apiSettings;
