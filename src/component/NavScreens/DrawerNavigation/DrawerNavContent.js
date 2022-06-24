import {View, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import LogoBlue from '../../../assets/Svgs/DrawableSVG/LogoBlue';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DrawerNavContent = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#4681F4'}}>
      <DrawerContentScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.drawerContent}>
          <Drawer.Section style={styles.drawerIconSection}>
            <LogoBlue height={130} width={130} />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    height: (windowHeight / 100) * 100,
    width: (windowWidth / 100) * 75,
    backgroundColor: '#4681F4',
  },
  drawerSection: {
    marginTop: 15,
    backgroundColor: 'green',
  },
  drawerIconSection: {
    height: (windowHeight / 100) * 25,
    width: (windowWidth / 100) * 75,
    //backgroundColor: 'yellow',
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DrawerNavContent;
