import React, {useState, useEffect} from 'react';
import apiSettings from '../services/service';

const useListMyRejects = () => {
  const [myRejectsList, setListMyRejects] = useState([]);
  const setListMyRejectsData = (data) => {
    setListMyRejects(data);
  };

  const fechListMyRejects = async () => {
    const data = await apiSettings.getMyRejectedReservations();
    setListMyRejectsData(data);
  };
  useEffect(() => {
    fechListMyRejects();
  }, []);
  return [myRejectsList, setListMyRejectsData];
};

export default useListMyRejects;
