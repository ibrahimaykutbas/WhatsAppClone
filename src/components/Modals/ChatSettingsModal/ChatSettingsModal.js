import React, {useState} from 'react';
import {View, Text} from 'react-native';

import Modal from 'react-native-modal';

import MoreIcon from '../../../assets/svg/chat/more.svg';

import ChatSettingsMoreModal from '../ChatSettingsMoreModal/ChatSettingsMoreModal';
import MuteModal from '../MuteModal/MuteModal';

import styles from './ChatSettingsModal.style';

const ChatSettingsModal = ({visible, onClose}) => {
  const [moreModalVisible, setMoreModalVisible] = useState(false);
  const [muteModalVisible, setMuteModalVisible] = useState(false);

  const handleMoreToggle = () => {
    setMoreModalVisible(!moreModalVisible);
  };

  const handleMuteToggle = () => {
    setMuteModalVisible(!muteModalVisible);
  };

  return (
    <Modal
      visible={visible}
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}>
      <View style={styles.container}>
        <Text style={styles.text}>View contact</Text>
        <Text style={styles.text}>Media, links, and docs</Text>
        <Text style={styles.text}>Search</Text>
        <Text style={styles.text} onPress={handleMuteToggle}>
          Mute notifications
        </Text>
        <Text style={styles.text}>Wallpaper</Text>
        <View style={styles.more}>
          <Text style={styles.text} onPress={handleMoreToggle}>
            More
          </Text>
          <MoreIcon style={styles.moreIcon} />
        </View>
      </View>
      <ChatSettingsMoreModal
        visible={moreModalVisible}
        onClose={handleMoreToggle}
      />
      <MuteModal visible={muteModalVisible} onClose={handleMuteToggle} />
    </Modal>
  );
};

export default ChatSettingsModal;
