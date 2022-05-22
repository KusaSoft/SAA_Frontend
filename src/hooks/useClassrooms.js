import React, {useState, useEffect} from 'react';
import apiSettings from '../services/service';

export const useClassrooms = ({requestID}) => {
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
      setResponse({...data.data});

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    handleRequest(requestID);
  }, []);

  return [loading, error, success, response, status, handleRequest];
};
