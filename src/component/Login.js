import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  View,
  StatusBar,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

// Svgs Constant
import svg from '../constants/svgs';

// ------- ICONS
import {Icon} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({navigation}) => {
  const [activeButton, setActiveButton] = useState('Email');

  const RegisteryScreenGoBack = () => {
    navigation.navigate('RegisterScreen');
  };

  const NavigationScreen = () => {
    navigation.navigate('DrawerNavigator');
  };

  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  // const {signIn} = React.useContext(AuthContext);

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const loginHandle = (userName, password) => {
    signIn(userName, password);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#4681F4'} barStyle="light-content" />

      <View style={styles.LoginHeader}>
        <View style={styles.headerNav}>
          <TouchableOpacity onPress={RegisteryScreenGoBack}>
            <svg.LeftArrowSvgWhite width={17} height={17} />
          </TouchableOpacity>
        </View>

        {/* Login Screen Text */}
        <View style={styles.LoginScreenLoginText}>
          <Text style={styles.h1} adjustsFontSizeToFit={true} numberOfLines={1}>
            Login
          </Text>
        </View>

        {/* Email phone Number Switch */}
        <View style={styles.EmailPhoneNumberSwitch}>
          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={() => setActiveButton('Email')}
            style={{
              borderBottomColor: activeButton === 'Email' ? 'white' : '#4681F4',
              borderBottomWidth: 5,

              // backgroundColor: 'red',
              height: (windowHeight / 100) * 7,
              width: (windowWidth / 100) * 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={styles.BoldText}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              Email
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
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
          </TouchableHighlight>
        </View>
      </View>

      {/* ---------------------------------------- */}

      {activeButton === 'Email' ? (
        <View style={{justifyContent: 'space-between'}}>
          <View style={styles.EmailheadingText}>
            <Text
              style={styles.textfontsize1}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              Email
            </Text>
            <Text style={styles.Asteric}> *</Text>
          </View>

          <View style={styles.EmailBox}>
            <View style={styles.action}>
              <FontAwesome
                name="user-o"
                color="#171717"
                size={17}
                style={{paddingLeft: 10, paddingRight: 10}}
              />
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="Enter your name"
                onChangeText={val => textInputChange(val)}
              />
              {/* {data.check_textInputChange ? (
            <Animatable.View animation={'bounceIn'}>
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null} */}
            </View>
          </View>

          {/* -------------------------------------- */}
          <View style={styles.Passwordheadingtext}>
            <Text
              style={styles.textfontsize1}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              Password
            </Text>
            <Text style={styles.Asteric}> *</Text>
          </View>

          {/* ---------------------------------------- */}

          <View style={styles.PasswordBox}>
            <View style={styles.action}>
              <Feather
                name="lock"
                color="#171717"
                size={17}
                style={{paddingLeft: 10, paddingRight: 10}}
              />

              <TextInput
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="Your password"
                onChangeText={val => handlePasswordChange(val)}
              />

              <TouchableOpacity
                onPress={updateSecureTextEntry}
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  paddingRight: 10,
                }}>
                {data.secureTextEntry ? (
                  <Feather name="eye" color="#C6C6C7" size={17} />
                ) : (
                  <Feather name="eye-off" color="#C6C6C7" size={17} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* -------------------------------------- */}
        </View>
      ) : (
        <View style={{justifyContent: 'space-between'}}>
          <View style={styles.PhoneNumbertext}>
            <Text
              style={styles.textfontsize1}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              Phone Number
            </Text>
            <Text style={styles.Asteric}> *</Text>
          </View>

          <View style={styles.PhoneNoBox}>
            <View
              style={{
                height: (windowHeight / 100) * 7,
                width: (windowWidth / 100) * 30,
                paddingLeft: 5,
                //backgroundColor: 'yellow',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <svg.PakistanHalfFlagSvg width={25} height={25} />
              <Text
                style={{fontSize: 17, fontWeight: '700', color: '#2C3131'}}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                {' '}
                +92
              </Text>
              <FontAwesome
                name="caret-down"
                color="#828282"
                size={17}
                style={{paddingLeft: 10, paddingRight: 10}}
              />
            </View>
            <View style={styles.action}>
              <TextInput
                style={styles.PhoneNumbertextInput}
                autoCapitalize="none"
                onChangeText={val => textInputChange(val)}
              />
            </View>
          </View>

          {/* -------------------------------------- */}
          <View style={styles.Passwordheadingtext}>
            <Text
              style={styles.textfontsize1}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              Password
            </Text>
            <Text style={styles.Asteric}> *</Text>
          </View>

          {/* ---------------------------------------- */}

          <View style={styles.PasswordBox}>
            <View style={styles.action}>
              <Feather
                name="lock"
                color="#171717"
                size={17}
                style={{paddingLeft: 10, paddingRight: 10}}
              />

              <TextInput
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="Your password"
                onChangeText={val => handlePasswordChange(val)}
              />

              <TouchableOpacity
                onPress={updateSecureTextEntry}
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  paddingRight: 10,
                }}>
                {data.secureTextEntry ? (
                  <Feather name="eye" color="#C6C6C7" size={17} />
                ) : (
                  <Feather name="eye-off" color="#C6C6C7" size={17} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {/* -------------------------------------- */}

      <TouchableOpacity onPress={NavigationScreen}>
        <View style={styles.LogInButton}>
          <View
            style={{
              width: (windowWidth / 100) * 60,
              height: (windowHeight / 100) * 8,
              // backgroundColor: 'yellow',
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
        <TouchableOpacity>
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
        <Text style={styles.h3} adjustsFontSizeToFit={true} numberOfLines={1}>
          OR
        </Text>
        <View style={styles.ORLines}></View>
      </View>

      {/* -------------------------------------- */}
      <TouchableHighlight underlayColor="#DDDDDD">
        <View style={styles.SocialLinksGoogleFacebook}>
          <TouchableOpacity>
            <svg.GoogleCircleSvg width={50} height={50} />
          </TouchableOpacity>
          <TouchableOpacity>
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

  h1: {
    fontSize: 35,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
  },

  Asteric: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: 'red',
  },

  h3: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: '#2C3131',
  },

  EmailPhonePassMidBox: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 35,
    // /backgroundColor: 'yellow',
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

  EmailSwitch: {
    width: (windowWidth / 100) * 50,
    height: (windowHeight / 100) * 6,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
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

  EmailBox: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 7,
    //marginTop: 5,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    borderRadius: 8,
    borderColor: '#DFE2E4',
    borderWidth: 1,
    paddingLeft: 5,
  },

  PhoneNoBox: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 7,
    //marginTop: 5,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 20,
    borderRadius: 8,
    borderColor: '#DFE2E4',
    borderWidth: 1,
    // backgroundColor: 'red',
  },

  PasswordBox: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 7,
    //marginTop: 5,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    borderRadius: 8,
    borderColor: '#DFE2E4',
    borderWidth: 1,
    paddingLeft: 5,
  },

  EmailheadingText: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 5,
    marginTop: 10,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },

  textfontsize1: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: '#8F92A1',
  },

  PhoneNumbertext: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 5,
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20,
    flexDirection: 'row',
    //backgroundColor: 'yellow',
  },

  action: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'yellow',
  },

  textInput: {
    // backgroundColor: 'blue',
    flex: 1,
    alignItems: 'center',
    height: (windowHeight / 100) * 7,
    fontSize: 16,
  },

  PhoneNumbertextInput: {
    //backgroundColor: 'blue',
    alignItems: 'center',
    width: (windowWidth / 100) * 60,
    height: (windowHeight / 100) * 5,
    fontSize: 18,
  },

  Passwordheadingtext: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 5,
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 20,
    alignItems: 'center',
    // backgroundColor: 'yellow',
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

  imgBackgroundlightElipse: {
    width: (windowWidth / 100) * 10,
    height: (windowHeight / 100) * 15,
  },
});

export default Login;
