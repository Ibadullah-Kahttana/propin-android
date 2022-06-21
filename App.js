/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Dimensions, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './src/component/LoginScreen';
import CountryScreen from './src/component/CountryScreen';
import RegisterScreen from './src/component/RegisterScreen';
import SelectCityScreen from './src/component/SelectCityScreen';
import BottomNavigation from './src/component/BottomNavigation';
import SignUpScreen from './src/component/RegisterScreens/SignUpScreen';

const windowWidth = Dimensions.get('window').width;
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
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: (windowHeight / 100) * 0,
  },
});

export default App;
