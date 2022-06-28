import {View, StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';

import {Drawer, Text} from 'react-native-paper';

//------------------ SVGs -----------------

import Logo from '../../../assets/Svgs/DrawableSVG/PropInLogo';
//Home
import HomeIcon from '../../../assets/Svgs/DrawableSVG/HomeIcon';
//Profile
import ProfileIcon from '../../../assets/Svgs/DrawableSVG/ProfileIcon';
//Employee
import EmployeeIconBlue from '../../../assets/Svgs/DrawableSVG/EmployeeIconBlue';
import EmployeeIconWhite from '../../../assets/Svgs/DrawableSVG/EmployeeIconWhite';
//Help
import HelpIconWhite from '../../../assets/Svgs/DrawableSVG/HelpIconwhite';
import HelpIconBlue from '../../../assets/Svgs/DrawableSVG/HelpIconblue';
//Logout
import LogoutIcon from '../../../assets/Svgs/DrawableSVG/LogoutIcon';
//Product
import ProductIcon from '../../../assets/Svgs/DrawableSVG/ProductIcon';
//Settings
import SettingsIcon from '../../../assets/Svgs/DrawableSVG/SettingsIcon';
//Trading
import TradingIcon from '../../../assets/Svgs/DrawableSVG/tradingIcon';
//Wallet
import WalletIcon from '../../../assets/Svgs/DrawableSVG/WalletIcon';

import {TouchableOpacity} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DrawerNavContent = () => {
  const [activeButton, setActiveButton] = useState('Home');

  return (
    <View style={styles.drawerContent}>
      {/** LOG */}
      <Drawer.Section style={styles.drawerIconSection}>
        <Logo height={130} width={130} />
      </Drawer.Section>

      {/** Sections */}
      <Drawer.Section style={styles.drawerSectionContainer}>
        {/**  Home  */}
        <TouchableOpacity
          underlayColor={'transparent'}
          onPress={() => setActiveButton('Home')}>
          <View
            style={{
              height: (windowHeight / 100) * 6,
              width: (windowWidth / 100) * 50,
              backgroundColor: activeButton === 'Home' ? '#FFFFFF' : '#4681F4',
              flexDirection: 'row',
              alignItems: 'center',
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
            }}>
            <View style={styles.ButtonIconConatiner}>
              {activeButton === 'Home' ? (
                <HomeIcon width={25} height={25} fill={'#4681F4'} />
              ) : (
                <HomeIcon width={25} height={25} fill={'#FFFFFF'} />
              )}
            </View>
            <Text
              style={{
                color: activeButton === 'Home' ? '#4681F4' : '#FFFFFF',
                fontSize: 17,
                fontWeight: '600',
                fontFamily: 'Roboto-Regular',
                paddingBottom: 2,
              }}>
              Home
            </Text>
          </View>
        </TouchableOpacity>

        {/**  Profile  */}
        <TouchableOpacity
          underlayColor={'transparent'}
          onPress={() => setActiveButton('Profile')}>
          <View
            style={{
              height: (windowHeight / 100) * 6,
              width: (windowWidth / 100) * 50,
              backgroundColor:
                activeButton === 'Profile' ? '#FFFFFF' : '#4681F4',
              flexDirection: 'row',
              alignItems: 'center',
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
            }}>
            <View style={styles.ButtonIconConatiner}>
              {activeButton === 'Profile' ? (
                <ProfileIcon width={25} height={25} fill={'#4681F4'} />
              ) : (
                <ProfileIcon width={25} height={25} fill={'#FFFFFF'} />
              )}
            </View>
            <Text
              style={{
                color: activeButton === 'Profile' ? '#4681F4' : '#FFFFFF',
                fontSize: 17,
                fontWeight: '600',
                fontFamily: 'Roboto-Regular',
                paddingBottom: 2,
              }}>
              Profile
            </Text>
          </View>
        </TouchableOpacity>

        {/**  Wallet  */}
        <TouchableOpacity
          underlayColor={'transparent'}
          onPress={() => setActiveButton('Wallet')}>
          <View
            style={{
              height: (windowHeight / 100) * 6,
              width: (windowWidth / 100) * 50,
              backgroundColor:
                activeButton === 'Wallet' ? '#FFFFFF' : '#4681F4',
              flexDirection: 'row',
              alignItems: 'center',
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
            }}>
            <View style={styles.ButtonIconConatiner}>
              {activeButton === 'Wallet' ? (
                <WalletIcon width={25} height={25} fill={'#4681F4'} />
              ) : (
                <WalletIcon width={25} height={25} fill={'#FFFFFF'} />
              )}
            </View>
            <Text
              style={{
                color: activeButton === 'Wallet' ? '#4681F4' : '#FFFFFF',
                fontSize: 17,
                fontWeight: '600',
                fontFamily: 'Roboto-Regular',
                paddingBottom: 2,
              }}>
              Wallet
            </Text>
          </View>
        </TouchableOpacity>
      </Drawer.Section>

      <Drawer.Section style={styles.drawerSectionContainer}>
        {/**  Trading  */}
        <TouchableOpacity
          underlayColor={'transparent'}
          onPress={() => setActiveButton('Trading')}>
          <View
            style={{
              height: (windowHeight / 100) * 6,
              width: (windowWidth / 100) * 50,
              backgroundColor:
                activeButton === 'Trading' ? '#FFFFFF' : '#4681F4',
              flexDirection: 'row',
              alignItems: 'center',
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
            }}>
            <View style={styles.ButtonIconConatiner}>
              {activeButton === 'Trading' ? (
                <TradingIcon width={25} height={25} fill={'#4681F4'} />
              ) : (
                <TradingIcon width={25} height={25} fill={'#FFFFFF'} />
              )}
            </View>
            <Text
              style={{
                color: activeButton === 'Trading' ? '#4681F4' : '#FFFFFF',
                fontSize: 17,
                fontWeight: '600',
                fontFamily: 'Roboto-Regular',
                paddingBottom: 2,
              }}>
              Trading
            </Text>
          </View>
        </TouchableOpacity>

        {/**  Products  */}
        <TouchableOpacity
          underlayColor={'transparent'}
          onPress={() => setActiveButton('Products')}>
          <View
            style={{
              height: (windowHeight / 100) * 6,
              width: (windowWidth / 100) * 50,
              backgroundColor:
                activeButton === 'Products' ? '#FFFFFF' : '#4681F4',
              flexDirection: 'row',
              alignItems: 'center',
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
            }}>
            <View style={styles.ButtonIconConatiner}>
              {activeButton === 'Products' ? (
                <ProductIcon width={25} height={25} fill={'#4681F4'} />
              ) : (
                <ProductIcon width={25} height={25} fill={'#FFFFFF'} />
              )}
            </View>
            <Text
              style={{
                color: activeButton === 'Products' ? '#4681F4' : '#FFFFFF',
                fontSize: 17,
                fontWeight: '600',
                fontFamily: 'Roboto-Regular',
                paddingBottom: 2,
              }}>
              Products
            </Text>
          </View>
        </TouchableOpacity>

        {/**  Employee  */}
        <TouchableOpacity
          underlayColor={'transparent'}
          onPress={() => setActiveButton('Employee')}>
          <View
            style={{
              height: (windowHeight / 100) * 6,
              width: (windowWidth / 100) * 50,
              backgroundColor:
                activeButton === 'Employee' ? '#FFFFFF' : '#4681F4',
              flexDirection: 'row',
              alignItems: 'center',
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
            }}>
            <View style={styles.ButtonIconConatiner}>
              {activeButton === 'Employee' ? (
                <EmployeeIconBlue width={25} height={25} />
              ) : (
                <EmployeeIconWhite width={25} height={25} />
              )}
            </View>
            <Text
              style={{
                color: activeButton === 'Employee' ? '#4681F4' : '#FFFFFF',
                fontSize: 17,
                fontWeight: '600',
                fontFamily: 'Roboto-Regular',
                paddingBottom: 2,
              }}>
              Employee
            </Text>
          </View>
        </TouchableOpacity>
      </Drawer.Section>

      <Drawer.Section style={styles.drawerSectionContainerBottom}>
        {/**  Setting  */}
        <TouchableOpacity
          underlayColor={'transparent'}
          onPress={() => setActiveButton('Setting')}>
          <View
            style={{
              height: (windowHeight / 100) * 6,
              width: (windowWidth / 100) * 50,
              backgroundColor:
                activeButton === 'Setting' ? '#FFFFFF' : '#4681F4',
              flexDirection: 'row',
              alignItems: 'center',
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
            }}>
            <View style={styles.ButtonIconConatiner}>
              {activeButton === 'Setting' ? (
                <SettingsIcon width={25} height={25} fill={'#4681F4'} />
              ) : (
                <SettingsIcon width={25} height={25} fill={'#FFFFFF'} />
              )}
            </View>
            <Text
              style={{
                color: activeButton === 'Setting' ? '#4681F4' : '#FFFFFF',
                fontSize: 17,
                fontWeight: '600',
                fontFamily: 'Roboto-Regular',
                paddingBottom: 2,
              }}>
              Setting
            </Text>
          </View>
        </TouchableOpacity>

        {/**  Help  */}
        <TouchableOpacity
          underlayColor={'transparent'}
          onPress={() => setActiveButton('Help')}>
          <View
            style={{
              height: (windowHeight / 100) * 6,
              width: (windowWidth / 100) * 50,
              backgroundColor: activeButton === 'Help' ? '#FFFFFF' : '#4681F4',
              flexDirection: 'row',
              alignItems: 'center',
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
            }}>
            <View style={styles.ButtonIconConatiner}>
              {activeButton === 'Help' ? (
                <HelpIconBlue width={25} height={25} />
              ) : (
                <HelpIconWhite width={25} height={25} />
              )}
            </View>
            <Text
              style={{
                color: activeButton === 'Help' ? '#4681F4' : '#FFFFFF',
                fontSize: 17,
                fontWeight: '600',
                fontFamily: 'Roboto-Regular',
                paddingBottom: 2,
              }}>
              Help
            </Text>
          </View>
        </TouchableOpacity>

        {/**  Logout  */}
        <TouchableOpacity
          underlayColor={'transparent'}
          onPress={() => setActiveButton('Logout')}>
          <View
            style={{
              height: (windowHeight / 100) * 6,
              width: (windowWidth / 100) * 50,
              backgroundColor:
                activeButton === 'Logout' ? '#FFFFFF' : '#4681F4',
              flexDirection: 'row',
              alignItems: 'center',
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
            }}>
            <View style={styles.ButtonIconConatiner}>
              {activeButton === 'Logout' ? (
                <LogoutIcon width={25} height={25} fill={'#4681F4'} />
              ) : (
                <LogoutIcon width={25} height={25} fill={'#FFFFFF'} />
              )}
            </View>
            <Text
              style={{
                color: activeButton === 'Logout' ? '#4681F4' : '#FFFFFF',
                fontSize: 17,
                fontWeight: '600',
                fontFamily: 'Roboto-Regular',
                paddingBottom: 2,
              }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    height: (windowHeight / 100) * 100,
    width: (windowWidth / 100) * 72,
    backgroundColor: '#4681F4',
  },

  drawerIconSection: {
    height: (windowHeight / 100) * 25,
    width: (windowWidth / 100) * 72,
    //backgroundColor: 'yellow',
    paddingTop: 40,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  drawerSectionContainer: {
    height: (windowHeight / 100) * 23,
    width: (windowWidth / 100) * 50,
    //backgroundColor: 'yellow',
    paddingTop: 15,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF33',
  },

  drawerSectionContainerBottom: {
    height: (windowHeight / 100) * 23,
    width: (windowWidth / 100) * 50,
    //backgroundColor: 'yellow',
    paddingTop: 15,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  ButtonIconConatiner: {
    height: (windowHeight / 100) * 25,
    width: (windowWidth / 100) * 25,
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DrawerNavContent;
