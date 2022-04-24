import { loadAbort } from "@/utilities";
import axios from "axios";
import AuthContext from "../contexts/AuthProvider";
import { API_URL, LOGIN_URL } from "./config";
import { useRef, useState, useContext } from "react";

const { setAuth } = useContext(AuthContext);
const errRef = useRef();
const [errMsg, setErrMsg] = useState("");

const apiSettings = {
  authenticate: async (user, pwd) => {
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  },
  logout: () => {
    setAuth(null);
  },
 
  postReservationRequest: async (reservationRequest) => {
    try {
      const response = await axios.post(
        `${API_URL}reservationRequest`,
        JSON.stringify(reservationRequest),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      return response.data;
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing reservationRequest");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("reservationRequest Failed");
      }
      errRef.current.focus();
    }
  },
  //get reservationRequest
  getReservationRequest: async () => {
    try {
      const response = await axios.get(`${API_URL}reservationRequest`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      return response.data;
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing reservationRequest");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("reservationRequest Failed");
      }
      errRef.current.focus();
    }
  },
  //get all reservationRequest
  getAllReservationRequest: async () => {
    try {
      const response = await axios.get(`${API_URL}reservationRequest/all`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      return response.data;
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing reservationRequest");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("reservationRequest Failed");
      }
      errRef.current.focus();
    }
  },

  //get user
  getUser: async () => {
    try {
      const response = await axios.get(`${API_URL}user`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      return response.data;
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing User");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Get user Failed");
      }
      errRef.current.focus();
    }
  },
  //login
  login: async (user, pwd) => {
    setAuth({
      user: "",
      roles: "Teacher",
    });
  },

  


};

export default apiSettings;
