import React from 'react';
import {View, Text} from 'react-native';

import Modal from 'react-native-modal';

const SettingsModal = ({visible, onClose}) => {
  return (
    <Modal
      visible={visible}
      swipeDirection="up"
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}>
      <View>
        <Text>Modal</Text>
      </View>
    </Modal>
  );
};

export default SettingsModal;
