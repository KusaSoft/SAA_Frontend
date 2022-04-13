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
      group_list: [1, 4],
    },
  ],
};

export const useReservationRequest = () => {
  const [teacher, setTeacher] = useState({});
  const [subjectSelected, setSubjectSelected] = useState("");
  const [group_list, setGroup_list] = useState([]);
  const [subject_list, setSubject_list] = useState(new Map());
  const [sent, setSent] = useState(false);

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
      console.log(subject_list.get("Elementos"));
    }
  }, [subject_list]);

  const handleChange = (e) => {
    setSubjectSelected(e.target.value);
    setGroup_list(subject_list.get(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (e.target.value === "") {
    //   alert("Llene todos los campos");
    // } else {
    setSent(true);
    // }
  };

  const handleChangeSubject = (e) => {
    setSubject_list(e.target.value);
  };

  const handleChangeGroup = (e) => {
    setGroup_list(e.target.value);
  };

  return {
    teacher,
    subjectSelected,
    group_list,
    subject_list,
    sent,
    handleChange,
    handleSubmit,
    handleChangeSubject,
    handleChangeGroup,
  };
};
