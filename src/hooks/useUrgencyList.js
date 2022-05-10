import React, { useState, useEffect } from "react";
import { STATUS } from "../services/Constant";
import apiSettings from "../services/service";
import { mockListSent, mockListDraft } from "../services/Mock";
import useAuth from "./useAuth";


const useUrgencyList = ({ status }) => {
  
  const { auth } = useAuth();
  const [urgencyList, setUrgencyList] = useState([]);
  const setUrgencyListData = (data) => {
    setUrgencyList(data);
  };

  const fechUrgencyList = async () => {
    if (status === STATUS.SENT) {
      const data = await apiSettings.getRequests();
      //falta diferenciar urgentes y borradores 
      setUrgencyListData(data); 
    } 
    // else {
    //   const data = await apiSettings.getRequestStatus("2", status);
    //   setUrgencyListData(data);
    // }
  };
  useEffect(() => {
    fechUrgencyList();
  }, []);
  return [urgencyList, setUrgencyListData];
};

export default useUrgencyList;