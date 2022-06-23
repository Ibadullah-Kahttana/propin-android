import React, {useRef, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import HomeSvgBlue from '../assets/Svgs/BottomTabSvgs/HomeBlue.svg';
import HomeSvgGray from '../assets/Svgs/BottomTabSvgs/HomeGray.svg';

import ProfileSvgGray from '../assets/Svgs/BottomTabSvgs/ProfileGray.svg';
import ProfileSvgBlue from '../assets/Svgs/BottomTabSvgs/ProfileBlue.svg';

import TradingSvgGray from '../assets/Svgs/BottomTabSvgs/TradingGray.svg';
import TradingSvgBlue from '../assets/Svgs/BottomTabSvgs/TradingBlue.svg';

import WalletSvgGray from '../assets/Svgs/BottomTabSvgs/WalletGray.svg';
import WalletSvgBlue from '../assets/Svgs/BottomTabSvgs/WalletBlue.svg';

import HomeScreen from '../component/NavScreens/DashBoardHome';
import WalletScreen from '../component/NavScreens/WalletScreen';
import TradingScreen from '../component/NavScreens/TradingScreen';
import ProfileScreen from '../component/NavScreens/ProfileScreens/ProfileScreen';
import ProfileSettings from '../component/NavScreens/ProfileScreens/ProfileSettings';
import ChangePassword from '../component/NavScreens/ProfileScreens/ChangePassword';

import AddEmployeeScreen from './NavScreens/DrawerNavigation/EmployeeScreens/AddEmployeScreen';
import EditEmployee from './NavScreens/DrawerNavigation/EmployeeScreens/EditEmployeScreen';
import AddProduct from './NavScreens/DrawerNavigation/ProductScreens/AddProduct';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const DashBoardStack = createStackNavigator();
const WalletStack = createStackNavigator();
const TradingStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeScreenStack = ({navigation}) => (
  <DashBoardStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <DashBoardStack.Screen name="HomeScreen" component={HomeScreen} />
  </DashBoardStack.Navigator>
);

const WalletScreenStack = ({navigation}) => (
  <WalletStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <WalletStack.Screen name="WalletScreen" component={WalletScreen} />
  </WalletStack.Navigator>
);

const TradingScreenStack = ({navigation}) => (
  <TradingStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <TradingStack.Screen name="TradingScreen" component={TradingScreen} />
  </TradingStack.Navigator>
);

const ProfileScreenStack = ({navigation}) => (
  <ProfileStack.Navigator
    initialRouteName="ProfileScreen"
    screenOptions={{
      headerShown: false,
    }}>
    <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
    <ProfileStack.Screen name="ChangePassword" component={ChangePassword} />
    <ProfileStack.Screen name="ProfileSettings" component={ProfileSettings} />
    <ProfileStack.Screen name="AddEmployee" component={AddEmployeeScreen} />
    <ProfileStack.Screen name="EditEmployee" component={EditEmployee} />
    <ProfileStack.Screen name="AddProduct" component={AddProduct} />
  </ProfileStack.Navigator>
);

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TabArr = [
  {
    route: 'Home',
    name: 'Home',
    inactiveIcon: <HomeSvgGray />,
    activeIcon: <HomeSvgBlue />,
    component: HomeScreenStack,
  },
  {
    route: 'Wallet',
    name: 'Wallet',
    inactiveIcon: <WalletSvgGray />,
    activeIcon: <WalletSvgBlue />,
    component: WalletScreenStack,
  },
  {
    route: 'Trading',
    name: 'Trading',
    inactiveIcon: <TradingSvgGray />,
    activeIcon: <TradingSvgBlue />,
    component: TradingScreenStack,
  },
  {
    route: 'Profile',
    name: 'Profile',
    inactiveIcon: <ProfileSvgGray />,
    activeIcon: <ProfileSvgBlue />,
    component: ProfileScreenStack,
  },
];

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.tabContainer}>
      <View style={styles.iconContainer}>
        {focused ? item.activeIcon : item.inactiveIcon}
      </View>

      {/* <Text
        style={[focused ? styles.iconTextFocused : styles.iconTextUnfocused]}>
        {item.name}
      </Text> */}
    </TouchableOpacity>
  );
};

function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {height: (windowHeight / 100) * 7},
        tabBarHideOnKeyboard: true,
      }}
      tabBarOptions={{
        style: styles.bottomTab,
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            // listeners={({navigation, route}) => ({
            //   tabPress: e => {
            //     if (route.name === 'Projects') {
            //       e.preventDefault();
            //       navigation.navigate('Projects', {screen: 'ProjectsList'});
            //     }
            //     if (route.name === 'Properties') {
            //       e.preventDefault();
            //       navigation.navigate('Properties', {screen: 'PropertiesList'});
            //     }
            //   },
            // })}
            options={{
              unmountOnBlur: true,
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
              tabBarVisible: item.route === 'Home' ? true : false,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    //backgroundColor: 'red',
    height: (windowHeight / 100) * 7,
  },
  iconTextFocused: {
    fontSize: 13,
    color: '#4681F4',
  },
  iconTextUnfocused: {
    color: '#7D7F88',
    fontSize: 13,
  },
  iconContainer: {
    padding: 5,
  },
  useEffect,
});

export default BottomNavigation;
