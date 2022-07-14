import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import svg from '../constants/svgs';
import color from '../constants/colors';
import dimensions from '../constants/dimensions';
import globalStyle from '../constants/globalStyle';

// ------- Custom Input
import CustomInput from '../controles/CustomInput';

// ------- ICONS
import {Icon} from 'react-native-elements';

// ------- Email Regex
const EMAIL_REGEX =
  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// ------ Auth Context
import {AuthContext} from '../context/AuthContext';

// ------ Custom Loader
import Loader from '../controles/Loader';

//------  Netwrok logger
import NetworkLogger from 'react-native-network-logger';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({navigation}) => {
  // useStates Email Passowrd
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const {isLoading, login} = useContext(AuthContext);

  const onLoginPressed = (mail, pass) => {
    login(mail, pass);
    navigation.navigate('DrawerNavigator');
  };

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

  // Navigation Functions

  const RegisteryScreenGoBack = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <View style={styles.container}>
      <Loader loading={isLoading} />
      <StatusBar backgroundColor={'#4681F4'} barStyle="light-content" />

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

      <View style={{justifyContent: 'space-between'}}>
        {/* Email */}
        <View style={globalStyle.InputHeadingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Email
          </Text>
          <Text style={globalStyle.Asteric}> *</Text>
        </View>

        <CustomInput
          name="userName"
          placeholder="Enter your name"
          value={email}
          onChangeText={text => setEmail(text)}
          svg1={<svg.userLoginSVG width={24} height={24} />}
        />

        {/* Password */}
        <View style={globalStyle.InputHeadingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Password
          </Text>
          <Text style={globalStyle.Asteric}> *</Text>
        </View>

        <CustomInput
          name="userPassword"
          placeholder="Your password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          svg1={<svg.loginLock width={24} height={24} />}
          svg2={<svg.EyeOpen width={20} height={20} />}
          svg3={<svg.EyeClosed width={20} height={20} />}
        />
      </View>

      {/* {activeButton === 'Email' ? (
        <View style={{justifyContent: 'space-between'}}>
          {/* Email 
          <View style={styles.EmailheadingText}>
            <Text
              style={styles.textfontsize1}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              Email
            </Text>
            <Text style={styles.Asteric}> *</Text>
          </View>

          <CustomInput
            name="userName"
            placeholder="Enter your name"
            control={control}
            rules={{required: true}}
            svg1={<svg.userLoginSVG width={24} height={24} />}
          />

          {/* Password 
          <View style={styles.Passwordheadingtext}>
            <Text
              style={styles.textfontsize1}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              Password
            </Text>
            <Text style={styles.Asteric}> *</Text>
          </View>

          <CustomInput
            name="userPassword"
            placeholder="Your password"
            control={control}
            secureTextEntry
            rules={{required: true}}
            svg1={<svg.loginLock width={24} height={24} />}
            svg2={<svg.EyeOpen width={20} height={20} />}
            svg3={<svg.EyeClosed width={20} height={20} />}
          />
        </View>
      ) : (
        <View style={{justifyContent: 'space-between'}}>

        
          {/* Phone Number 
          <View style={styles.PhoneNumbertext}>
            <Text
              style={styles.textfontsize1}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              Phone Number
            </Text>
            <Text style={styles.Asteric}> *</Text>
          </View>

          <CustomInput
            name="userPhoneNumber"
            control={control}
            secureTextEntry
            rules={{required: true}}
            countryCode="  +92"
            svg1={<svg.PakistanHalfFlagSvg width={25} height={25} />}
          />

          {/* Password 
          <View style={styles.Passwordheadingtext}>
            <Text
              style={styles.textfontsize1}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              Password
            </Text>
            <Text style={styles.Asteric}> *</Text>
          </View>

          <CustomInput
            name="userPassword"
            placeholder="Your password"
            control={control}
            secureTextEntry
            rules={{required: true}}
            svg1={<svg.loginLock width={24} height={24} />}
            svg2={<svg.EyeOpen width={20} height={20} />}
            svg3={<svg.EyeClosed width={20} height={20} />}
          />
        </View>
      )} */}
      {/* -------------------------------------- */}

      <TouchableOpacity
        onPress={() => {
          login(email, password);
        }}>
        <View style={styles.LogInButton}>
          <View
            style={{
              width: (windowWidth / 100) * 60,
              height: (windowHeight / 100) * 6,
              //backgroundColor: 'yellow',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 55,
            }}>
            <Text
              style={styles.BoldText}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              Log In
            </Text>
          </View>

          <View style={{marginRight: 15}}>
            <TouchableOpacity style={{paddingLeft: 20}}>
              <Icon type="fontawesome" name="login" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>

      {/* --------------------------------------------------------- */}
      <View style={styles.ForgetPassText}>
        <TouchableOpacity onPress={onForgetPassword}>
          <Text
            style={styles.ForgetGrayText}
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
          <TouchableOpacity onPress={onPressTermsCondition}>
            <Text
              style={styles.BlueText}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              {''}Terms & Conditions
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <NetworkLogger />
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

  text: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },

  headerNav: {
    height: (windowHeight / 100) * 6,
    width: (windowWidth / 100) * 10,
    //backgroundColor: 'yellow',
    justifyContent: 'center',
    paddingLeft: 4,
    marginTop: 8,
    marginRight: 8,
    marginLeft: 4,
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

  BoldText: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
  },

  PhoneNumberSwitch: {
    width: (windowWidth / 100) * 50,
    height: (windowHeight / 100) * 6,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 40,
  },

  textfontsize1: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: 'black',
  },

  ForgetPassText: {
    width: (windowWidth / 100) * 93,
    height: (windowHeight / 100) * 3,
    //backgroundColor: 'yellow',
    alignItems: 'flex-end',
    marginTop: 15,
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

  GrayText: {
    fontSize: 17,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: '#bec0c4',
  },

  ForgetGrayText: {
    fontSize: 17,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: '#bec0c4',
    textDecorationLine: 'underline',
  },

  BlueText: {
    fontSize: 17,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: '#6797f5',
    paddingLeft: 7,
  },
});

export default Login;
