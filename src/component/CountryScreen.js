import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  StatusBar,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

// Svg constant
import svg from '../constants/svgs';

import {Icon} from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CountryScreen = ({navigation}) => {
  const RegisteryScreenBack = () => {
    navigation.navigate('RegisterScreen');
  };

  const SelectCity = () => {
    navigation.navigate('SelectCityScreen');
  };

  const SignUpScreenLogin = () => {
    navigation.navigate('SignUpScreen');
  };

  const BottomNavigationHomeScreen = () => {
    navigation.navigate('BottomNavigation');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#f8f9fa'} barStyle="dark-content" />
      <View style={styles.headerNav}>
        <TouchableOpacity onPress={RegisteryScreenBack}>
          <Icon type="ant-design" name="left" size={20} color="#212529" />
        </TouchableOpacity>
      </View>

      {/* -------------------------------------- */}

      <View style={styles.CountryScreenimageView}>
        <svg.PosterSvgCountryScreen width={200} height={200} />
      </View>

      {/* -------------------------------------- */}

      <View style={styles.welcomeView}>
        <Text style={styles.h2} adjustsFontSizeToFit={true} numberOfLines={1}>
          Welcome to Proptech Global
        </Text>
      </View>

      {/* -------------------------------------- */}

      <View style={styles.WelcomeDescriptiveText}>
        <Text
          style={styles.text1}
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          Before we start, please enter your current
        </Text>
        <Text
          style={styles.text1}
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          location of residence.
        </Text>
      </View>

      {/* ---------------------------------------- */}

      <View style={styles.CountryRegionView}>
        <Text style={styles.h3} adjustsFontSizeToFit={true} numberOfLines={1}>
          Country/ Area of Residence
        </Text>

        <TouchableHighlight underlayColor="#DDDDDD">
          <View style={styles.CountryBox}>
            <TouchableOpacity onPress={SelectCity}>
              <View
                style={{
                  flexDirection: 'row',
                  height: (windowHeight / 100) * 7,
                  width: (windowWidth / 100) * 80,
                  alignItems: 'center',
                  paddingLeft: 10,
                }}>
                <svg.pakFlagSvgCountryScreen width={25} height={25} />

                <TouchableOpacity></TouchableOpacity>
                <Text
                  style={styles.text1Bold}
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}>
                  Pakistan
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableHighlight>
      </View>

      {/* ---------------------------------------- */}

      {/* ---------------------------------------- */}

      <View style={styles.RegionDescriptiveText}>
        <Text style={styles.text1}>
          The registration process is subject to change based on the information
          you provide.{' '}
        </Text>
      </View>

      {/* ---------------------------------------- */}

      <TouchableOpacity onPress={SignUpScreenLogin}>
        <View style={styles.ConfirmButton}>
          <Text
            style={styles.BoldText}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Confirm
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f9fa',
    flexDirection: 'column',
    width: windowWidth,
    height: windowHeight,
    justifyContent: 'space-between',
    paddingBottom: 150,
  },

  text: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },

  headerNav: {
    height: (windowHeight / 100) * 5,
    width: (windowWidth / 100) * 10,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    paddingLeft: 4,
    marginTop: 8,
    marginRight: 8,
    marginLeft: 4,
  },

  CountryScreenimageView: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 25,
    //backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcomeView: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 5,
    alignItems: 'center',
    // backgroundColor: 'orange',
    justifyContent: 'center',
    marginLeft: 20,
  },

  h2: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: '#070707',
  },

  WelcomeDescriptiveText: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 5,
    marginLeft: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text1: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: '#70747D',
  },

  text1Bold: {
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: '#2C3131',
    paddingLeft: 18,
  },

  h3: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: '#2C3131',
  },

  CountryRegionView: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 11,
    justifyContent: 'space-between',
    //backgroundColor: 'yellow',
    paddingLeft: 20,
    marginTop: 30,
  },

  CountryBox: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 7,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    //backgroundColor: 'black',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: '#DFE2E4',
    borderWidth: 1,
    paddingLeft: 10,
  },

  RegionDescriptiveText: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 7,
    marginLeft: 20,
    // backgroundColor: 'yellow',
    flexDirection: 'row',
  },

  ConfirmButton: {
    width: (windowWidth / 100) * 85,
    height: (windowHeight / 100) * 7,
    flexDirection: 'row',
    backgroundColor: '#4681F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    borderRadius: 40,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },

  BoldText: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
  },
});

export default CountryScreen;
