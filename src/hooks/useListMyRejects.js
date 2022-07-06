import React, {useState, useEffect} from 'react';
import apiSettings from '../services/service';

const useListMyRejects = (userID) => {
  const [myRejectsList, setListMyRejects] = useState([]);
  const setListMyRejectsData = (data) => {
    setListMyRejects(data);
  };

  const fechListMyRejects = async () => {
    const data = await apiSettings.getMyRejectedReservations(userID);
    setListMyRejectsData(data);
  };
  useEffect(() => {
    fechListMyRejects();
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      fechListMyRejects();
    }, 6500);
    return () => clearInterval(timer);
  });
  return [myRejectsList, setListMyRejectsData];
};

export default useListMyRejects;
