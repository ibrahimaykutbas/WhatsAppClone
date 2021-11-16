import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import AudioIcon from '../../assets/svg/chat/call/audio.svg';
import VideoIcon from '../../assets/svg/chat/call/video.svg';
import VoiceIcon from '../../assets/svg/chat/call/voice.svg';
import MuteIcon from '../../assets/svg/chat/call/mute.svg';
import CloseIcon from '../../assets/svg/chat/call/close.svg';
import LockIcon from '../../assets/svg/chat/call/lock.svg';

import styles from './VoiceCall.style';

const image = {
  uri: 'https://wallpapercave.com/wp/wp2068190.jpg',
};

const VoiceCall = ({navigation}) => {
  const [mute, setMute] = useState(true);

  const handleClose = () => {
    navigation.navigate('ChatPage');
  };

  const handleMute = () => {
    setMute(!mute);
  };

  const handleVideoCall = () => {
    navigation.navigate('VideoCallPage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.infoContainer}>
          <LockIcon />
          <Text style={styles.info}>End-to-end encrypted</Text>
        </View>
        <Text style={styles.name}>Qui-Gon Jinn</Text>
        <Text style={styles.type}>Calling</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="cover" />
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <CloseIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <AudioIcon />
        <TouchableOpacity onPress={handleVideoCall}>
          <VideoIcon />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMute}>
          {mute === true ? <VoiceIcon /> : <MuteIcon />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VoiceCall;
