import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BottomNavigation from './BottomNavigation';
import DrawerNavContent from './NavScreens/DrawerNavigation/DrawerNavContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerNavContent {...props} />}>
      <Drawer.Screen name="Home" component={BottomNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
