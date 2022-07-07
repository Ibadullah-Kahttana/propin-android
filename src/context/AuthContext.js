import React, {createContext, useState} from 'react';
import axios from 'axios';
import {BASE_URL} from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  // Use State For Async
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  // Agent Register
  const agentRegister = (name, email, phone, password, confirm_password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/register`, {
        name,
        email,
        phone,
        password,
        confirm_password,
      })
      .then(res => {
        let agentInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(agentInfo);
      })
      .catch(e => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });
  };

  // Agency Register
  const agencyRegister = (name, email, phone, password, confirm_password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/register`, {
        name,
        email,
        phone,
        password,
        confirm_password,
      })
      .then(res => {
        let agencyInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(agencyInfo);
      })
      .catch(e => {
        console.log(`register error ${e.response.data.errors}`);
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
      .then(res => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`Login error ${e}`);
        setIsLoading(false);
      });
  };

  // Logout
  const logout = () => {
    setIsLoading(true);
    axios
      .post(
        `${BASE_URL}`,
        {},
        {
          headers: {Authorization: `Bearer ${userInfo.access_token}`},
        },
      )
      .then(res => {
        console.log(res.data);
        AsyncStorage.removeItem('userInfo');
        setUserInfo({});
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`Login error ${e}`);
        setIsLoading(false);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        agentRegister,
        agencyRegister,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
