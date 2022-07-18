import React, {useRef, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View, Dimensions} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import svg from '../constants/svgs';
import color from '../constants/colors';
import dimensions from '../constants/dimensions';
import globalStyle from '../constants/globalStyle';

// -----  COMPONENTS

import HomeScreen from './Navigations/DashBoardHome';
import WalletScreen from './Navigations/WalletScreen';
import TradingScreen from './Navigations/TradingScreen';
import ProfileScreen from './Navigations/Profile/ProfileScreen';

// Profile Stack Screen
import ProfileSettings from './Navigations/Profile/ProfileSettings';
import ChangePassword from './Navigations/Profile/ChangePassword';

// Agency Stack Screen
import AddAgencyScreen from './Navigations/DrawerNav/Agency/AddAgencyScreen';

const Tab = createBottomTabNavigator();

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
    <ProfileStack.Screen name="ProfileSettings" component={ProfileSettings} />
    <ProfileStack.Screen name="ChangePassword" component={ChangePassword} />
    <ProfileStack.Screen name="AddAgency" component={AddAgencyScreen} />
  </ProfileStack.Navigator>
);

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TabArr = [
  {
    route: 'Home',
    name: 'Home',
    inactiveIcon: <svg.homeSvgBottomNav fill={'#C5C5C5'} />,
    activeIcon: <svg.homeSvgBottomNav fill={'#4681F4'} />,
    component: HomeScreenStack,
  },
  {
    route: 'Wallet',
    name: 'Wallet',
    inactiveIcon: <svg.walletSvgBottomNav fill={'#C5C5C5'} />,
    activeIcon: <svg.walletSvgBottomNav fill={'#4681F4'} />,
    component: WalletScreenStack,
  },
  {
    route: 'Trading',
    name: 'Trading',
    inactiveIcon: <svg.tradingSvgBottomNav fill={'#C5C5C5'} />,
    activeIcon: <svg.tradingSvgBottomNav fill={'#4681F4'} />,
    component: TradingScreenStack,
  },
  {
    route: 'Profile',
    name: 'Profile',
    inactiveIcon: <svg.profileSvgBottomNav fill={'#C5C5C5'} />,
    activeIcon: <svg.profileSvgBottomNav fill={'#4681F4'} />,
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
    </TouchableOpacity>
  );
};

function BottomNavigation() {
  return (
    <Tab.Navigator
      backBehavior="firstRoute"
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        style: styles.bottomTab,
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
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
    fontSize: 15,
    color: '#4681F4',
  },
  iconTextUnfocused: {
    color: '#7D7F88',
    fontSize: 10,
  },
  iconContainer: {
    padding: 5,
  },
  useEffect,
});

export default BottomNavigation;
