import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

// Employee Stack Screen
import EmployeeInfo from './Navigations/DrawerNav/Employee/EmployeeInfoScreen';
import AddEmployee from './Navigations/DrawerNav/Employee/AddEmployeScreen';
import EditEmployee from './Navigations/DrawerNav/Employee/EditEmployeScreen';

// Product Stack Screen
import ProductHomeScreen from './Navigations/DrawerNav/Product/ProductHomeScreen';
import AddProducts from './Navigations/DrawerNav/Product/AddProduct';
import FilterProduct from './Navigations/DrawerNav/Product/FilterProduct';

import BottomNavigation from './BottomNavigation';
import DrawerNavContent from './Navigations/DrawerNav/DrawerNavContent';

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
    <ProductStack.Screen name="FilterProduct" component={FilterProduct} />
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
