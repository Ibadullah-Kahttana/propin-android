import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import Animated from 'react-native-reanimated';

import colors from '../constants/colors';

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
const Stack = createStackNavigator();

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

const Screens = ({navigation, style}) => {
  return (
    <Animated.View style={[styles.stack, style]}>
      <Stack.Navigator
        initialRouteName="BottomNavigation"
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => (
            <TouchableOpacity
              onPress={navigation.openDrawer}></TouchableOpacity>
          ),
        }}>
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen name="Employee" component={EmployeeScreenStack} />
        <Stack.Screen name="Products" component={ProductScreenStack} />
      </Stack.Navigator>
    </Animated.View>
  );
};

const DrawerNavigator = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.85],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 10],
  });

  const animatedStyle = {borderRadius, transform: [{scale}]};
  return (
    <View style={styles.container}>
      <Drawer.Navigator
        initialRouteName="BottomNavigation"
        drawerType="slide"
        overlayColor="transparent"
        sceneContainerStyle={styles.scene}
        drawerContent={props => {
          setProgress(props.progress);
          return <DrawerNavContent {...props} />;
        }}>
        <Drawer.Screen name="Screens">
          {props => <Screens {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  scene: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    backgroundColor: 'transparent',
  },
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    overflow: 'hidden',
  },
  drawerStyles: {flex: 1, width: '50%', backgroundColor: 'transparent'},
  menu: {
    width: 38,
    height: 38,
    margin: 20,
  },
  drawerLblStyle: {
    fontWeight: '500',
    fontSize: 20,
  },
});

export default DrawerNavigator;
