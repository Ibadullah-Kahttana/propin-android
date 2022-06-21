import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  StatusBar,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
} from 'react-native';

import LogInScreenLogo from '../assets/Svgs/RegisterScreenSvg/logo.svg';

import LoginScreenFacebookWhiteLogo from '../assets/Svgs/LogInScreenSVG/facebookwhite.svg';
import LoginScreenGoogleCircleLogo from '../assets/Svgs/LogInScreenSVG/GoogleCircle.svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RegisterScreen = ({navigation}) => {
  const RegisteryLoginOption = () => {
    navigation.navigate('LoginScreen');
  };

  const CountryOption = () => {
    navigation.navigate('CountryScreen');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#f8f9fa'} barStyle="dark-content" />

      <View style={styles.RegisterScreenimageView}>
        <LogInScreenLogo width={170} height={161} />
      </View>
      {/* -------------------------------------- */}
      <View style={styles.welcomeView}>
        <Text style={styles.h2} adjustsFontSizeToFit={true} numberOfLines={1}>
          Welcome to Proptech Global
        </Text>
      </View>
      {/* -------------------------------------- */}
      <Pressable style={styles.signupView} onPress={CountryOption}>
        <Text style={styles.h3} adjustsFontSizeToFit={true} numberOfLines={1}>
          Sign Up With Your Email
        </Text>
      </Pressable>
      {/* -------------------------------------- */}
      <View style={styles.orView}>
        <View style={styles.ORLines}></View>
        <Text style={styles.h3} adjustsFontSizeToFit={true} numberOfLines={1}>
          OR
        </Text>
        <View style={styles.ORLines}></View>
      </View>
      {/* -------------------------------------- */}
      <TouchableHighlight underlayColor="#DDDDDD">
        <View style={styles.SocialLinksGoogleFacebook}>
          <TouchableOpacity>
            <LoginScreenGoogleCircleLogo width={60} height={60} />
          </TouchableOpacity>
          <TouchableOpacity>
            <LoginScreenFacebookWhiteLogo width={60} height={60} />
          </TouchableOpacity>
        </View>
      </TouchableHighlight>

      {/* -------------------------------------- */}

      <View style={styles.AlreadyText}>
        <Text
          style={styles.GrayText}
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          Already registered?
        </Text>

        <TouchableOpacity>
          <Text
            style={styles.BlueText}
            onPress={RegisteryLoginOption}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>
      {/* -------------------------------------- */}
      <View style={styles.BottomText}>
        <Text
          style={styles.GrayText}
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          By creating an account you agree to our
        </Text>

        <View style={{flexDirection: 'row'}}>
          <Text
            style={styles.GrayText}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            our{''}
          </Text>
          <TouchableOpacity>
            <Text
              style={styles.BlueText}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              {''}Terms & Conditions
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#f8f9fa',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  text: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },

  RegisterScreenimageView: {
    marginTop: 30,
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 25,
    //backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcomeView: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 5,
    //backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },

  h2: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: '#070707',
  },

  h3: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: '#2C3131',
  },

  signupView: {
    width: (windowWidth / 100) * 85,
    height: (windowHeight / 100) * 7,
    backgroundColor: '#EAECEE',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    borderRadius: 40,
  },

  orView: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 8,
    //backgroundColor: 'yellow',
    marginLeft: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },

  ORLines: {
    //backgroundColor: 'orange',
    width: (windowWidth / 100) * 35,
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    paddingLeft: 1,
  },

  SocialLinksGoogleFacebook: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 5,
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: 20,
  },

  AlreadyText: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 5,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  GrayText: {
    fontSize: 17,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: '#bec0c4',
  },

  BlueText: {
    fontSize: 17,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: '#6797f5',
    paddingLeft: 7,
  },

  BottomText: {
    width: (windowWidth / 100) * 70,
    height: (windowHeight / 100) * 15,
    //backgroundColor: 'yellow',
    marginLeft: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RegisterScreen;
