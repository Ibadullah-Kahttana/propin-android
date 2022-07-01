import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import svg from '../../constants/svgs';
import color from '../../constants/colors';
import dimensions from '../../constants/dimensions';
import globalStyle from '../../constants/globalStyle';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TradingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Trading Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: (windowHeight / 100) * 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
  },
});

export default TradingScreen;
