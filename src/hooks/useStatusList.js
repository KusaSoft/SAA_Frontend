import React, { useState, useEffect } from "react";
import { STATUS } from "../services/Constant";
import apiSettings from "../services/service";
import { mockListSent, mockListDraft } from "../services/Mock";
import useAuth from "./useAuth";

const useStatusList = ({ status }) => {
  
  const { auth } = useAuth();
  const [statusList, setStatusList] = useState([]);

  const setStatusListData = (data) => {
    setStatusList(data);
  };

  const fechStatusList = async () => {
    if (status === STATUS.SENT) {
      const data = await apiSettings.getRequestStatus(auth.id, status);
      // const prueba = apiSettings.getRequestStatus(auth.id, status);
      // const data = mockListSent;
      setStatusListData(data);
    } else {
      const data = await apiSettings.getRequestStatus(auth.id, status);
      // const data = mockListDraft;
      // const prueba2 = apiSettings.getRequestStatus(auth.id, status);
      setStatusListData(data);
    }
  };
  useEffect(() => {
    fechStatusList();
  }, []);
  return [statusList, setStatusListData];
};

export default useStatusList;
