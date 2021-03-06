import React from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/component/Navigation';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <StatusBar backgroundColor="#4681F4" />
      <Navigation />
    </AuthProvider>
  );
};

export default App;
