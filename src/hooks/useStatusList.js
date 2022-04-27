import React, { useState, useEffect } from "react";
import { STATUS } from "../services/Constant";
import apiSettings from "../services/service";
import { mockListSent, mockListDraft } from "../services/Mock";
const useStatusList = ({ status }) => {
  const [statusList, setStatusList] = useState([]);

  const setStatusListData = (data) => {
    setStatusList(data);
  };

  const fechStatusList = async () => {
    if (status === STATUS.SENT) {
      // const data = apiSettings.getStatusList(status);
      const data = mockListSent;
      setStatusListData(data);
    } else {
      // const data = await apiSettings.getStatusList(status);
      const data = mockListDraft;
      setStatusListData(data);
    }
  };
  useEffect(() => {
    fechStatusList();
  }, []);
  return [statusList, setStatusListData];
};

export default useStatusList;
