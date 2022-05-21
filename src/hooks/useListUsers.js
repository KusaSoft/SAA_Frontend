import React, {useState, useEffect} from 'react';
import apiSettings from '../services/service';

const useListUsers = () => {
  const [usersList, setListUsers] = useState([]);
  const setListUsersData = (data) => {
    setListUsers(data);
  };

  const fechListUsers = async () => {
    const data = await apiSettings.getUsers();
    setListUsersData(data);
  };
  useEffect(() => {
    fechListUsers();
  }, []);
  return [usersList, setListUsersData];
};

export default useListUsers;
