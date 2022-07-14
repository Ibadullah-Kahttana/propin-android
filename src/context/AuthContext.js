import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import {BASE_URL} from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  // Use State For Async
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [token, setToken] = useState({});
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
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
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
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
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
        let userInf;
        userInf = res.data;

        console.log('user Info -----> ', userInf);
        let userToken;
        userToken = res.data.data.token;
        setToken(userToken);
        let userEmail = res.data.data.email;
        let userPassword = res.data.data.password;
        let userName = res.data.data.name;
        let userRole = res.data.data.role;
        let userAvatr = res.data.data.avatar;
        console.log('Email = ', userEmail);
        console.log('Password = ', userPassword);
        console.log('My Data', userToken);
        try {
          await AsyncStorage.setItem('userInfo', JSON.stringify(userInf));
          await AsyncStorage.setItem('userToken', JSON.stringify(userToken));
        } catch (error) {
          console.log(error);
        }
        console.log('Input Email ----- : ', email);
        console.log('Input PAssword  ----- : ', password);
        console.log('Name =', userName);
        console.log('Avatar =', userAvatr);
        console.log('Role =', userRole);
        console.log('token', token);

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
      console.log('Before Remove Token', token);
      await AsyncStorage.removeItem('userToken');
      setToken({});
      console.log('After Remove Token', token);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);
      let Token;
      Token = null;
      try {
        Token = await AsyncStorage.getItem('userToken');
        Token = JSON.parse(Token);
        console.log('use Effect State = ', Token);
      } catch (e) {
        console.log(e);
      }
      // console.log('Effect user token : ', Token);
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
        userInfo,
        splashLoading,
        token,
        agentRegister,
        agencyRegister,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
