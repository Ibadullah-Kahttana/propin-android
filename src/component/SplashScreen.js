import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const SplashScreen = () => {
  setTimeout(() => {}, 3000);
  return (
    <View>
      <ActivityIndicator size="large" color="#555" />
    </View>
  );
};

export default SplashScreen;
