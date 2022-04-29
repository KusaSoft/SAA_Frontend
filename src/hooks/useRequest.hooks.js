import React, { useState } from "react";
import apiSettings from "../services/service";

export const useRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState("");
  const handleRequest = async (request) => {
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = apiSettings.postReservationRequest(request);
      const data = response;
      setLoading(false);
      setSuccess(data.message);
      setResponse(data.response);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return [loading, error, success, response, status, handleRequest];
};
