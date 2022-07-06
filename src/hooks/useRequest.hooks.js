import React, {useState} from 'react';
import apiSettings from '../services/service';

export const useRequest = ({methodRequest}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState('');
  const [response, setResponse] = useState('');
  const [status, setStatus] = useState('');
  const handleRequest = async (request) => {
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const response = await methodRequest(request);
      const data = response;
      setLoading(false);
      setResponse(data.data);
      if (data.data.successful === false) {
        setSuccess(data.data.message);
      }
      setError(true);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return [loading, error, success, response, status, handleRequest];
};
