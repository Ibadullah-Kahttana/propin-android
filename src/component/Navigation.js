import React, {useContext, useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Dimensions, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

// -----------  SCREENS -----------------------------------------------------------------

import LoginScreen from './Login';
import CountryScreen from './Country';
import RegisterScreen from './Register';
import SelectCityScreen from './SelectCity';
import SignUpScreen from './Register/SignUpScreen';
import DrawerNavigator from './DrawerNavigator';

// -------------- Auth Provider ----------------------------------------------------------

import {AuthContext} from '../context/AuthContext';
import SplashScreen from './SplashScreen';

// ---------------------------------------------------------------------------------------

const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="RegisteryScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="CountryScreen" component={CountryScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SelectCityScreen" component={SelectCityScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const {splashLoading, userToken} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {userToken !== null ? <DrawerNavigator /> : <StackNavigator />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: (windowHeight / 100) * 0,
  },
});

export default Navigation;

// {token.token ? <SignedInStackNavigator /> : <SignedOutStackNavigator />}
