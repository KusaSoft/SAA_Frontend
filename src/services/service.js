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
        group_list: subjectList[index].data.map((group) => group.group),
      };
    });
    console.log(newSubjects);
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

    const newSubjects = subjects.map((subject, index) => {
      return {
        name_subject: subject.name_subject,
        group_list: subjectList[index].data.map((group) => group.group),
      };
    });
    console.log(newSubjects);
    return newSubjects;
  },

  postReservationRequest: async (reservationRequest) => {
    //post in form data
    console.log(reservationRequest);
    const response = await axios.post(
      `${API_URL}/reservation-request`,
      reservationRequest
    );
  },
};

export default apiSettings;
