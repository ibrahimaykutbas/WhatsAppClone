import React from 'react';
import {View, Text} from 'react-native';

import styles from './DocsCard.style';
const DocsCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.emptyText}>No documents found</Text>
    </View>
  );
};

export default DocsCard;
