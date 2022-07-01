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

import svg from '../../../../constants/svgs';
import color from '../../../../constants/colors';
import dimensions from '../../../../constants/dimensions';
import globalStyle from '../../../../constants/globalStyle';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {ScrollView} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AddAgencyScreen = ({navigation}) => {
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

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#4681F4'} barStyle="light-content" />

      {/** --------------------      Header       ----------------------*/}

      <View style={styles.Header}>
        <TouchableOpacity
          underlayColor={'transparent'}
          onPress={() => navigation.navigate('ProfileScreen')}>
          <svg.LeftArrowSvgWhite width={18} height={18} />
        </TouchableOpacity>

        <Text style={styles.h2White}>
          {'       '}
          Add Agency
        </Text>
      </View>

      {/** --------------------      Profile Image        --------------*/}

      <View style={styles.ProfielImageView}>
        <View style={styles.ProfileImage}>
          <svg.UserSvg width={60} height={60} />
          <View style={styles.YellowCameraIcon}>
            <TouchableOpacity underlayColor={'transparent'}>
              <svg.cameraSvgProfile width={30} height={30} />
            </TouchableOpacity>
          </View>
        </View>
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
              placeholder="Enter employee name"
              onChangeText={val => textInputChange(val)}
            />
          </View>
        </View>

        {/** ---------- Agency Email  ----------*/}
        <View style={styles.headingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Agency Email
          </Text>
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

        {/** ---------- Address  ----------*/}
        <View style={styles.headingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Address
          </Text>
          <Text style={styles.Asteric}> *</Text>
        </View>

        <View style={styles.ListBox}>
          <View style={styles.action}>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Enter your address"
              onChangeText={val => textInputChange(val)}
            />
          </View>
        </View>

        {/** ----------  City ----------*/}
        <View style={styles.headingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            City
          </Text>
          <Text style={styles.Asteric}> *</Text>
        </View>

        <View style={styles.ListBox}>
          <View style={styles.action}>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Select City"
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

        {/** ----------  Area ----------*/}
        <View style={styles.headingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Area
          </Text>
          <Text style={styles.Asteric}> *</Text>
        </View>

        <View style={styles.ListBox}>
          <View style={styles.action}>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Select area"
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

        {/** ----------  website ----------*/}
        <View style={styles.headingText}>
          <Text
            style={styles.textfontsize1}
            adjustsFontSizeToFit={true}
            numberOfLines={1}>
            Website
          </Text>
        </View>

        <View style={styles.ListBox}>
          <View style={styles.action}>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Enter Website URL"
              onChangeText={val => textInputChange(val)}
            />
          </View>
        </View>

        {/* -------------------------------------- */}

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

export default AddAgencyScreen;
