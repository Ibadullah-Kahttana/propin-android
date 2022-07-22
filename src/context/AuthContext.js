import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import {BASE_URL} from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  // Use State For Async
  const [isLoading, setIsLoading] = useState(false);
  const [agentInfo, setAgentInfo] = useState(null);
  const [agencyInfo, setAgencyInfo] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [splashLoading, setSplashLoading] = useState(false);

  const [agentError, setAgentError] = useState({});
  const [agencyError, setAgencyError] = useState({});
  const [loginError, setLoginError] = useState({});
  const [logoutError, setLogoutError] = useState({});

  // Agent Register
  const agentRegister = (name, email, phone, password, confirm_password) => {
    setIsLoading(true);
    setAgentError();
    axios
      .post(`${BASE_URL}/register`, {
        name,
        email,
        phone,
        password,
        confirm_password,
      })
      .then(response => {
        let agentInfo = response.data.data;
        setAgentInfo(agentInfo);

        AsyncStorage.setItem('agentInfo', JSON.stringify(agentInfo));
        setIsLoading(false);
        console.log(agentInfo);
        alert(agentInfo.data);
      })
      .catch(e => {
        if (e) {
          let er = e.response.data.errors;
          setAgentError(er);
          console.log('Agent Regisetr error =  ', JSON.stringify(er, null, 2));
        }
        setIsLoading(false);
      });
  };

  // Agency Register
  const agencyRegister = (name, email, phone, password, confirm_password) => {
    const data = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      confirm_password: confirm_password,
    };
    setAgencyError();
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/register`, data)
      .then(res => {
        let agencyInfo = res.data;
        setAgencyInfo(agencyInfo);

        AsyncStorage.setItem('agencyInfo', JSON.stringify(agencyInfo));
        setIsLoading(false);
        console.log(agencyInfo);
        alert(agencyInfo.data);
      })
      .catch(e => {
        if (e) {
          let er = e.response.data.errors;
          setAgencyError(er);
          console.log('Agency Regisetr error =  ', JSON.stringify(er, null, 2));
        }
        setIsLoading(false);
      });
  };

  // Login
  const login = (email, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/login`, {
        email,
        password,
      })
      .then(async res => {
        let userInfo;
        let userToken;
        userInfo = res.data.data;
        console.log('User Info = ', userInfo);
        userToken = userInfo.token;
        setUserToken(userToken);
        console.log('Token ID = ', userToken);

        let userRole;
        userRole = userInfo.role;
        setUserRole(userRole);
        console.log('User Role = ', userRole);

        let userName;
        userName = userInfo.name;
        setUserName(userName);
        console.log('User Name = ', userName);

        let userEmail;
        userEmail = userInfo.email;
        setUserEmail(userEmail);
        console.log('User Email = ', userEmail);
        try {
          await AsyncStorage.setItem('userToken', JSON.stringify(userToken));
          await AsyncStorage.setItem('userName', JSON.stringify(userName));
          await AsyncStorage.setItem('userEmail', JSON.stringify(userEmail));
          await AsyncStorage.setItem('userRole', JSON.stringify(userRole));
        } catch (error) {
          console.log(error);
        }
        setIsLoading(false);
      })
      .catch(e => {
        if (e) {
          setLoginError([]);
          let er = e.response.data;
          setLoginError(er);
          console.log('Login error =  ', JSON.stringify(er, null, 2));
        }
        setIsLoading(false);
      });
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      let userToken = await AsyncStorage.getItem('userToken');
      userToken = JSON.parse(userToken);
      await AsyncStorage.removeItem('userToken');

      let userName = await AsyncStorage.getItem('userName');
      userName = JSON.parse(userName);
      await AsyncStorage.removeItem('userName');

      let userEmail = await AsyncStorage.getItem('userEmail');
      userEmail = JSON.parse(userEmail);
      await AsyncStorage.removeItem('userEmail');

      let userRole = await AsyncStorage.getItem('userRole');
      userRole = JSON.parse(userRole);
      await AsyncStorage.removeItem('userRole');

      setUserToken(null);
      setUserRole(null);
      setUserEmail(null);
      setUserName(null);
      setIsLoading(false);
      setSplashLoading(true);
      setSplashLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);
      let Token;
      Token = await AsyncStorage.getItem('userToken');
      Token = JSON.parse(Token);
      console.log('use Effect Token = ', Token);

      let Role;
      Role = await AsyncStorage.getItem('userRole');
      Role = JSON.parse(Role);
      console.log('Use Effect Role = ', Role);

      let name;
      name = await AsyncStorage.getItem('userName');
      name = JSON.parse(name);
      console.log('Use Effect Name = ', name);

      let email;
      email = await AsyncStorage.getItem('userEmail');
      email = JSON.parse(email);
      console.log('Use Effect Email = ', email);

      setUserToken(Token);
      setUserRole(Role);
      setUserEmail(email);
      setUserName(name);
      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is_Logged in error ${e.res.data.errors}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        agentInfo,
        agencyInfo,
        splashLoading,
        userToken,
        userRole,
        userEmail,
        userName,
        agencyError,
        agentError,
        setAgencyError,
        setAgentError,
        agentRegister,
        agencyRegister,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
