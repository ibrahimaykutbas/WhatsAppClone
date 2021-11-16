import React from 'react';
import {View, Text} from 'react-native';

import Modal from 'react-native-modal';

import styles from './SelectContactSettingsModal.style';

const SelectContactSettingsModal = ({visible, onClose}) => {
  return (
    <Modal
      visible={visible}
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}>
      <View style={styles.container}>
        <Text style={styles.text}>Invite a friend</Text>
        <Text style={styles.text}>Contacts</Text>
        <Text style={styles.text}>Refresh</Text>
        <Text style={styles.text}>Help</Text>
      </View>
    </Modal>
  );
};

export default SelectContactSettingsModal;
