import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const rem = width / 100;

const dimensions = {
  width,
  height,
  rem,
};

export default dimensions;
