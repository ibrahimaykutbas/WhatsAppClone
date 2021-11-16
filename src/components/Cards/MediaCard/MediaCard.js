import React from 'react';
import {View, Text} from 'react-native';

import styles from './MediaCard.style';

const MediaCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.emptyText}>No media found</Text>
    </View>
  );
};

export default MediaCard;
