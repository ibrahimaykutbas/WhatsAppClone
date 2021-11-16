import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import MediaIcon from '../../assets/svg/chat/media.svg';
import ChatIcon from '../../assets/svg/chat/greenChat.svg';
import AudioIcon from '../../assets/svg/chat/greenAudio.svg';
import VideoIcon from '../../assets/svg/chat/greenVideo.svg';
import BlockIcon from '../../assets/svg/chat/block.svg';
import ReportIcon from '../../assets/svg/chat/report.svg';

import styles from './Profile.style';

const image = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png',
};

const Profile = ({navigation}) => {
  const handleGallery = () => {
    navigation.navigate('GalleryPage');
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="cover" />
        <Text style={styles.name}>Qui-Gon Jinn</Text>
      </View>
      <TouchableOpacity style={styles.innerContainer} onPress={handleGallery}>
        <Text style={styles.headerText}>Media, links and docs</Text>
        <MediaIcon />
      </TouchableOpacity>
      <View style={[styles.innerContainer, {justifyContent: 'space-around'}]}>
        <Text style={[styles.settingHeader, styles.settingHeaderLine]}>
          Mute notifications
        </Text>
        <Text style={[styles.settingHeader, styles.settingHeaderLine]}>
          Custom notifications
        </Text>
        <Text style={[styles.settingHeader, {paddingVertical: 10}]}>
          Media visibility
        </Text>
      </View>
      <View style={[styles.innerContainer, {justifyContent: 'center'}]}>
        <View style={[styles.settingContainer, styles.settingHeaderLine]}>
          <Text style={styles.settingHeader}>Disappearing messages</Text>
          <Text style={styles.settingText}>Off</Text>
        </View>
        <View style={styles.settingContainer}>
          <Text style={styles.settingHeader}>Encryption</Text>
          <Text style={styles.settingText}>
            Messages and calls are end-to-end encrypted.
          </Text>
          <Text style={styles.settingText}>Tap to verify</Text>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.headerText}>About and phone number</Text>
        <View style={[styles.settingContainer, styles.settingHeaderLine]}>
          <Text style={styles.settingHeader}>Online</Text>
          <Text style={styles.settingText}>25 July</Text>
        </View>
        <View style={styles.settingContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.settingHeader}>0535 840 2930</Text>
              <Text style={styles.settingText}>Mobile</Text>
            </View>
            <View style={styles.icons}>
              <ChatIcon style={styles.icon} />
              <AudioIcon style={styles.icon} />
              <VideoIcon style={styles.icon} />
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.innerContainer,
          {flexDirection: 'row', alignItems: 'center'},
        ]}>
        <BlockIcon style={styles.icon} />
        <Text style={styles.block}> Block</Text>
      </View>
      <View
        style={[
          styles.innerContainer,
          {flexDirection: 'row', alignItems: 'center'},
        ]}>
        <ReportIcon style={styles.icon} />
        <Text style={styles.block}>Report contact</Text>
      </View>
    </ScrollView>
  );
};

export default Profile;
