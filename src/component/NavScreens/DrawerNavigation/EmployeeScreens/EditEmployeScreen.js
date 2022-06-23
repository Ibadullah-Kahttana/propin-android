import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// Icons SVG

import LeftArrowWhiteIcon from '../../../../assets/Svgs/ProfileScreenSvgs/ProfileSettings/LeftArrowWhite';
import PakistanFlagIconLoginPhoneNumber from '../../../../assets/Svgs/SignUpScreen/Pakistanflag2.svg';
import DateTimeIcon from '../../../../assets/Svgs/EmployScreensSVG/Date';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import DateTimePicker from '@react-native-community/datetimepicker';

import {ScrollView} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const EditEmployeeScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

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

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  //-------------- DATE PICKER -----------------------------------------------------------------

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'android');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();

    setText(fDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#4681F4'} barStyle="light-content" />

      {/** --------------------      Header       ----------------------*/}

      <View style={styles.Header}>
        <TouchableOpacity
          underlayColor={'transparent'}
          onPress={() => navigation.navigate('ProfileScreen')}>
          <LeftArrowWhiteIcon width={18} height={18} />
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

        <View style={styles.ListBox}>
          <View style={styles.action}>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Enter Employee name"
              onChangeText={val => textInputChange(val)}
            />
          </View>
        </View>

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
            <PakistanFlagIconLoginPhoneNumber width={25} height={25} />
            <Text
              style={{fontSize: 17, fontWeight: '700', color: '#2C3131'}}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              {' '}
              +92
            </Text>
            <TouchableOpacity>
              <FontAwesome
                name="caret-down"
                color="#828282"
                size={17}
                style={{paddingLeft: 10, paddingRight: 10}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.action}>
            <TextInput
              style={styles.PhoneNumbertextInput}
              autoCapitalize="none"
              placeholder="xxx xxxxxx"
              onChangeText={val => textInputChange(val)}
            />
          </View>
        </View>

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

        <View style={styles.ListBox}>
          <View style={styles.action}>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Enter employee email"
              onChangeText={val => textInputChange(val)}
            />
          </View>
        </View>

        {/** --------------------      Password       ----------------------*/}
        <View style={styles.headingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Password
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
              placeholder="Enter your password"
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

        {/** --------------------      Confirm Password       ----------------------*/}
        <View style={styles.headingText}>
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
        </View>

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
        </View>

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

        <View style={styles.ListBox}>
          <View style={styles.action}>
            <Text style={[styles.DateInput, styles.h4Grey]}>{text}</Text>
            <TouchableOpacity
              style={{paddingRight: 15}}
              onPress={() => showMode('date')}>
              <DateTimeIcon height={17} width={17} />
            </TouchableOpacity>
          </View>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>

        {/* -------------------------------------- */}

        <TouchableOpacity>
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
