import React, {useContext} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Dimensions, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// -----------  SCREENS -----------------------------------------------------------------

import LoginScreen from './component/Login';
import CountryScreen from './component/Country';
import RegisterScreen from './component/Register';
import SelectCityScreen from './component/SelectCity';
import SignUpScreen from './component/Register/SignUpScreen';
import DrawerNavigator from './component/DrawerNavigator';
import BottomNavigation from './component/BottomNavigation';

// -------------- Auth Provider ----------------------------------------------------------
import {AuthProvider} from './context/AuthContext';
import {AuthContext} from './context/AuthContext';

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
      <SignedOutStack.Screen name="RegisterScreen" component={RegisterScreen} />
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

const SignedInStackNavigator = () => {
  return (
    <SignedInStack.Navigator
      initialRouteName="DrawerNavigator"
      screenOptions={{
        headerShown: false,
      }}>
      <SignedInStack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
      />
      <SignedInStack.Screen
        name="BottomNavigation"
        component={BottomNavigation}
      />
    </SignedInStack.Navigator>
  );
};

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
  const {userInfo} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {userInfo.access_token ? (
        <SignedInStackNavigator />
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
