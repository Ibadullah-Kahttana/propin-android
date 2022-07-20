import React, {useState, useContext} from 'react';
import axios from 'axios';
import {BASE_URL} from '../../../../config';

import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';

import svg from '../../../../constants/svgs';

import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import moment from 'moment';

//------  Netwrok logger
import NetworkLogger from 'react-native-network-logger';

// ------- Custom Input
import CustomInput from '../../../../controles/CustomInput';

import {AuthContext} from '../../../../context/AuthContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AddEmployeeScreen = ({navigation, onChangeValue}) => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeEmail, setEmployeeEmail] = useState('');
  const [employeePhoneNumber, setEmployeePhoneNumber] = useState('');
  const [employeePassword, setEmployeePassword] = useState('');
  // const [agentConfirmPassword, setEmployeeConfirmPassword] = useState('');

  const {userToken} = useContext(AuthContext);

  // Agent Register
  const addEmployee = () => {
    const data = {
      name: employeeName,
      email: employeeEmail,
      phone: employeePhoneNumber,
      password: employeePassword,
    };
    axios
      .post(`${BASE_URL}/agents`, data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(response => {
        let employeeInfo = response.data.data;
        console.log('Employee Added Info = ', employeeInfo);
        navigation.navigate('EmployeeInfo');
        alert('Employee Added Successfull');
      })
      .catch(e => {
        console.log(`Add Employee error ${e}`);
      });
  };

  //-------------- DATE PICKER -----------------------------------------------------------------

  const [date, setDate] = useState(new Date());
  const [helperDate, setHelperDate] = useState(null);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    setHelperDate(currentDate);
    onChangeValue(currentDate);
  };

  const showMode = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: 'date',
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  //-----------------------------------------------------------------------------------------------

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#4681F4'} barStyle="light-content" />

      {/** --------------------      Header       ----------------------*/}

      <View style={styles.Header}>
        <TouchableOpacity
          underlayColor={'transparent'}
          onPress={() => navigation.goBack()}>
          <svg.LeftArrowSvgWhite width={18} height={18} fill={'white'} />
        </TouchableOpacity>

        <Text style={styles.h2White}>
          {'       '}
          Add Employee
        </Text>
      </View>

      {/** --------------------      Scrol List      --------------------*/}

      <ScrollView>
        {/**  Name  */}
        <View style={styles.headingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Name
          </Text>
          <Text style={styles.Asteric}> *</Text>
        </View>

        <CustomInput
          name="employeeName"
          placeholder="Enter Employee name"
          value={employeeName}
          onChangeText={text => setEmployeeName(text)}
          svg1={<svg.userLoginSVG width={24} height={24} />}
        />

        {/**   Phone Number  */}
        <View style={styles.headingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Phone Number
          </Text>
          <Text style={styles.Asteric}> *</Text>
        </View>

        <CustomInput
          name="employeePhoneNumber"
          value={employeePhoneNumber}
          placeholder="xxx xxxxxxx"
          onChangeText={text => setEmployeePhoneNumber(text)}
          countryCode="  +92"
          svg1={<svg.PakistanHalfFlagSvg width={25} height={25} />}
        />

        {/**  Email   */}
        <View style={styles.headingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Email
          </Text>
          <Text style={styles.Asteric}> *</Text>
        </View>

        <CustomInput
          name="employeeEmail"
          placeholder="Enter employee email"
          value={employeeEmail}
          onChangeText={text => setEmployeeEmail(text)}
          svg1={<svg.envelope width={25} height={25} />}
        />

        {/**    Password   */}
        <View style={styles.headingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Password
          </Text>
          <Text style={styles.Asteric}> *</Text>
        </View>

        <CustomInput
          name="employeePassword"
          value={employeePassword}
          placeholder="Enter employee password"
          onChangeText={text => setEmployeePassword(text)}
          secureTextEntry
          svg1={<svg.loginLock width={24} height={24} />}
          svg2={<svg.EyeOpen width={20} height={20} />}
        />

        {/* <TouchableOpacity
          onPress={secureTextEntry}
          style={{
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingRight: 10,
          }}>
          {employeePassword.secureTextEntry ? (
            <Feather name="eye" color="#C6C6C7" size={17} />
          ) : (
            <Feather name="eye-off" color="#C6C6C7" size={17} />
          )}
        </TouchableOpacity> */}

        {/** --------------------      Confirm Password       ----------------------*/}
        {/* <View style={styles.headingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Confirm Password
          </Text>
          <Text style={styles.Asteric}> *</Text>
        </View>

        <View style={styles.ListBox}>
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
              placeholder="Confirm your password"
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
        </View> */}

        {/** ----------  Designation ----------*/}
        {/* <View style={styles.headingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Designation
          </Text>
          <Text style={styles.Asteric}> *</Text>
        </View>

        <View style={styles.ListBox}>
          <View style={styles.action}>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Select designation"
              onChangeText={val => textInputChange(val)}
            />
            <TouchableOpacity>
              <FontAwesome
                name="caret-down"
                color="#828282"
                size={17}
                style={{paddingLeft: 10, paddingRight: 20}}
              />
            </TouchableOpacity>
          </View>
        </View> */}

        {/** ----------  Date ----------*/}
        {/* <View style={styles.headingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Date of joining
          </Text>
          <Text style={styles.Asteric}> *</Text>
        </View>

        <View style={styles.ListBox}>
          <View style={styles.action}>
            <Text style={[styles.DateInput, styles.h4Grey]}>
              {helperDate === null
                ? `${'mm/dd/yyyy'}`
                : `${moment(date).format('DD/MM/YYYY')}`}{' '}
            </Text>
            <TouchableOpacity
              style={{paddingRight: 15}}
              onPress={showDatepicker}>
              <svg.DateSvg height={17} width={17} fill={'#C6C6C7'} />
            </TouchableOpacity>
          </View>
        </View> */}

        {/* -------------------------------------- */}

        <TouchableOpacity onPress={addEmployee}>
          <View style={styles.UpdateButton}>
            <View>
              <Text
                style={styles.BoldText}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                Update
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <NetworkLogger />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#f8f9fa',
  },

  Header: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4681F4',
    paddingTop: 20,
    paddingLeft: 20,
  },

  ProfileImage: {
    width: (windowWidth / 100) * 26,
    height: (windowHeight / 100) * 13,
    backgroundColor: '#F2F2F2',
    //backgroundColor: 'yellow',
    borderRadius: 100,
    marginLeft: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  ProfielImageView: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 17,
    //backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },

  YellowCameraIcon: {
    position: 'absolute',
    right: 1,
    bottom: 1,
  },

  //   Text Color and Styles  -------------------------------------------------------------------

  h2Black: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: 'black',
  },

  h2White: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
  },

  PersonName: {
    alignItems: 'center',
  },

  h4Grey: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: '#949494',
  },

  h4Pink: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: '#DF3034',
    paddingLeft: 20,
    paddingTop: 5,
  },

  h4Black: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Roboto-Regular',
    color: '#000000',
    //paddingLeft: 15,
  },

  h4White: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
    //paddingLeft: 15,
  },

  h4Yellow: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Roboto-Regular',
    color: '#F6C000',
    paddingLeft: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  BoldText: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
  },

  headingText: {
    width: (windowWidth / 100) * 90,
    height: (windowHeight / 100) * 5,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,

    // backgroundColor: 'yellow',
  },
  textfontsize1: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: 'black',
  },

  // -------------------------------------------------------------------

  Asteric: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    color: 'red',
  },

  ListBox: {
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
    paddingLeft: 20,
  },

  DateInput: {
    //backgroundColor: 'yellow',
    width: (windowWidth / 100) * 80,
    height: (windowHeight / 100) * 6,
    paddingTop: 14,
    fontSize: 16,
    paddingLeft: 20,
  },

  PhoneNumbertextInput: {
    //backgroundColor: 'blue',
    alignItems: 'center',
    width: (windowWidth / 100) * 63,
    height: (windowHeight / 100) * 5,
    fontSize: 18,
  },

  UpdateButton: {
    width: (windowWidth / 100) * 85,
    height: (windowHeight / 100) * 7,
    flexDirection: 'row',
    backgroundColor: '#4681F4',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 30,
    borderRadius: 40,
    marginTop: 40,
    marginBottom: 30,
  },
});

export default AddEmployeeScreen;
