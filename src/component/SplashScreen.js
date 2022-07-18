import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const SplashScreen = () => {
  setTimeout(() => {}, 3000);
  return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'black'}}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

export default SplashScreen;
