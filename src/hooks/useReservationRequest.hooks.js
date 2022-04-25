import { useState, useEffect } from "react";
import { mockNewTeachersIntro, mockTeacher } from "../services/Mock";

export const useReservationRequest = () => {
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
  const [reservationRequest, setReservationRequest] = useState({});
  const [anotherMotive, setAnotherMotive] = useState("");

  const fetchDataTeacher = async () => {
    const response = mockTeacher;
    setTeacher({ name: response.name });
    const subjectListMap = new Map();
    response.subject.map((subject) => {
      subjectListMap.set(subject.name_subject, subject.group_list);
    });
    setSubjectList(subjectListMap);
  };

  const fetchDataTeachers = async (subject) => {
    const response = mockNewTeachersIntro;
    setTeachers(response);
  };

  useEffect(() => {
    fetchDataTeacher();
  }, []);

  useEffect(() => {
    if (subjectList.size > 0) {
    }
  }, [subjectList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setReservationRequest({
      name: teacher.name,
      subject: subjectSelected,
      teacher_list: myGroupList,
      totalStudents: totalStudents,
      horario_ini: periodIniSelected,
      horario_fin: periodEndSelected,
      request_reason: motiveRequest,
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

  const handleMotiveRequest = (e) => {
    setMotiveRequest(e.target.value);
  };

  const handleAnotherMotiveRequest = (e) => {
    setAnotherMotive(e.target.value);
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
    handleAnotherMotiveRequest,
    anotherMotive,
  };
};
