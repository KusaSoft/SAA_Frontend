import React, {useState, useEffect} from 'react';
import apiSettings from '../services/service';

const useListMyNotifications = (userID) => {
  const [myNotificationsList, setListMyNotifications] = useState([]);
  const setListMyNotificationsData = (data) => {
    setListMyNotifications(data);
  };

  const fechListMyNotifications = async () => {
    const data = await apiSettings.getMyNotifications(userID);
    setListMyNotificationsData(data);
  };
  useEffect(() => {
    fechListMyNotifications();
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      fechListMyNotifications();
    }, 6500);
    return () => clearInterval(timer);
  });
  return [myNotificationsList, setListMyNotificationsData];
};

export default useListMyNotifications;
