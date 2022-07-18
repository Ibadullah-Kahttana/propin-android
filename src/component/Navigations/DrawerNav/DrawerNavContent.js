import {View, StyleSheet, Dimensions} from 'react-native';
import React, {useState, useContext} from 'react';

import {Drawer, Text} from 'react-native-paper';

import svg from '../../../constants/svgs';
import color from '../../../constants/colors';
import dimensions from '../../../constants/dimensions';
import globalStyle from '../../../constants/globalStyle';

// ------ Custom Loader
import Loader from '../../../controles/Loader';

// ------ Auth Context
import {AuthContext} from '../../../context/AuthContext';

import {TouchableOpacity} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DrawerNavContent = ({navigation}) => {
  const [activeButton, setActiveButton] = useState('Home');
  const {userInfo, isLoading, logout} = useContext(AuthContext);

  const handler = param => {
    setActiveButton(param);
    navigation.navigate(param);
  };

  return (
    <View style={styles.drawerContent}>
      <Loader loading={isLoading} />
      {/** LOG */}
      <Drawer.Section style={styles.drawerIconSection}>
        <svg.PropInLogoDrawable height={130} width={130} />
      </Drawer.Section>

      {/** Sections */}
      <Drawer.Section style={styles.drawerSectionContainer}>
        {/**  Home  */}
        <TouchableOpacity
          underlayColor={'transparent'}
          onPress={() => handler('Home')}>
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
                <svg.HomeSvgDrawable width={25} height={25} fill={'#4681F4'} />
              ) : (
                <svg.HomeSvgDrawable width={25} height={25} fill={'#FFFFFF'} />
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
          onPress={() => handler('Profile')}>
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
                <svg.ProductSvgDrawable
                  width={25}
                  height={25}
                  fill={'#4681F4'}
                />
              ) : (
                <svg.ProductSvgDrawable
                  width={25}
                  height={25}
                  fill={'#FFFFFF'}
                />
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
          onPress={() => handler('Wallet')}>
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
                <svg.WalletSvgDrawable
                  width={25}
                  height={25}
                  fill={'#4681F4'}
                />
              ) : (
                <svg.WalletSvgDrawable
                  width={25}
                  height={25}
                  fill={'#FFFFFF'}
                />
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
          onPress={() => handler('Trading')}>
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
                <svg.TradingSvgDrawable
                  width={25}
                  height={25}
                  fill={'#4681F4'}
                />
              ) : (
                <svg.TradingSvgDrawable
                  width={25}
                  height={25}
                  fill={'#FFFFFF'}
                />
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
          onPress={() => handler('Products')}>
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
                <svg.ProductSvgDrawable
                  width={25}
                  height={25}
                  fill={'#4681F4'}
                />
              ) : (
                <svg.ProductSvgDrawable
                  width={25}
                  height={25}
                  fill={'#FFFFFF'}
                />
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
          onPress={() => handler('Employee')}>
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
                <svg.EmployeeSvgBlueDrawable width={25} height={25} />
              ) : (
                <svg.EmployeeSvgWhiteDrawable width={25} height={25} />
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
          onPress={() => handler('ProfileSettings')}>
          <View
            style={{
              height: (windowHeight / 100) * 6,
              width: (windowWidth / 100) * 50,
              backgroundColor:
                activeButton === 'ProfileSettings' ? '#FFFFFF' : '#4681F4',
              flexDirection: 'row',
              alignItems: 'center',
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
            }}>
            <View style={styles.ButtonIconConatiner}>
              {activeButton === 'ProfileSettings' ? (
                <svg.SettingsSvgDrawable
                  width={25}
                  height={25}
                  fill={'#4681F4'}
                />
              ) : (
                <svg.SettingsSvgDrawable
                  width={25}
                  height={25}
                  fill={'#FFFFFF'}
                />
              )}
            </View>
            <Text
              style={{
                color:
                  activeButton === 'ProfileSettings' ? '#4681F4' : '#FFFFFF',
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
          onPress={() => handler('Home')}>
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
                <svg.HelpSvgBlueDrawable width={25} height={25} />
              ) : (
                <svg.HelpSvgWhiteDrawable width={25} height={25} />
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
        <TouchableOpacity underlayColor={'transparent'} onPress={logout}>
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
                <svg.LogoutSvg width={25} height={25} fill={'#4681F4'} />
              ) : (
                <svg.LogoutSvg width={25} height={25} fill={'#FFFFFF'} />
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
