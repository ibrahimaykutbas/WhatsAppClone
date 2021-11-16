import React from 'react';
import {View, Text} from 'react-native';

import Modal from 'react-native-modal';

import styles from './ChatSettingsMoreModal.style';

const ChatSettingsMoreModal = ({visible, onClose}) => {
  return (
    <Modal
      visible={visible}
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}>
      <View style={styles.container}>
        <Text style={styles.text}>Report</Text>
        <Text style={styles.text}>Block</Text>
        <Text style={styles.text}>Clear chat</Text>
        <Text style={styles.text}>Export chat</Text>
        <Text style={styles.text}>Add shortcut</Text>
      </View>
    </Modal>
  );
};

export default ChatSettingsMoreModal;
