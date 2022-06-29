import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  ScrollView,
  Switch,
  TouchableOpacity,
} from 'react-native';

// Svg Constants
import svg from '../../constants/svgs';

// color constants
import color from '../../constants/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const WalletScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text> Hi </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.white,
  },
});

export default WalletScreen;
