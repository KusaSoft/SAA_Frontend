import React, {useState} from 'react';
import apiSettings from '../services/service';

export const useRequestDetail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [response, setResponse] = useState('');
  const [status, setStatus] = useState('');
  const handleRequest = async (request) => {
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const response = await apiSettings.getReservationRequestD(request);
      const data = response;
      //   const myGroups = await apiSettings.getGroups([data.data.group_list]);
      //   const otherGroups = await apiSettings.getGroups([
      //     data.data.other_groups,
      //   ]);
      setResponse({...data.data});
      //   setResponse({
      //     ...data.data,
      //     group_list: myGroups,
      //     other_groups: otherGroups,
      //   });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return [loading, error, success, response, status, handleRequest];
};
