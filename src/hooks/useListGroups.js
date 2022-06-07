import React, {useState, useEffect} from 'react';
import apiSettings from '../services/service';

const useListGroups = () => {
  const [groupsList, setListGroups] = useState([]);
  const setListGroupsData = (data) => {
    setListGroups(data);
  };

  const fechListGroups = async () => {
    const data = await apiSettings.getAllGroups();
    setListGroupsData(data);
  };
  useEffect(() => {
    fechListGroups();
  }, []);
  return [groupsList, setListGroupsData];
};

export default useListGroups;
