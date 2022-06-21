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
  return [allNotificationsList, setListAllNotificationsData];
};

export default useListAllNotifications;
