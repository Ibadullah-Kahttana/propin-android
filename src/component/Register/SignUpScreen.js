import React, {useState} from 'react';
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

// ---- UseForm Hook
import {useForm, Controller} from 'react-hook-form';

// ------- Custom Input
import CustomInput from '../../controles/CustomInput';

// ------- Email Regex
const EMAIL_REGEX =
  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

import {Icon} from 'react-native-elements';

import {ScrollView} from 'react-native-gesture-handler';
import globalStyle from '../../constants/globalStyle';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignUpScreen = ({navigation}) => {
  const [activeButton, setActiveButton] = useState('Agent');

  // React Hook useForm
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm({
    defaultValues: {
      agentName: '',
      agentEmail: '',
      agentPhoneNumber: '',
      agentPassword: '',
      agentConfirmPassword: '',

      agencyName: '',
      agencyEmail: '',
      agencyPhoneNumber: '',
      agencyPassword: '',
      agencyConfirmPassword: '',
    },
  });

  console.log(errors);

  // Password Match Function
  const agentpwd = watch('agentPassword');
  const agencypwd = watch('agencyPassword');

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

  const onSignUpAgencyPressed = data => {
    console.log(data);
    navigation.navigate('LoginScreen');
  };

  const onSignUpAgentPressed = data => {
    console.log(data);
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#4681F4'} barStyle="light-content" />

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
            onPress={() => setActiveButton('Agent')}
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
            onPress={() => setActiveButton('Agency')}
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

          <View style={globalStyle.InputHeadingText}>
            <Text
              style={styles.textfontsize1}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              Name
            </Text>
            <Text style={globalStyle.Asteric}> *</Text>
          </View>

          <CustomInput
            name="agentName"
            placeholder="Enter your name"
            control={control}
            rules={{required: 'Name is Required'}}
            svg1={<svg.userLoginSVG width={24} height={24} />}
          />

          {/* Agent Email */}

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
            name="agentEmail"
            placeholder="Enter your email"
            control={control}
            rules={{
              required: 'Email Required',
              pattern: {value: EMAIL_REGEX, message: 'Email is Invalid'},
            }}
            svg1={<svg.envelope width={25} height={25} />}
          />

          {/** Agent Phone Number */}

          <View style={globalStyle.InputHeadingText}>
            <Text
              style={styles.textfontsize1}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              Phone Number
            </Text>
            <Text style={globalStyle.Asteric}> *</Text>
          </View>

          <CustomInput
            name="agentPhoneNumber"
            control={control}
            rules={{required: 'PhoneNumer is Required'}}
            countryCode="  +92"
            svg1={<svg.PakistanHalfFlagSvg width={25} height={25} />}
          />

          {/* Agent Password */}

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
            name="agentPassword"
            placeholder="Your password"
            control={control}
            secureTextEntry
            rules={{
              required: 'Password Required',
              minLength: {
                value: 5,
                message: 'Password should be minimum 5 character long',
              },
            }}
            svg1={<svg.loginLock width={24} height={24} />}
            svg2={<svg.EyeOpen width={20} height={20} />}
            svg3={<svg.EyeClosed width={20} height={20} />}
          />

          {/* Agent Confirm Password */}

          <View style={globalStyle.InputHeadingText}>
            <Text
              style={styles.textfontsize1}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              Confirm Password
            </Text>
            <Text style={globalStyle.Asteric}> *</Text>
          </View>

          <CustomInput
            name="agentConfirmPassword"
            placeholder="Confirm your password"
            control={control}
            secureTextEntry
            rules={{
              required: 'Please Comfirm Password',
              validate: value => value === agentpwd || 'Password do no match',
            }}
            svg1={<svg.loginLock width={24} height={24} />}
            svg2={<svg.EyeOpen width={20} height={20} />}
            svg3={<svg.EyeClosed width={20} height={20} />}
          />
          {/* -----------------   Sign Up Agent   ------------------- */}

          <TouchableOpacity onPress={handleSubmit(onSignUpAgentPressed)}>
            <View style={styles.SignUpButton}>
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
                  style={globalStyle.h2White}
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}>
                  Sign Up
                </Text>
              </View>

              <View style={{marginRight: 15}}>
                <TouchableOpacity style={{paddingLeft: 20}}>
                  <Icon
                    type="fontawesome"
                    name="login"
                    size={18}
                    color="#FFFFFF"
                  />
                </TouchableOpacity>
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
        </ScrollView>
      ) : (
        <ScrollView>
          {/** Agency Name */}

          <View style={globalStyle.InputHeadingText}>
            <Text
              style={styles.textfontsize1}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              Agency Name
            </Text>
            <Text style={globalStyle.Asteric}> *</Text>
          </View>

          <CustomInput
            name="agencyName"
            placeholder="Enter agency name"
            control={control}
            rules={{required: 'AgencyName is Required'}}
            svg1={<svg.userLoginSVG width={24} height={24} />}
          />

          {/** Agency Email */}

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
            name="agencyEmail"
            placeholder="Enter email"
            control={control}
            rules={{
              required: 'Email Required',
              pattern: {value: EMAIL_REGEX, message: 'Email is Invalid'},
            }}
            svg1={<svg.envelope width={25} height={25} />}
          />

          {/** Agency Phone Number */}

          <View style={globalStyle.InputHeadingText}>
            <Text
              style={styles.textfontsize1}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              Phone Number
            </Text>
            <Text style={globalStyle.Asteric}> *</Text>
          </View>

          <CustomInput
            name="agencyPhoneNumber"
            control={control}
            rules={{required: 'PhoneNumer is Required'}}
            countryCode="  +92"
            svg1={<svg.PakistanHalfFlagSvg width={25} height={25} />}
          />

          {/* Agency Password */}

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
            name="agencyPassword"
            placeholder="Your password"
            control={control}
            secureTextEntry
            rules={{
              required: 'agency Password Required',
              minLength: {
                value: 5,
                message: 'Password should be minimum 5 character long',
              },
            }}
            svg1={<svg.loginLock width={24} height={24} />}
            svg2={<svg.EyeOpen width={20} height={20} />}
            svg3={<svg.EyeClosed width={20} height={20} />}
          />

          {/* Agency Confirm Password */}

          <View style={globalStyle.InputHeadingText}>
            <Text
              style={styles.textfontsize1}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              Confirm Password
            </Text>
            <Text style={globalStyle.Asteric}> *</Text>
          </View>

          <CustomInput
            name="agencyConfirmPassword"
            placeholder="Confirm your password"
            control={control}
            secureTextEntry
            rules={{
              required: 'Please Comfirm Password',
              validate: value => value === agencypwd || 'Password do no match',
            }}
            svg1={<svg.loginLock width={24} height={24} />}
            svg2={<svg.EyeOpen width={20} height={20} />}
            svg3={<svg.EyeClosed width={20} height={20} />}
          />
          {/* -------------------------------------- */}

          <TouchableOpacity onPress={handleSubmit(onSignUpAgencyPressed)}>
            <View style={styles.SignUpButton}>
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
                  style={globalStyle.h2White}
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}>
                  Sign Up
                </Text>
              </View>

              <View style={{marginRight: 15}}>
                <TouchableOpacity style={{paddingLeft: 20}}>
                  <Icon
                    type="fontawesome"
                    name="login"
                    size={18}
                    color="#FFFFFF"
                  />
                </TouchableOpacity>
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
