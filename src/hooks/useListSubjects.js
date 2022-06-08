import React, {useState, useEffect} from 'react';
import apiSettings from '../services/service';

const useListSubjects = () => {
  const [subjectsList, setListSubjects] = useState([]);
  const setListSubjectsData = (data) => {
    setListSubjects(data);
  };

  const fechListSubjects = async () => {
    const data = await apiSettings.getSubjectsAll();
    setListSubjectsData(data);
  };
  useEffect(() => {
    fechListSubjects();
  }, []);
  return [subjectsList, setListSubjectsData];
};

export default useListSubjects;
