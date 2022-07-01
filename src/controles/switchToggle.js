import React, {useState} from 'react';

import ToggleSwitch from 'toggle-switch-react-native';

import color from '../constants/colors';

const switchButton = () => {
  const [activeSwitch, setState] = useState(1);
  return (
    <ToggleSwitch
      isOn={false}
      onColor={color.darkGray}
      offColor={color.blue}
      size="small"
      onToggle={val => setState({activeSwitch: val})}
      style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
    />
  );
};

export default switchButton;
