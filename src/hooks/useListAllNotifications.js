import React, {useState, useEffect} from 'react';
import apiSettings from '../services/service';

const useListAllNotifications = (userID) => {
  const [allNotificationsList, setListAllNotifications] = useState([]);
  const setListAllNotificationsData = (data) => {
    setListAllNotifications(data);
  };

  const fechListAllNotifications = async () => {
    const data = await apiSettings.getAllNotifications(userID);
    setListAllNotificationsData(data);
  };
  useEffect(() => {
    fechListAllNotifications();
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      fechListAllNotifications();
    }, 6500);
    return () => clearInterval(timer);
  });
  return [allNotificationsList, setListAllNotificationsData];
};

export default useListAllNotifications;
