import React, {useState} from 'react';
import apiSettings from '../services/service';

export const useRequestS = ({methodRequest}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState('');
  const [response, setResponse] = useState('');
  const [status, setStatus] = useState('');
  const handleRequest = async (request) => {
    setLoading(true);
    setError(false);
    setSuccess('');
    try {
      const response = await methodRequest(request);
      const data = response;
      setResponse(data.data);
      if (data.data.successful === false) {
        setSuccess(data.data.message);
        setError(true);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return [loading, error, success, response, status, handleRequest];
};
