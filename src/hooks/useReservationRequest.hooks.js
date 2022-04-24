import { useState, useEffect } from "react";
const mockTeacher = {
  name: "Corina",
  subject: [
    {
      name_subject: "Taller de Ingenieria de Software",
      group_list: [
        "2, Leticia Blanco",
        "3, David Escalera",
        "4, Patricia Rodriguez",
      ],
    },
    {
      name_subject: "Introducción a la programación",
      group_list: [
        "1, Carla Salazar",
        "2, Leticia Blanco",
        "3, Vladimir Costas",
      ],
    },
  ],
};

const mockNewTeachers = [
  {
    name: "Vladimir",
    group_list: [2],
  },
  {
    name: "Leticia",
    group_list: [3, 5],
  },
];

export const useReservationRequest = () => {
  const [teacher, setTeacher] = useState({});
  const [subjectSelected, setSubjectSelected] = useState("");
  const [group_list, setGroup_list] = useState([]);
  const [subject_list, setSubject_list] = useState(new Map());
  const [sent, setSent] = useState(false);
  const [totalStudents, setTotalStudents] = useState("");
  const [periodIniSelected, setPeriodIniSelected] = useState("");
  const [periodEndSelected, setPeriodEndSelected] = useState("");
  const [motiveRequest, setMotiveRequest] = useState("");
  const [teachers, setTeachers] = useState([]);
  const [teachersSelected, setTeachersSelected] = useState([]);
  const [reservation, setReservation] = useState({});

  const fetchDataTeacher = async () => {
    const response = mockTeacher;
    setTeacher({ name: response.name });
    const subject_list_Map = new Map();
    response.subject.map((subject) => {
      subject_list_Map.set(subject.name_subject, subject.group_list);
    });
    setSubject_list(subject_list_Map);
  };

  const fetchDataTeachers = async (subject) => {
    const response = mockNewTeachers;
    setTeachers(response);
  };

  useEffect(() => {
    fetchDataTeacher();
  }, []);

  useEffect(() => {
    if (subject_list.size > 0) {
    }
  }, [subject_list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setReservation({
      name: e.target.elements.name.value,
      // subject: e.target.elements.subject.value,
      // group: e.target.elements.group.value,
      // total_students: e.target.elements.total_students.value,
      // period_ini: e.target.elements.period_ini.value,
      // period_end: e.target.elements.period_end.value,
      // motive: e.target.elements.motive.value,
    });
  };

  const handleChangeSubject = (e) => {
    setSubjectSelected(e.target.value);
    setGroup_list([]);
    fetchDataTeachers();
    setTeachersSelected([]);
  };

  const handleChangeGroup = (e) => {
    const {
      target: { value },
    } = e;
    setGroup_list(typeof value === "string" ? value.split(",") : value);
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
    setTeachersSelected([...teachersSelected] + e.target.value);
  };

  const handleMotiveRequest = (e) => {
    setMotiveRequest(e.target.value);
  };

  return {
    teacher,
    subjectSelected,
    group_list,
    subject_list,
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
    teachersSelected,
    handleTeachersSelected,
    teachers,
  };
};
