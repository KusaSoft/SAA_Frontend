import React, {useState, useEffect} from 'react';
import apiSettings from '../services/service';

const useListMyAssigned = (userID) => {
  const [myAssignedsList, setListMyAssigned] = useState([]);
  const setListMyAssignedData = (data) => {
    setListMyAssigned(data);
  };

  const fechListMyAssigned = async () => {
    const data = await apiSettings.getMyAssignedReservations(userID);
    setListMyAssignedData(data);
  };
  useEffect(() => {
    fechListMyAssigned();
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      fechListMyAssigned();
    }, 6500);
    return () => clearInterval(timer);
  });
  return [myAssignedsList, setListMyAssignedData];
};

export default useListMyAssigned;
