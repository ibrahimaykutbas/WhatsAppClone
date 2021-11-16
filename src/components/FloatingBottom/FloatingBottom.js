import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import PencilIcon from '../../assets/svg/pencil.svg';
import CameraIcon from '../../assets/svg/camera.svg';
import PhoneIcon from '../../assets/svg/phone.svg';
import MessageIcon from '../../assets/svg/message.svg';

import styles from './FloatingBottom.style';

const FloatingBottom = ({theme = 'primary', icon, onPress}) => {
  return (
    <TouchableOpacity style={styles[theme].container} onPress={onPress}>
      {icon === 'pencil' && <PencilIcon />}
      {icon === 'camera' && <CameraIcon />}
      {icon === 'phone' && <PhoneIcon />}
      {icon === 'message' && <MessageIcon />}
    </TouchableOpacity>
  );
};

export default FloatingBottom;
