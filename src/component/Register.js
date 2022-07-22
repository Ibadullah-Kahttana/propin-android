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

import svg from '../constants/svgs';
import color from '../constants/colors';
import dimensions from '../constants/dimensions';
import globalStyle from '../constants/globalStyle';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RegisterScreen = ({navigation}) => {
  // OnPress Functions

  const onPressTermsCondition = () => {
    console.warn('Terms & Conditions pressed');
  };

  const onSignUpGoogle = () => {
    console.warn('Google on Pressed');
  };

  const onSignUpFacebook = () => {
    console.warn('Facebook Pressed on Pressed');
  };

  // Navigation Functions

  const RegisteryLoginOption = () => {
    navigation.navigate('LoginScreen');
  };

  const CountryOption = () => {
    navigation.navigate('CountryScreen');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={color.backgroundColor}
        barStyle="dark-content"
      />

      <View style={styles.RegisterScreenimageView}>
        <svg.logInLogoSVGRegister width={170} height={161} />
      </View>
      {/* -------------------------------------- */}
      <View style={styles.welcomeView}>
        <Text
          style={globalStyle.h1TitleBlackBold}
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          Welcome to Proptech Global
        </Text>
      </View>
      {/* -------------------------------------- */}
      <Pressable style={styles.signupView} onPress={CountryOption}>
        <Text
          style={globalStyle.h2black}
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          Sign Up With Your Email
        </Text>
      </Pressable>
      {/* -------------------------------------- */}
      <View style={styles.orView}>
        <View style={styles.ORLines}></View>
        <Text
          style={globalStyle.h2black}
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          OR
        </Text>
        <View style={styles.ORLines}></View>
      </View>
      {/* -------------------------------------- */}
      <TouchableHighlight underlayColor="#DDDDDD">
        <View style={styles.SocialLinksGoogleFacebook}>
          <TouchableOpacity onPress={onSignUpGoogle}>
            <svg.GoogleSvgRegister width={60} height={60} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onSignUpFacebook}>
            <svg.FacebookWhiteSvgRegister width={60} height={60} />
          </TouchableOpacity>
        </View>
      </TouchableHighlight>

      {/* -------------------------------------- */}

      <View style={styles.AlreadyText}>
        <Text
          style={globalStyle.h3Grey}
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          Already registered?
        </Text>

        <TouchableOpacity>
          <Text
            style={globalStyle.h3Blue}
            onPress={RegisteryLoginOption}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            {'   '}
            Log In
          </Text>
        </TouchableOpacity>
      </View>
      {/* -------------------------------------- */}
      <View style={styles.BottomText}>
        <Text
          style={globalStyle.h3Grey}
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          By creating an account you agree to our
        </Text>

        <View style={{flexDirection: 'row'}}>
          <Text
            style={globalStyle.h3Grey}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            our{''}
          </Text>
          <TouchableOpacity onPress={onPressTermsCondition}>
            <Text
              style={globalStyle.h3Blue}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              {'  '}Terms & Conditions
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

  RegisterScreenimageView: {
    marginTop: 30,
    width: dimensions.width / 1,
    height: dimensions.height / 4,
    //backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcomeView: {
    width: dimensions.width / 1,
    height: dimensions.height / 20,
    //backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
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
