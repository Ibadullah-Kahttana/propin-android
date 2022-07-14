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
import BottomNavigation from './BottomNavigation';

// -------------- Auth Provider ----------------------------------------------------------

import {AuthContext} from '../context/AuthContext';
import SplashScreen from './SplashScreen';

// ---------------------------------------------------------------------------------------

const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();

const SignedInStack = createStackNavigator();
const SignedOutStack = createStackNavigator();

const SignedOutStackNavigator = () => {
  return (
    <SignedOutStack.Navigator
      initialRouteName="RegisteryScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <SignedOutStack.Screen
        name="RegisteryScreen"
        component={RegisterScreen}
      />
      <SignedOutStack.Screen name="CountryScreen" component={CountryScreen} />

      <SignedOutStack.Screen
        name="SelectCityScreen"
        component={SelectCityScreen}
      />
      <SignedOutStack.Screen name="LoginScreen" component={LoginScreen} />
      <SignedOutStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </SignedOutStack.Navigator>
  );
};

// const SignedInStackNavigator = () => {
//   return (
//     <SignedInStack.Navigator
//       initialRouteName="DrawerNavigator"
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <SignedInStack.Screen
//         name="DrawerNavigator"
//         component={DrawerNavigator}
//       />
//       <SignedInStack.Screen
//         name="BottomNavigation"
//         component={BottomNavigation}
//       />
//     </SignedInStack.Navigator>
//   );
// };

// const AuthScreens = () => {
//   return (
//     <SignedInStack.Navigator
//       initialRouteName="DrawerNavigator"
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <SignedInStack.Screen
//         name="DrawerNavigator"
//         component={DrawerNavigator}
//       />
//       <SignedInStack.Screen
//         name="BottomNavigation"
//         component={BottomNavigation}
//       />
//     </SignedInStack.Navigator>
//   );
// };
// const StackNavigator = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName="RegisteryScreen"
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
//       <Stack.Screen name="CountryScreen" component={CountryScreen} />
//       <Stack.Screen name="LoginScreen" component={LoginScreen} />
//       <Stack.Screen name="SelectCityScreen" component={SelectCityScreen} />
//       <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
//       <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
//       <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
//     </Stack.Navigator>
//   );
// };

const Navigation = () => {
  const {splashLoading} = useContext(AuthContext);

  const [AuthState, setAuthState] = useState('');
  console.log('Auth Tokken -> ', AuthState);
  const getData = async () => {
    try {
      const AuthToken = await AsyncStorage.getItem('userToken');
      setAuthState(AuthToken);
      return AuthToken != null ? JSON.parse(AuthToken) : null;
    } catch (e) {
      console.log(`Auth Tokken Error ${e}`);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <NavigationContainer>
      {splashLoading ? (
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
      ) : AuthState !== null ? (
        <DrawerNavigator />
      ) : (
        <SignedOutStackNavigator />
      )}
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
