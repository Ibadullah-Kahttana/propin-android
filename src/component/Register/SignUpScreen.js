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

//Svgs Constant
import svg from '../../constants/svgs';

// ------- Custom Input
import CustomInput from '../../controles/CustomInput';

// ------- Email Regex
const EMAIL_REGEX =
  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// ------ Auth Context
import {AuthContext} from '../../context/AuthContext';

// ------ Custom
import Loader from '../../controles/Loader';

//------  Netwrok logger
import NetworkLogger from 'react-native-network-logger';

import {ScrollView} from 'react-native-gesture-handler';
import globalStyle from '../../constants/globalStyle';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignUpScreen = ({navigation}) => {
  const [activeButton, setActiveButton] = useState('Agent');

  // Input Filed States Agent and Agency
  const [agentName, setAgentName] = useState('');
  const [agentEmail, setAgentEmail] = useState('');
  const [agentPhoneNumber, setAgentPhoneNumber] = useState('');
  const [agentPassword, setAgentPassword] = useState('');
  const [agentConfirmPassword, setAgentConfirmPassword] = useState('');

  const resetAgentState = () => {
    setAgentName('');
    setAgentEmail('');
    setAgentPhoneNumber('');
    setAgentPassword('');
    setAgentConfirmPassword('');
    setActiveButton('Agency');
    setAgentError({});
  };

  const [agencyName, setAgencyName] = useState('');
  const [agencyEmail, setAgencyEmail] = useState('');
  const [agencyPhoneNumber, setAgencyPhoneNumber] = useState('');
  const [agencyPassword, setAgencyPassword] = useState('');
  const [agencyConfirmPassword, setAgencyConfirmPassword] = useState('');

  const resetAgencyState = () => {
    setAgencyName('');
    setAgencyEmail('');
    setAgencyPhoneNumber('');
    setAgencyPassword('');
    setAgencyConfirmPassword('');
    setActiveButton('Agent');
    setAgencyError({});
  };

  const {
    isLoading,
    agentRegister,
    agencyRegister,
    agentError,
    setAgentError,
    agencyError,
    setAgencyError,
  } = useContext(AuthContext);

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

  const onSignUpAgencyPressed = () => {
    //console.log(data);
    navigation.navigate('LoginScreen');
  };

  const onSignUpAgentPressed = () => {
    //console.log(data);
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#4681F4'} barStyle="light-content" />
      <Loader loading={isLoading} />

      <View style={styles.LoginHeader}>
        <View style={styles.headerNav}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{paddingLeft: 10}}>
            <svg.LeftArrowSvgWhite width={17} height={17} fill={'#FFFFFF'} />
          </TouchableOpacity>
        </View>

        {/* -------------------------------------- */}

        <View style={styles.LoginScreenLoginText}>
          <Text
            style={globalStyle.TitleText}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Register
          </Text>
        </View>

        {/* -------------------------------------- */}
        <View style={styles.EmailPhoneNumberSwitch}>
          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={resetAgencyState}
            style={{
              borderBottomColor: activeButton === 'Agent' ? 'white' : '#4681F4',
              borderBottomWidth: 5,

              // backgroundColor: 'red',
              height: (windowHeight / 100) * 7,
              width: (windowWidth / 100) * 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={globalStyle.h2White}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              Agent
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={resetAgentState}
            style={{
              borderBottomColor:
                activeButton === 'Agency' ? 'white' : '#4681F4',
              borderBottomWidth: 5,
              borderBottomRightRadius: 49,
              // backgroundColor: 'green',
              height: (windowHeight / 100) * 7,
              width: (windowWidth / 100) * 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={globalStyle.h2White}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              Agency
            </Text>
          </TouchableHighlight>
        </View>
      </View>
      {/* ---------------------------------------- */}

      {activeButton === 'Agent' ? (
        <ScrollView>
          {/** Agent Name */}

          <CustomInput
            label="Name"
            name="agentName"
            placeholder="Enter your name"
            value={agentName}
            onChangeText={text => setAgentName(text)}
            svg1={<svg.userLoginSVG width={24} height={24} />}
          />

          {agentError && (
            <Text
              style={{
                paddingLeft: 20,
                color: 'red',
                fontSize: 12,
              }}>
              {agentError.name}
            </Text>
          )}

          {/* Agent Email */}

          <CustomInput
            label="Email"
            name="agentEmail"
            placeholder="Enter your email"
            value={agentEmail}
            onChangeText={text => setAgentEmail(text)}
            svg1={<svg.envelope width={25} height={25} />}
          />

          {agentError && (
            <Text
              style={{
                paddingLeft: 20,
                color: 'red',
                fontSize: 12,
              }}>
              {agentError.email}
            </Text>
          )}

          {/** Agent Phone Number */}

          <CustomInput
            keyboardType="numeric"
            label="Phone Number"
            name="agentPhoneNumber"
            value={agentPhoneNumber}
            onChangeText={text => setAgentPhoneNumber(text)}
            countryCode="  +92"
            svg1={<svg.PakistanHalfFlagSvg width={25} height={25} />}
          />

          {agentError && (
            <Text
              style={{
                paddingLeft: 20,
                color: 'red',
                fontSize: 12,
              }}>
              {agentError.phone}
            </Text>
          )}

          {/* Agent Password */}

          <CustomInput
            label="password"
            name="agentPassword"
            placeholder="Your password"
            value={agentPassword}
            onChangeText={text => setAgentPassword(text)}
            secureTextEntry
            svg1={<svg.loginLock width={24} height={24} />}
            password
          />

          {agentError && (
            <Text
              style={{
                paddingLeft: 20,
                color: 'red',
                fontSize: 12,
              }}>
              {agentError.password}
            </Text>
          )}

          {/* Agent Confirm Password */}

          <CustomInput
            label="Confirm Password"
            name="agentConfirmPassword"
            placeholder="Confirm your password"
            value={agentConfirmPassword}
            onChangeText={text => setAgentConfirmPassword(text)}
            secureTextEntry
            svg1={<svg.loginLock width={24} height={24} />}
            password
          />

          {agentError && (
            <Text
              style={{
                paddingLeft: 20,
                color: 'red',
                fontSize: 12,
              }}>
              {agentError.confirm_password}
            </Text>
          )}
          {/* -----------------   Sign Up Agent   ------------------- */}

          <TouchableOpacity
            onPress={() => {
              agentRegister(
                agentName,
                agentEmail,
                agentPhoneNumber,
                agentPassword,
                agentConfirmPassword,
              );
            }}>
            <View style={styles.SignUpButton}>
              <View
                style={{
                  width: (windowWidth / 100) * 60,
                  height: (windowHeight / 100) * 8,
                  // backgroundColor: 'yellow',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={globalStyle.h2White}
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}>
                  Sign Up
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* OR */}

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

          {/* Social Icons */}

          <TouchableHighlight underlayColor="#DDDDDD">
            <View style={styles.SocialLinksGoogleFacebook}>
              <TouchableOpacity onPress={onSignUpGoogle}>
                <svg.GoogleCircleSvg width={50} height={50} />
              </TouchableOpacity>
              <TouchableOpacity onPress={onSignUpFacebook}>
                <svg.FacebookCircleSvg width={50} height={50} />
              </TouchableOpacity>
            </View>
          </TouchableHighlight>

          {/* Bottom Text */}

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
        </ScrollView>
      ) : (
        <ScrollView>
          {/** Agency Name */}

          <CustomInput
            label="Agency Name"
            name="agencyName"
            placeholder="Enter agency name"
            value={agencyName}
            onChangeText={text => setAgencyName(text)}
            svg1={<svg.userLoginSVG width={24} height={24} />}
          />

          {agencyError && (
            <Text
              style={{
                paddingLeft: 20,
                color: 'red',
                fontSize: 12,
              }}>
              {agencyError.name}
            </Text>
          )}

          {/** Agency Email */}

          <CustomInput
            label="Email"
            name="agencyEmail"
            placeholder="Enter email"
            value={agencyEmail}
            onChangeText={text => setAgencyEmail(text)}
            svg1={<svg.envelope width={25} height={25} />}
          />

          {agencyError && (
            <Text
              style={{
                paddingLeft: 20,
                color: 'red',
                fontSize: 12,
              }}>
              {agencyError.email}
            </Text>
          )}

          {/** Agency Phone Number */}

          <CustomInput
            label="Phone Number"
            name="agencyPhoneNumber"
            value={agencyPhoneNumber}
            onChangeText={text => setAgencyPhoneNumber(text)}
            countryCode="  +92"
            svg1={<svg.PakistanHalfFlagSvg width={25} height={25} />}
          />

          {agencyError && (
            <Text
              style={{
                paddingLeft: 20,
                color: 'red',
                fontSize: 12,
              }}>
              {agencyError.phone}
            </Text>
          )}

          {/* Agency Password */}

          <CustomInput
            label="Password"
            name="agencyPassword"
            placeholder="Your password"
            value={agencyPassword}
            onChangeText={text => setAgencyPassword(text)}
            secureTextEntry
            svg1={<svg.loginLock width={24} height={24} />}
          />

          {agencyError && (
            <Text
              style={{
                paddingLeft: 20,
                color: 'red',
                fontSize: 12,
              }}>
              {agencyError.password}
            </Text>
          )}

          {/* Agency Confirm Password */}

          <CustomInput
            label="Confirm Password"
            name="agencyConfirmPassword"
            placeholder="Confirm your password"
            value={agencyConfirmPassword}
            onChangeText={text => setAgencyConfirmPassword(text)}
            secureTextEntry
            svg1={<svg.loginLock width={24} height={24} />}
          />

          {agencyError && (
            <Text
              style={{
                paddingTop: 5,
                paddingLeft: 20,
                color: 'red',
                fontSize: 12,
              }}>
              {agencyError.confirm_password}
            </Text>
          )}

          {/* -------------------------------------- */}

          <TouchableOpacity
            onPress={() => {
              agencyRegister(
                agencyName,
                agencyEmail,
                agencyPhoneNumber,
                agencyPassword,
                agencyConfirmPassword,
              );
            }}>
            <View style={styles.SignUpButton}>
              <View
                style={{
                  width: (windowWidth / 100) * 60,
                  height: (windowHeight / 100) * 8,
                  // backgroundColor: 'yellow',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={globalStyle.h2White}
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}>
                  Sign Up
                </Text>
              </View>
            </View>
          </TouchableOpacity>

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
        </ScrollView>
      )}
      {/* -------------------------------------- */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    flex: 1,
    backgroundColor: '#f8f9fa',
    //backgroundColor: 'yellow',
    flexDirection: 'column',
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
    flexDirection: 'row',
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

  PhoneNumberSwitch: {
    width: (windowWidth / 100) * 50,
    height: (windowHeight / 100) * 6,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 40,
  },

  textfontsize1: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: 'black',
  },

  SignUpButton: {
    width: (windowWidth / 100) * 85,
    height: (windowHeight / 100) * 7,
    flexDirection: 'row',
    backgroundColor: '#4681F4',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 30,
    borderRadius: 40,
    marginTop: 40,
  },

  orView: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 8,
    marginTop: 20,
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
    marginTop: 20,
  },

  BottomText: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 12,
    //backgroundColor: 'yellow',
    marginLeft: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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

export default SignUpScreen;
