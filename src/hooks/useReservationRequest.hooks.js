import { useState, useEffect } from "react";
const mockTeacher = {
  name: "Leticia",
  subject: [
    {
      name_subject: "Elementos",
      group_list: [1, 4],
    },
    {
      name_subject: "Introducción a la programación",
      group_list: [1, 6, 4],
    },
  ],
};

export const useReservationRequest = () => {
  const [teacher, setTeacher] = useState({});
  const [subjectSelected, setSubjectSelected] = useState("");
  const [group_list, setGroup_list] = useState([]);
  const [subject_list, setSubject_list] = useState(new Map());
  const [sent, setSent] = useState(false);
  const [totalStudents, setTotalStudents] = useState(0);
  const [periodSelected, setPeriodSelected] = useState("");
  const fetchDataTeacher = async () => {
    const response = mockTeacher;
    setTeacher({ name: response.name });
    const subject_list_Map = new Map();
    response.subject.map((subject) => {
      subject_list_Map.set(subject.name_subject, subject.group_list);
    });
    setSubject_list(subject_list_Map);
    console.log(mockTeacher, teacher, subject_list);
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
  };

  const handleChangeSubject = (e) => {
    setSubjectSelected(e.target.value);
    setGroup_list([]);
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

  const handleChangePeriod = (e) => {
    setPeriodSelected(e.target.value);
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
    periodSelected,
    handleChangePeriod,
  };
};
