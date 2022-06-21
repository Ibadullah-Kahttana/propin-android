import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const WalletScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Wallet Screen</Text>
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

export default WalletScreen;
