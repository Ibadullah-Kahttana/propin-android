import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

// Employee Stack Screen
import EmployeeInfo from '../component/NavScreens/DrawerNavigation/EmployeeScreens/EmployeeInfoScreen';
import AddEmployee from './NavScreens/DrawerNavigation/EmployeeScreens/AddEmployeScreen';
import EditEmployee from './NavScreens/DrawerNavigation/EmployeeScreens/EditEmployeScreen';

// Product Stack Screen
import ProductHomeScreen from './NavScreens/DrawerNavigation/ProductScreens/ProductHomeScreen';
import AddProducts from './NavScreens/DrawerNavigation/ProductScreens/AddProduct';

import BottomNavigation from './BottomNavigation';
import DrawerNavContent from './NavScreens/DrawerNavigation/DrawerNavContent';

const Drawer = createDrawerNavigator();

const EmployeeStack = createStackNavigator();
const ProductStack = createStackNavigator();

const EmployeeScreenStack = ({navigation}) => (
  <EmployeeStack.Navigator
    initialRouteName="EmployeeInfo"
    screenOptions={{
      headerShown: false,
    }}>
    <EmployeeStack.Screen name="EmployeeInfo" component={EmployeeInfo} />
    <EmployeeStack.Screen name="AddEmployee" component={AddEmployee} />
    <EmployeeStack.Screen name="EditEmployee" component={EditEmployee} />
  </EmployeeStack.Navigator>
);

const ProductScreenStack = ({navigation}) => (
  <ProductStack.Navigator
    initialRouteName="ProductHome"
    screenOptions={{
      headerShown: false,
    }}>
    <ProductStack.Screen name="ProductHome" component={ProductHomeScreen} />
    <ProductStack.Screen name="AddProducts" component={AddProducts} />
  </ProductStack.Navigator>
);

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerNavContent {...props} />}
      initialRouteName="BottomNavigation"
      drawerType="slide">
      <Drawer.Screen name="BottomNavigation" component={BottomNavigation} />
      <Drawer.Screen name="Employee" component={EmployeeScreenStack} />
      <Drawer.Screen name="Products" component={ProductScreenStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
