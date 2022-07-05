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

import Feather from 'react-native-vector-icons/Feather';

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  countryCode,
  svg1,
  svg2,
  svg3,
  secureTextEntry,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.conatiner,
              {borderColor: error ? 'red' : '#DFE2E4'},
            ]}>
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
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />

            {/** Eye Icon */}
            <TouchableOpacity>
              {secureTextEntry ? <View>{svg2}</View> : <View>{svg3}</View>}
            </TouchableOpacity>
          </View>

          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch', paddingLeft: 20}}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
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
