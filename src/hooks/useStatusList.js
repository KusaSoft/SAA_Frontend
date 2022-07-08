import React, {useState, useEffect} from 'react';
import {STATUS} from '../services/Constant';
import apiSettings from '../services/service';
import useAuth from './useAuth';

const useStatusList = ({status}) => {
  const {auth} = useAuth();
  const [statusList, setStatusList] = useState([]);

  const fechStatusList = async () => {
    if (status === STATUS.SENT) {
      const data = await apiSettings.getRequestStatus(auth.id, status);
      setStatusList(data);
    } else {
      const data = await apiSettings.getRequestStatus(auth.id, status);
      setStatusList(data);
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      fechStatusList();
    }, 6500);
    return () => clearInterval(timer);
  });
  useEffect(() => {
    fechStatusList();
  }, []);
  return [statusList, setStatusList];
};

export default useStatusList;
