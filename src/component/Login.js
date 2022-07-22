import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

//  Constants
import svg from '../constants/svgs';
import color from '../constants/colors';
import dimensions from '../constants/dimensions';
import globalStyle from '../constants/globalStyle';

//  Custom Controls
import CustomInput from '../controles/CustomInput';
import CustomButton from '../controles/customButton';

// Auth Context
import {AuthContext} from '../context/AuthContext';

// Custom Loader
import Loader from '../controles/Loader';

// Netwrok logger
import NetworkLogger from 'react-native-network-logger';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({navigation}) => {
  // useStates
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const {isLoading, login, loginError, setLoginError} = useContext(AuthContext);

  const onForgetPassword = () => {
    console.warn('Forget Password Pressed');
  };

  const onLoginInGoogle = () => {
    console.warn('Google on Pressed');
  };

  const onLoginInFacebook = () => {
    console.warn('Facebook Pressed on Pressed');
  };

  const onPressTermsCondition = () => {
    console.warn('Terms & Conditions pressed');
  };

  // goback()
  const RegisteryScreenGoBack = () => {
    navigation.navigate('RegisterScreen');
    setLoginError({});
  };

  return (
    <View style={styles.container}>
      <Loader loading={isLoading} />
      <StatusBar backgroundColor={color.blue} barStyle="light-content" />

      <View style={styles.LoginHeader}>
        <View style={styles.headerNav}>
          <TouchableOpacity onPress={RegisteryScreenGoBack}>
            <svg.LeftArrowSvgWhite
              width={17}
              height={17}
              style={{paddingLeft: 30}}
              fill={'#FFFFFF'}
            />
          </TouchableOpacity>
        </View>

        {/* Login Screen Text */}
        <View style={styles.LoginScreenLoginText}>
          <Text
            style={globalStyle.TitleText}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Login
          </Text>
        </View>

        {/* Email phone Number Switch */}
        <View style={styles.EmailPhoneNumberSwitch}>
          <TouchableHighlight
            //underlayColor={'transparent'}
            //onPress={() => setActiveButton('Email')}
            style={{
              // borderBottomColor: activeButton === 'Email' ? 'white' : '#4681F4',
              // borderBottomWidth: 5,
              //backgroundColor: 'red',
              height: dimensions.height / 15,
              width: dimensions.width / 1.5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={globalStyle.h2White}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              Email
            </Text>
          </TouchableHighlight>

          {/* <TouchableHighlight
            underlayColor={'transparent'}
            onPress={() => setActiveButton('PhoneNumber')}
            style={{
              borderBottomColor:
                activeButton === 'PhoneNumber' ? 'white' : '#4681F4',
              borderBottomWidth: 5,
              borderBottomRightRadius: 49,
              // backgroundColor: 'green',
              height: (windowHeight / 100) * 7,
              width: (windowWidth / 100) * 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={styles.BoldText}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              Phone Number
            </Text>
          </TouchableHighlight> */}
        </View>
      </View>

      <ScrollView>
        <View
          style={{
            justifyContent: 'space-between',
            // backgroundColor: 'yellow',
            paddingTop: 15,
          }}>
          {/** Email */}
          <CustomInput
            label="Email"
            name="email"
            placeholder="Enter your name"
            value={email}
            onChangeText={text => setEmail(text)}
            svg1={<svg.userLoginSVG width={24} height={24} />}
          />

          {loginError && (
            <Text
              style={{
                paddingLeft: 20,
                color: color.red,
                fontSize: 12,
              }}>
              {loginError.email}
            </Text>
          )}

          {/**  Password */}
          <CustomInput
            label="Password"
            name="password"
            placeholder="Your password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            svg1={<svg.loginLock width={24} height={24} />}
            password
          />

          {loginError && (
            <Text
              style={{
                paddingLeft: 20,
                color: color.red,
                fontSize: 12,
              }}>
              {loginError.password}
            </Text>
          )}
        </View>

        {/* {activeButton === 'Email' ? (
        <View style={{justifyContent: 'space-between'}}>
         
        </View>
      ) : (
        <View style={{justifyContent: 'space-between'}}>
        </View>
      )} */}
        {/* -------------------------------------- */}

        <TouchableOpacity
          onPress={() => {
            login(email, password);
          }}>
          <CustomButton
            label="Log In"
            svg1={<svg.LogInSvg width={20} height={20} fill={'white'} />}
          />
        </TouchableOpacity>

        {/* --------------------------------------------------------- */}
        <View style={styles.ForgetPassText}>
          <TouchableOpacity onPress={onForgetPassword}>
            <Text
              style={globalStyle.h3GreyForget}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              Forget password?
            </Text>
          </TouchableOpacity>
        </View>

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
            <TouchableOpacity onPress={onLoginInGoogle}>
              <svg.GoogleCircleSvg width={50} height={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onLoginInFacebook}>
              <svg.FacebookCircleSvg width={50} height={50} />
            </TouchableOpacity>
          </View>
        </TouchableHighlight>

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

        <NetworkLogger />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    flex: 1,
    backgroundColor: '#f8f9fa',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  LoginHeader: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 26,
    backgroundColor: '#4681F4',
    borderBottomRightRadius: 50,
    justifyContent: 'space-between',
  },

  headerNav: {
    height: dimensions.height / 20,
    width: dimensions.width / 8,
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 4,
    marginTop: 8,
    marginRight: 8,
  },

  LoginScreenLoginText: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 10,
    marginLeft: 20,
    //backgroundColor: 'orange',
    justifyContent: 'center',
  },

  EmailPhoneNumberSwitch: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 7,
    //backgroundColor: 'yellow',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomRightRadius: 50,
  },

  PhoneNumberSwitch: {
    width: (windowWidth / 100) * 50,
    height: (windowHeight / 100) * 6,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 40,
  },

  ForgetPassText: {
    width: dimensions.width / 1.1,
    height: (windowHeight / 100) * 3,
    //backgroundColor: 'yellow',
    alignItems: 'flex-end',
    margin: 15,
  },

  LogInButton: {
    width: (windowWidth / 100) * 85,
    height: (windowHeight / 100) * 7,
    flexDirection: 'row',
    backgroundColor: '#4681F4',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 30,
    borderRadius: 40,
    marginTop: 30,
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

  BottomText: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 12,
    //backgroundColor: 'yellow',
    marginLeft: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
