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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomInput = ({
  value,
  label,
  onChangeText,
  onFocus,
  password,
  placeholder,
  countryCode,
  error,
  svg1,
  svg2,
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View>
      <View style={globalStyle.InputHeadingText}>
        <Text
          style={globalStyle.textfontsize1}
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          {label}
        </Text>
        <Text style={globalStyle.Asteric}> *</Text>
      </View>

      <View
        style={[
          styles.conatiner,
          {
            borderColor: error
              ? 'red'
              : isFocused
              ? colors.lightGrayMedium
              : '#DFE2E4',
            alignItems: 'center',
          },
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
          autoCorrect={false}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          style={styles.input}
          secureTextEntry={hidePassword}
        />

        {/** Eye Icon */}
        <TouchableOpacity>
          <View>{svg2}</View>
        </TouchableOpacity>

        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{color: colors.darkGray, fontSize: 22, paddingRight: 10}}
          />
        )}
      </View>
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

  inputContainer: {
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
});

export default CustomInput;
