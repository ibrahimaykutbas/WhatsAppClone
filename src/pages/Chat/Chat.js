import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

import BackIcon from '../../assets/svg/back.svg';
import AudioIcon from '../../assets/svg/chatAudio.svg';
import VideoIcon from '../../assets/svg/chatVideo.svg';
import MenuIcon from '../../assets/svg/menu.svg';
import EmojiIcon from '../../assets/svg/emoji.svg';
import FileIcon from '../../assets/svg/file.svg';
import ChatCameraIcon from '../../assets/svg/chatCamera.svg';
import RecordIcon from '../../assets/svg/chat/record.svg';

import FilesModal from '../../components/Modals/FilesModal/FilesModal';
import ChatSettingsModal from '../../components/Modals/ChatSettingsModal/ChatSettingsModal';

import styles from './Chat.style';

const QuiGonJinn = 'https://wallpapercave.com/wp/wp2068190.jpg';
const image = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png',
};
const Chat = ({navigation}) => {
  const [filesModalVisible, setFilesModalVisible] = useState(false);
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);

  const handleFilesToggle = () => {
    setFilesModalVisible(!filesModalVisible);
  };

  const handleSettingsToggle = () => {
    setSettingsModalVisible(!settingsModalVisible);
  };

  const handleProfile = () => {
    navigation.navigate('ProfilePage');
  };

  const voiceCall = () => {
    navigation.navigate('VoiceCallPage');
  };

  const videoCall = () => {
    navigation.navigate('VideoCallPage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <View style={styles.userContainer}>
            <BackIcon onPress={() => navigation.goBack()} />
            <TouchableOpacity
              style={styles.userContainer}
              onPress={handleProfile}>
              <Image source={{uri: QuiGonJinn}} style={styles.image} />
              <Text style={styles.username}>Qui-Gon Jinn</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.callContainer}>
            <VideoIcon onPress={videoCall} />
            <AudioIcon onPress={voiceCall} />
            <MenuIcon onPress={handleSettingsToggle} />
          </View>
          <ChatSettingsModal
            visible={settingsModalVisible}
            onClose={handleSettingsToggle}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.infoContainer}>
            <View style={styles.info}>
              <Text style={styles.date}>TODAY</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoText}>
                Messages and calls are end-to-end encrypted. No one outside of
                this chat, not even WhatsApp, can read or listen to them. Tap to
                learn more.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.footerContent}>
          <View style={styles.message}>
            <EmojiIcon />
            <TextInput
              placeholder="Type a message"
              placeholderTextColor="#A7ACB0"
              style={styles.input}
            />
          </View>

          <FilesModal visible={filesModalVisible} onClose={handleFilesToggle} />
          <View style={styles.buttons}>
            <FileIcon onPress={handleFilesToggle} />
            <ChatCameraIcon style={{marginHorizontal: 15}} />
          </View>
        </View>
        <View style={styles.voice}>
          <RecordIcon width="22" height="22" />
        </View>
      </View>
    </View>
  );
};

export default Chat;
