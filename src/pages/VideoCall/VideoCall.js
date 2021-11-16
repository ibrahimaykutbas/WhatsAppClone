import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import CloseIcon from '../../assets/svg/chat/call/close.svg';
import ChangeIcon from '../../assets/svg/chat/call/change.svg';
import VideoActiveIcon from '../../assets/svg/chat/call/videoActive.svg';
import MuteIcon from '../../assets/svg/chat/call/mute.svg';
import VoiceIcon from '../../assets/svg/chat/call/voice.svg';

const caller = {
  uri: 'https://upload.wikimedia.org/wikipedia/tr/thumb/0/0f/Obi-Wan_Kenobi.png/1200px-Obi-Wan_Kenobi.png',
};

const receiver = {
  uri: 'https://wallpapercave.com/wp/wp2068190.jpg',
};

import styles from './VideoCall.style';

const VideoCall = ({navigation}) => {
  const [mute, setMute] = useState(false);

  const handleClose = () => {
    navigation.navigate('ChatPage');
  };

  const handleMute = () => {
    setMute(!mute);
  };

  const handleVoiceCall = () => {
    navigation.navigate('VoiceCallPage');
  };

  return (
    <ImageBackground
      style={styles.container}
      source={caller}
      resizeMode="cover">
      <View style={styles.innerContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.info}>End-to-end encrypted</Text>
          <Image source={receiver} style={styles.image} />
          <Text style={styles.name}>Qui-Gon Jinn</Text>
          <Text style={styles.type}>Calling</Text>
        </View>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <CloseIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <ChangeIcon />
        <TouchableOpacity onPress={handleVoiceCall}>
          <VideoActiveIcon />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMute}>
          {mute === true ? <VoiceIcon /> : <MuteIcon />}
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default VideoCall;
