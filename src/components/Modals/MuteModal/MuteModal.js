import React from 'react';
import {View, Text} from 'react-native';

import Modal from 'react-native-modal';

import MuteActiveIcon from '../../../assets/svg/chat/muteActive.svg';
import MuteInactiveIcon from '../../../assets/svg/chat/muteInactive.svg';
import ShowNotificationsIcon from '../../../assets/svg/chat/showNotifications.svg';

import styles from './MuteModal.style';

const MuteModal = ({visible, onClose}) => {
  return (
    <Modal
      visible={visible}
      swipeDirection="left"
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Mute notifications for...</Text>
          <View style={styles.option}>
            <MuteInactiveIcon />
            <Text style={styles.optionText}>8 hours</Text>
          </View>
          <View style={styles.option}>
            <MuteInactiveIcon />
            <Text style={styles.optionText}>1 week</Text>
          </View>
          <View style={styles.option}>
            <MuteActiveIcon />
            <Text style={styles.optionText}>Always</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.setting}>
            <ShowNotificationsIcon />
            <Text style={styles.footerText}>Show notifications</Text>
          </View>
          <View style={styles.buttons}>
            <Text style={styles.buttonText} onPress={onClose}>
              CANCEL
            </Text>
            <Text style={styles.buttonText} onPress={onClose}>
              OK
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MuteModal;
