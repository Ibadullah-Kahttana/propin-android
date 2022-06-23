import React from 'react';
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

import LeftArrowWhiteIcon from '../../../assets/Svgs/ProfileScreenSvgs/ProfileSettings/LeftArrowWhite.svg';

import Feather from 'react-native-vector-icons/Feather';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ChangePassword = ({navigation}) => {
  //const {signIn} = React.useContext(AuthContext);

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

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
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
          Change Password
        </Text>
      </View>

      {/** --------------------      Current Password       ----------------------*/}
      <View style={styles.headingText}>
        <Text
          style={styles.textfontsize1}
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          Current Password
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
            placeholder="Your current password"
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

      {/** --------------------      New Password       ----------------------*/}
      <View style={styles.headingText}>
        <Text
          style={styles.textfontsize1}
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          New Password
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
            placeholder="Enter new password"
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
            placeholder="Confirm new password"
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

      {/** --------------------      Update Image        --------------*/}

      <TouchableOpacity>
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
    marginBottom: 15,
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

export default ChangePassword;
