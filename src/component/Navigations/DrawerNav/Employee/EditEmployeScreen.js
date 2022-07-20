import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import svg from '../../../../constants/svgs';

import axios from 'axios';
import {BASE_URL} from '../../../../config';
import {AuthContext} from '../../../../context/AuthContext';

import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import moment from 'moment';

//------  Netwrok logger
import NetworkLogger from 'react-native-network-logger';

// ------- Custom Input
import CustomInput from '../../../../controles/CustomInput';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const EditEmployeeScreen = ({navigation, route}) => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeEmail, setEmployeeEmail] = useState('');
  const [employeePhoneNumber, setEmployeePhoneNumber] = useState('');
  const [employeeDesignation, setEmployeeDesignation] = useState('');
  const [employeeJoinDate, setEmployeeJoinDate] = useState('');

  const [employeData, setEmployeData] = useState([]);

  const EmployeeInfoScreen = () => {
    navigation.navigate('EmployeeInfo');
  };

  const EmployeeID = route.params.keyID;

  const updateEmployee = () => {
    const data = {
      name: employeeName,
      phone: employeePhoneNumber,
      email: employeeEmail,
      date_of_joining: employeeJoinDate,
      designation_id: employeeDesignation,
    };
    console.log('Updated Employee Data = ', JSON.stringify(data, null, 2));

    axios
      .put(`${BASE_URL}/employee/${EmployeeID}`, data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(response => {
        let employeData = response.data.data;
        setEmployeData(employeData);
        console.log(
          'Employee Put Updated Data = ',
          JSON.stringify(employeData, null, 2),
        );
        navigation.navigate('EmployeeInfo');
        alert('Employee Updated Successfull');
      })
      .catch(error => {
        console.log('Employe Put Updated Daata Error = ', error);
      });
  };

  //-------------- DATE PICKER -----------------------------------------------------------------

  // const [date, setDate] = useState(new Date());
  // const [helperDate, setHelperDate] = useState(null);

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate;
  //   setDate(currentDate);
  //   setHelperDate(currentDate);
  //   onChangeValue(currentDate);
  // };

  // const showMode = () => {
  //   DateTimePickerAndroid.open({
  //     value: date,
  //     onChange,
  //     mode: 'date',
  //     is24Hour: true,
  //   });
  // };

  // const showDatepicker = () => {
  //   showMode('date');
  // };

  const {userToken} = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/employee/${EmployeeID}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(response => {
        let employeData = response.data.data;
        setEmployeData(employeData);
        console.log('Employee Data = ', JSON.stringify(employeData, null, 2));

        console.log('Employe Getted Name = ', employeData.name);
        setEmployeeName(employeData.name);

        console.log('Employe Getted Email = ', employeData.email);
        setEmployeeEmail(employeData.email);

        console.log('Employe Getted Phone = ', employeData.phone);
        setEmployeePhoneNumber(employeData.phone);

        console.log('Employe Getted Designation = ', employeData.designation);
        setEmployeeDesignation(employeData.designation);

        console.log(
          'Employe Getted Date of Joining = ',
          employeData.date_of_joining,
        );
        setEmployeeJoinDate(employeData.date_of_joining);
      })
      .catch(error => {
        console.log('Employe Info Error = ', error);
      });
  }, []);

  //----------------------------------------------------------------------------------------------
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
          Edit Employee
        </Text>
      </View>

      {/** --------------------      Scrol List      --------------------*/}

      <ScrollView>
        {/** ----------  Name  ----------*/}
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
          placeholder="Employee name"
          value={employeeName}
          onChangeText={text => setEmployeeName(text)}
          svg1={<svg.userLoginSVG width={24} height={24} />}
        />

        {/** ----------  Phone Number  ----------*/}
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

        {/** ----------  Email  ----------*/}
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
          placeholder="Employee email"
          value={employeeEmail}
          onChangeText={text => setEmployeeEmail(text)}
          svg1={<svg.envelope width={25} height={25} />}
        />

        {/** ----------  Designation ----------*/}
        <View style={styles.headingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Designation
          </Text>
          <Text style={styles.Asteric}> *</Text>
        </View>

        <CustomInput
          name="employeeDesignation"
          placeholder="Employee Designation"
          value={employeeDesignation}
          onChangeText={text => setEmployeeDesignation(text)}
        />

        {/** ----------  Date ----------*/}
        <View style={styles.headingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Date of joining
          </Text>
          <Text style={styles.Asteric}> *</Text>
        </View>

        <CustomInput
          name="employeeJoinDate"
          placeholder={employeeJoinDate}
          value={employeeJoinDate}
          onChangeText={text => setEmployeeJoinDate(text)}
          svg2={
            <TouchableOpacity style={{paddingLeft: 25}}>
              <svg.DateSvg height={17} width={17} fill={'#C6C6C7'} />
            </TouchableOpacity>
          }
        />

        {/* <View style={styles.ListBox}>
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

        <TouchableOpacity onPress={updateEmployee}>
          <View style={styles.SaveButton}>
            <View>
              <Text
                style={styles.BoldText}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                Save
              </Text>
            </View>
          </View>
        </TouchableOpacity>
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

  DateInput: {
    //backgroundColor: 'yellow',
    width: (windowWidth / 100) * 80,
    height: (windowHeight / 100) * 6,
    paddingTop: 14,
    fontSize: 16,
    paddingLeft: 20,
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

  PhoneNumbertextInput: {
    //backgroundColor: 'blue',
    alignItems: 'center',
    width: (windowWidth / 100) * 63,
    height: (windowHeight / 100) * 5,
    fontSize: 18,
  },

  SaveButton: {
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

export default EditEmployeeScreen;
