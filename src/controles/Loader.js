import React from 'react';
import {Modal, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import {BlurView} from 'expo-blur';

const {width, height} = Dimensions.get('window');
const Loader = props => {
  let {loading} = props;

  return (
    <Modal
      visible={loading}
      transparent={true}
      style={{
        width: width,
        height: height,
      }}>
      <BlurView
        intensity={100}
        tint="light"
        style={{
          width: width,
          height: height,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color="blue" />
      </BlurView>
    </Modal>
  );
};
export default Loader;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000060',
  },
  activityIndicatorWrapper: {
    backgroundColor: 'transparent',
    height: 100,
    width: 100,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  background: {
    backgroundColor: 'transparent',
    height: 100,
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
