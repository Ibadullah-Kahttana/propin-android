import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import colors from '../constants/colors';
import globalStyle from '../constants/globalStyle';
import dimensions from '../constants/dimensions';

const CustomInput = ({
  value,
  onChangeText,
  placeholder,
  countryCode,
  svg1,
  svg2,
  secureTextEntry,
}) => {
  return (
    <View style={[styles.conatiner, {borderColor: '#DFE2E4'}]}>
      {/** SVG 1 */}
      <View style={{paddingLeft: 5, paddingRight: 5}}>{svg1}</View>

      {/** Country Code */}
      <Text
        style={{fontSize: 17, fontWeight: '700', color: '#2C3131'}}
        adjustsFontSizeToFit={true}
        numberOfLines={1}>
        {countryCode}
      </Text>

      {/** TextInput Filed */}
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />

      {/** Eye Icon */}
      <TouchableOpacity>
        <View>{svg2}</View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: colors.white,
    width: dimensions.width / 1.13,
    height: dimensions.height / 14,
    alignItems: 'center',

    flexDirection: 'row',
    alignItems: 'center',

    marginLeft: 20,
    borderRadius: 8,
    borderColor: '#DFE2E4',
    borderWidth: 1,
    paddingLeft: 5,
  },

  input: {
    height: dimensions.height / 15,
    width: dimensions.width / 1.45,

    //backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    paddingLeft: 10,
  },
});

export default CustomInput;
