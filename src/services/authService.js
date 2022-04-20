import axios from "axios";
import AuthContext from "../contexts/AuthProvider";
import { API_URL, LOGIN_URL } from "../config";
import { useRef, useState, useContext } from "react";

const apiAuth = () => {
  const { setAuth } = useContext(AuthContext);
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");

  const logout = () => {
    setAuth(null);
  };

  const login = async (user, pwd) => {
    console.log("apiAuth login");
    setAuth({
      user: `${user}`,
      roles: ["Teacher"],
    });
  };
};

export default apiAuth;
