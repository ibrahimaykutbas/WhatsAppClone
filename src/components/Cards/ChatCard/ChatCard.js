import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import PinIcon from '../../../assets/svg/pin.svg';
import NotificationIcon from '../../../assets/svg/notification.svg';

import styles from './ChatCard.style';

const CharCard = ({user, title, message, notification, pinned, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        source={{
          uri: user,
        }}
      />
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.user}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
        </View>
        <View style={styles.detail}>
          <Text style={notification ? styles.timeNotification : styles.time}>
            00:00
          </Text>
          <View style={styles.icons}>
            {pinned && <PinIcon />}
            {pinned && <Text style={styles.notification}>1</Text>}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CharCard;
