import React, {useState, useEffect} from 'react';
import apiSettings from '../services/service';

const useListTeachers = () => {
  const [teachersList, setListTeachers] = useState([]);
  const setListTeachersData = (data) => {
    setListTeachers(data);
  };

  const fechListTeachers = async () => {
    const data = await apiSettings.getTeachersS();
    setListTeachersData(data);
  };
  useEffect(() => {
    fechListTeachers();
  }, []);
  return [teachersList, setListTeachersData];
};

export default useListTeachers;
