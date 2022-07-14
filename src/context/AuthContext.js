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
  const [splashLoading, setSplashLoading] = useState(false);

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
        let agentInfo = res.data.data;
        setAgentInfo(agentInfo);
        AsyncStorage.setItem('agentInfo', JSON.stringify(agentInfo));
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
    const data = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      confirm_password: confirm_password,
    };

    setIsLoading(true);
    axios
      .post(`${BASE_URL}/register`, data)
      .then(res => {
        let agencyInfo = res.data;
        setAgencyInfo(agencyInfo);
        AsyncStorage.setItem('agencyInfo', JSON.stringify(agencyInfo));
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
      .then(async res => {
        let userInfo;
        let userToken;
        userInfo = res.data.data;
        console.log('User Info = ', userInfo);
        userToken = userInfo.token;
        setUserToken(userToken);
        console.log('Token ID = ', userToken);
        try {
          await AsyncStorage.setItem('userToken', JSON.stringify(userToken));
        } catch (error) {
          console.log(error);
        }
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`Login error ${e}`);
        setIsLoading(false);
      });
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      let userToken = await AsyncStorage.getItem('userToken');
      userToken = JSON.parse(userToken);
      await AsyncStorage.removeItem('userToken');
      setUserToken(null);
      setIsLoading(false);
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
      console.log('use Effect State = ', Token);
      setUserToken(Token);
      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is Logged in error ${e}`);
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
        agentRegister,
        agencyRegister,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
