import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import colors from '../constants/colors';
import globalStyle from '../constants/globalStyle';
import dimensions from '../constants/dimensions';

const CustomButton = ({label, svg}) => {
  return (
    <View style={styles.ButtonContainer}>
      <View style={styles.textBox}>
        <Text
          style={globalStyle.h2White}
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          {label}
        </Text>
      </View>
      <View style={styles.logoBox}>{svg}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonContainer: {
    width: dimensions.width / 1.13,
    height: dimensions.height / 14,
    flexDirection: 'row',
    backgroundColor: colors.blue,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: dimensions.rem * 5.3,
    borderRadius: 40,
    marginTop: 40,
  },

  logoBox: {
    width: dimensions.width / 8,
    height: dimensions.height / 14,
    flexDirection: 'row',
    //backgroundColor: colors.yellow,
  },

  textBox: {
    width: dimensions.width / 3.2,
    height: dimensions.height / 17,
    marginLeft: dimensions.width / 3.5,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomButton;
