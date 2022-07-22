import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  StatusBar,
  View,
  TouchableOpacity,
} from 'react-native';

import dimensions from '../constants/dimensions';
import globalStyle from '../constants/globalStyle';

// Constants
import svg from '../constants/svgs';
import colors from '../constants/colors';

// Custom Controls
import CustomInput from '../controles/CustomInput';
import CustomButton from '../controles/customButton';

import {Icon} from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CountryScreen = ({navigation}) => {
  const RegisteryScreenBack = () => {
    navigation.navigate('RegisterScreen');
  };

  const SelectCity = () => {
    navigation.navigate('SelectCityScreen');
  };

  const SignUpScreenLogin = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#f8f9fa'} barStyle="dark-content" />
      <View style={styles.headerNav}>
        <TouchableOpacity onPress={RegisteryScreenBack}>
          <Icon type="ant-design" name="left" size={20} color="#212529" />
        </TouchableOpacity>
      </View>

      <View style={styles.CountryScreenimageView}>
        <svg.PosterSvgCountryScreen width={200} height={200} />
      </View>

      {/* Title Text */}

      <View style={styles.welcomeView}>
        <Text
          style={globalStyle.h1TitleBlackBold}
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          Welcome to Proptech Global
        </Text>
      </View>

      {/* Text Highlighted */}

      <View style={styles.WelcomeDescriptiveText}>
        <Text
          style={globalStyle.h3DarkGrey}
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          Before we start, please enter your current
        </Text>
        <Text
          style={globalStyle.h3DarkGrey}
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          location of residence.
        </Text>
      </View>

      {/* Input */}

      <CustomInput
        label="Country/ Area of Residence"
        name="agentName"
        placeholder={'Pakistan'}
        svg1={
          <TouchableOpacity onPress={SelectCity}>
            <svg.pakFlagSvgCountryScreen width={25} height={25} />
          </TouchableOpacity>
        }
        svg2={
          <TouchableOpacity onPress={SelectCity}>
            <svg.downArrowSvgDarkGray width={13} height={13} />
          </TouchableOpacity>
        }
      />

      {/* Text Description */}

      <View style={styles.RegionDescriptiveText}>
        <Text style={globalStyle.h4Grey}>
          The registration process is subject to change based on the information
          you provide.{' '}
        </Text>
      </View>

      {/* Confirm Button  */}

      <TouchableOpacity onPress={SignUpScreenLogin}>
        <CustomButton label="Confirm" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f9fa',
    flexDirection: 'column',
    width: windowWidth,
    height: windowHeight,
    justifyContent: 'space-between',
    paddingBottom: 150,
  },

  headerNav: {
    height: dimensions.height / 18,
    width: dimensions.width / 10,
    //backgroundColor: 'yellow',
    justifyContent: 'center',
    paddingLeft: 4,
    marginTop: 8,
    marginRight: 8,
    marginLeft: 4,
  },

  CountryScreenimageView: {
    height: dimensions.height / 4,
    width: dimensions.width / 1,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcomeView: {
    height: dimensions.height / 20,
    width: dimensions.width / 1,
    alignItems: 'center',
    //  backgroundColor: 'orange',
    justifyContent: 'center',
  },

  WelcomeDescriptiveText: {
    height: dimensions.height / 15,
    width: dimensions.width / 1,
    //backgroundColor: 'yellow',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  RegionDescriptiveText: {
    height: dimensions.height / 16,
    width: dimensions.width / 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'yellow',
    flexDirection: 'row',
  },
});

export default CountryScreen;
