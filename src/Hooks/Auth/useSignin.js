import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { NavsState } from "../../Contexts/Navs_Context";
import { DataBaseState } from "../../Contexts/DataBase_Context";
import http from "../../Services/httpService";
import * as jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';
import { TOKEN_COOKIE_NAME, USER_ID_COOKIE_NAME, USER_JOB_COOKIE_NAME } from '../../config/cookies';

export const useSignin = () => {

  const { setAlert } = NavsState();

  const { setAuthenticated } = DataBaseState();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const signin = async () => {

    if (!email || !password) {
      setAlert({
        open: true,
        message: "All fields are required",
        type: 'error'
      });

      return;
    }

    try{
      const response = await http.post(`auth-employee/sign-in`, {
        email: email,
        password: password,
      });

      const { token, id } = response.data;

      if (token) {
        const decoded = jwt_decode.jwtDecode(token);

        Cookies.set(TOKEN_COOKIE_NAME, token);
        Cookies.set(USER_ID_COOKIE_NAME, decoded.id);
        Cookies.set(USER_JOB_COOKIE_NAME, decoded.EmployeeRole);
      }

      setAuthenticated(true);

      setAlert({
        open: true,
        message: "Login successful",
        type: 'success'
      });

      setTimeout(() => {
        navigate('/CE_Work_Space/Dashboard');
 
      }, 3000);

    }catch (error) {
      console.log(error)
      if (error.response && error.response.status === 400) {
        let errorMessage = error.response.data.message;
        setAlert({
          open: true,
          message: errorMessage,
          type: 'error'
        });
      }
    }
  }

  return {
    email, setEmail,
    password, setPassword,
    signin
  }
}