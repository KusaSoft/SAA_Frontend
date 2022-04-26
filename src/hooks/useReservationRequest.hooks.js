import { useState, useEffect } from "react";
import { PERIODSRANGE } from "../services/Constant";
import {
  mockNewTeachersIntro,
  mockTeacher,
  mockReservationRequest,
} from "../services/Mock";
import apiSettings from "../services/service";
import DateController from "../utilities/DateController";
import useAuth from "./useAuth";

export const useReservationRequest = ({ request, user }) => {
  const [teacher, setTeacher] = useState({});
  const [subjectSelected, setSubjectSelected] = useState("");
  const [myGroupList, setGroupList] = useState([]);
  const [subjectList, setSubjectList] = useState(new Map());
  const [sent, setSent] = useState(false);
  const [totalStudents, setTotalStudents] = useState("");
  const [periodIniSelected, setPeriodIniSelected] = useState("");
  const [periodEndSelected, setPeriodEndSelected] = useState("");
  const [motiveRequest, setMotiveRequest] = useState("");
  const [teachers, setTeachers] = useState([]);
  const [otherGroupList, setOtherGroupList] = useState([]);
  const [dateReservation, setDateReservation] = useState(new Date());
  const [reservationRequest, setReservationRequest] = useState({});
  const [allFilled, setAllFilled] = useState(false);
  const fetchDataTeacher = async () => {
    const response = await apiSettings.getSubjects(user.id);
    setTeacher({ name: user.user });
    const subjectListMap = new Map();
    response.map((subject) => {
      subjectListMap.set(subject.name_subject, subject.group_list);
    });
    setSubjectList(subjectListMap);
  };

  const fetchDataReservationRequest = async () => {
    if (request !== "new") {
      const response = mockReservationRequest;
      setTeacher({ name: response.name });
      setPeriodIniSelected(response.horario_ini);
      setPeriodEndSelected(response.horario_end);
      setMotiveRequest(response.request_reason);
      setTotalStudents(response.total_students);
      setSubjectSelected(response.subject);
      setGroupList(response.group_list);
      setOtherGroupList(response.other_group_list);
      setReservationRequest(response);
      setSubjectList(response.subject_list);
    }
  };

  const fetchDataTeachers = async () => {
    const response = await apiSettings.getTeachers(user.id);
    const subjectListMap = new Map();
    response.map((subject) => {
      subjectListMap.set(subject.name_subject, subject.group_list);
    });
    setTeachers(subjectListMap);
  };

  useEffect(() => {
    fetchDataReservationRequest();
    fetchDataTeacher();
    fetchDataTeachers();
  }, []);

  useEffect(() => {
    if (
      subjectSelected !== "" &&
      totalStudents !== "" &&
      periodIniSelected !== "" &&
      periodEndSelected !== "" &&
      motiveRequest !== "" &&
      dateReservation !== "" &&
      myGroupList.length > 0
    ) {
      setAllFilled(true);
    } else {
      setAllFilled(false);
    }
  }, [
    subjectSelected,
    periodIniSelected,
    periodEndSelected,
    totalStudents,
    motiveRequest,
    myGroupList,
    dateReservation,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    const id = request !== "new" ? request : "";

    if (
      periodEndSelected !== "" &&
      periodIniSelected !== "" &&
      subjectSelected !== "" &&
      totalStudents !== "" &&
      motiveRequest !== "" &&
      myGroupList.length > 0 &&
      dateReservation !== ""
    ) {
      setReservationRequest({
        id: id,
        name: teacher.name,
        subject: subjectSelected,
        teacher_list: otherGroupList,
        total_students: totalStudents,
        horario_ini: periodIniSelected,
        horario_fin: periodEndSelected,
        request_reason: motiveRequest,
        group: myGroupList,
        state: "sent",
      });
      apiSettings.postReservationRequest({
        id: id,
        name: teacher.name,
        subject: subjectSelected,
        teacher_list: otherGroupList,
        total_students: totalStudents,
        horario_ini: periodIniSelected,
        horario_fin: periodEndSelected,
        request_reason: motiveRequest,
        group: myGroupList,
        state: "sent",
      });
    }
  };

  const handleSaveSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    const id = request !== "new" ? request : "";
    setReservationRequest({
      id: id,
      name: teacher.name,
      subject: subjectSelected,
      teacher_list: otherGroupList,
      total_students: totalStudents,
      horario_ini: periodIniSelected,
      horario_fin: periodEndSelected,
      request_reason: motiveRequest,
      group: myGroupList,
    });
  };

  const handleChangeSubject = (e) => {
    setSubjectSelected(e.target.value);
    setGroupList([]);
    fetchDataTeachers();
    setOtherGroupList([]);
  };

  const handleChangeGroup = (e) => {
    const {
      target: { value },
    } = e;
    setGroupList(typeof value === "string" ? value.split(",") : value);
  };

  const handleChangeTotalStudents = (e) => {
    setTotalStudents(e.target.value);
  };

  const handleChangePeriodIni = (e) => {
    setPeriodIniSelected(e.target.value);
  };
  const handleChangePeriodEnd = (e) => {
    setPeriodEndSelected(e.target.value);
  };

  const handleTeachersSelected = (e) => {
    const {
      target: { value },
    } = e;
    setOtherGroupList(typeof value === "string" ? value.split(",") : value);
  };

  const handleDeleteTeachersSelected = (e) => {
    setOtherGroupList(otherGroupList.filter((item) => item !== e));
  };

  const handleDeleteMyGroup = (e) => {
    setGroupList(myGroupList.filter((item) => item !== e));
  };
  const handleMotiveRequest = (e) => {
    setMotiveRequest(e);
  };

  const handleChangeDate = (e) => {
    setDateReservation(e);
  };

  return {
    teacher,
    subjectSelected,
    myGroupList,
    subjectList,
    sent,
    handleSubmit,
    handleChangeSubject,
    handleChangeGroup,
    totalStudents,
    handleChangeTotalStudents,
    periodIniSelected,
    periodEndSelected,
    handleChangePeriodIni,
    handleChangePeriodEnd,
    motiveRequest,
    handleMotiveRequest,
    otherGroupList,
    handleTeachersSelected,
    teachers,
    handleDeleteTeachersSelected,
    handleDeleteMyGroup,
    handleSaveSubmit,
    dateReservation,
    handleChangeDate,
    allFilled,
  };
};
