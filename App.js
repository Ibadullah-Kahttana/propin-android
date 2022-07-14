import React from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/component/Navigation';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <StatusBar backgroundColor="#4681F4" />
      <Navigation />
    </AuthProvider>
  );
};

export default App;

// import React, {useEffect} from 'react';
// import 'react-native-gesture-handler';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import {StyleSheet, Dimensions, View} from 'react-native';

// import axios from 'axios';
// import {BASE_URL} from './src/config';

// import {AuthContext} from './src/context/AuthContext';
// import Loader from './src/controles/Loader';

// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// // -----------  SCREENS -----------------------------------------------------------------

// import LoginScreen from './src/component/Login';
// import CountryScreen from './src/component/Country';
// import RegisterScreen from './src/component/Register';
// import SelectCityScreen from './src/component/SelectCity';
// import SignUpScreen from './src/component/Register/SignUpScreen';
// import DrawerNavigator from './src/component/DrawerNavigator';
// import BottomNavigation from './src/component/BottomNavigation';

// const windowHeight = Dimensions.get('window').height;

// const Stack = createStackNavigator();

// const SignedInStack = createStackNavigator();
// const SignedOutStack = createStackNavigator();

// const SignedOutStackNavigator = () => {
//   return (
//     <SignedOutStack.Navigator
//       initialRouteName="RegisteryScreen"
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <SignedOutStack.Screen name="RegisterScreen" component={RegisterScreen} />
//       <SignedOutStack.Screen name="CountryScreen" component={CountryScreen} />

//       <SignedOutStack.Screen
//         name="SelectCityScreen"
//         component={SelectCityScreen}
//       />
//       <SignedOutStack.Screen name="LoginScreen" component={LoginScreen} />
//       <SignedOutStack.Screen name="SignUpScreen" component={SignUpScreen} />
//     </SignedOutStack.Navigator>
//   );
// };

// const SignedInStackNavigator = () => {
//   return (
//     <SignedInStack.Navigator
//       initialRouteName="BottomNavigation"
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <SignedInStack.Screen
//         name="BottomNavigation"
//         component={BottomNavigation}
//       />
//     </SignedInStack.Navigator>
//   );
// };

// const App = () => {
//   // Use State For Async
//   // const [isLoading, setIsLoading] = React.useState(false);
//   // const [userToken, setUserToken] = React.useState(null);

//   const initialLoginState = {
//     isLoading: true,
//     userName: null,
//     userToken: null,
//   };

//   const loginReducer = (prevState, action) => {
//     switch (action.type) {
//       case 'RETRIVE_TOKEN':
//         return {
//           ...prevState,
//           userToken: action.token,
//           isLoading: false,
//         };

//       case 'LOGIN':
//         return {
//           ...prevState,
//           userName: action.emailID,
//           userToken: action.token,
//           isLoading: false,
//         };

//       case 'LOGOUT':
//         return {
//           ...prevState,
//           userName: null,
//           userToken: null,
//           isLoading: false,
//         };

//       case 'REGISTER':
//         return {
//           ...prevState,
//           userName: action.emailID,
//           userToken: action.token,
//           isLoading: false,
//         };
//     }
//   };

//   const [loginState, dispatch] = React.useReducer(
//     loginReducer,
//     initialLoginState,
//   );

//   const authContext = React.useMemo(
//     () => ({
//       // Agent Register
//       agentRegister: (name, email, phone, password, confirm_password) => {
//         //setIsLoading(true);
//         axios
//           .post(`${BASE_URL}/register`, {
//             name,
//             email,
//             phone,
//             password,
//             confirm_password,
//           })
//           .then(res => {
//             let userToken = res.data;
//             setUserInfo(userToken);
//             AsyncStorage.setItem('userToken', JSON.stringify(userToken));
//             // setIsLoading(false);
//             console.log(userToken);
//           })
//           .catch(e => {
//             console.log(`register error ${e}`);
//             setIsLoading(false);
//           });
//       },

//       // Agency Register
//       agencyRegister: (name, email, phone, password, confirm_password) => {
//         setIsLoading(true);
//         axios
//           .post(`${BASE_URL}/register`, {
//             name,
//             email,
//             phone,
//             password,
//             confirm_password,
//           })
//           .then(res => {
//             let userToken = res.data;
//             setUserInfo(userToken);
//             AsyncStorage.setItem('userInfo', JSON.stringify(userToken));
//             // setIsLoading(false);
//             console.log(userToken);
//           })
//           .catch(e => {
//             console.log(`register error ${e.response.data.errors}`);
//             // setIsLoading(false);
//           });
//       },

//       // Login
//       login: (email, password) => {
//         //setIsLoading(true);
//         axios
//           .post(`${BASE_URL}/login`, {
//             email,
//             password,
//           })
//           .then(async res => {
//             let userToken;
//             userToken = res.data.data.token;
//             let userEmail = res.data.data.email;
//             let userPassword = res.data.data.password;
//             let userName = res.data.data.name;
//             let userRole = res.data.data.role;
//             let userAvatr = res.data.data.avatar;
//             console.log('Email = ', userEmail);
//             console.log('Password = ', userPassword);
//             console.log('My Data', userToken);
//             try {
//               Token = await AsyncStorage.setItem('userToken', userToken);
//             } catch (error) {
//               console.log(error);
//             }

//             console.log('Input Email ----- : ', email);
//             console.log('Input PAssword  ----- : ', password);
//             console.log('Name =', userName);
//             console.log('Avatar =', userAvatr);
//             console.log('Role =', userRole);
//             dispatch({type: 'LOGIN', emailID: email, token: Token});

//             //setUserInfo(userInfo);
//             //AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
//             //setIsLoading(false);
//           })
//           .catch(e => {
//             console.log(`Login error ${e}`);
//             //setIsLoading(false);
//           });
//       },

//       // Logout
//       logout: async () => {
//         try {
//           console.log('Before Remove Token', userToken);
//           await AsyncStorage.removeItem('userToken');
//           console.log('After Remove Token', userToken);
//         } catch (e) {
//           console.log(e);
//         }
//         dispatch({type: 'LOGOUT'});
//       },
//     }),
//     [],
//   );

//   useEffect(() => {
//     setTimeout(async () => {
//       let Token;
//       Token = null;
//       try {
//         Token = await AsyncStorage.getItem('userToken');
//       } catch (e) {
//         console.log(e);
//       }
//       console.log('Effect user token : ', Token);
//       dispatch({type: 'REGISTER', token: Token});
//     }, 1000);
//   }, []);

//   if (loginState.isLoading) {
//     <Loader />;
//   }

//   // let AuthToken = AsyncStorage.getItem('userToken', JSON.parse(AuthToken));
//   // let userObj = AsyncStorage.getItem('userToken');
//   // let AuthToken = JSON.stringify(userObj);
//   // console.log('Auth Token = ', AuthToken);
//   // AuthToken != null ? JSON.parse(AuthToken) : null;
//   // console.log('Auth Token = ', AuthToken);

//   return (
//     <AuthContext.Provider value={authContext}>
//       <NavigationContainer>
//         {AuthToken !== null ? (
//           <SignedOutStackNavigator />
//         ) : (
//           <SignedInStackNavigator />
//         )}
//       </NavigationContainer>
//     </AuthContext.Provider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginBottom: (windowHeight / 100) * 0,
//   },
// });

// export default App;

// {
//   splashLoading ? (
//     <Stack.Screen
//       name="SplashScreen"
//       component={SplashScreen}
//       options={{headerShown: false}}
//     />
//   ) : tokenID.token ? (
//     <>
//       <Stack.Screen
//         name="DrawerNavigator"
//         component={DrawerNavigator}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="BottomNavigation"
//         component={BottomNavigation}
//         options={{headerShown: false}}
//       />
//     </>
//   ) : (
//     <>
//       <Stack.Screen
//         name="RegisterScreen"
//         component={RegisterScreen}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="CountryScreen"
//         component={CountryScreen}
//         options={{headerShown: false}}
//       />

//       <Stack.Screen
//         name="SelectCityScreen"
//         component={SelectCityScreen}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="LoginScreen"
//         component={LoginScreen}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="SignUpScreen"
//         component={SignUpScreen}
//         options={{headerShown: false}}
//       />
//     </>
//   );
// }
