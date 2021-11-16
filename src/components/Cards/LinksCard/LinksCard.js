import React from 'react';
import {View, Text} from 'react-native';

import styles from './LinksCard.style';

const LinksCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.emptyText}>No links found</Text>
    </View>
  );
};

export default LinksCard;
