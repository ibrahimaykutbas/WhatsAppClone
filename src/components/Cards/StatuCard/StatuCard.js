import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './StatuCard.style';

const Logo = 'https://pazarlamasyon.com/wp-content/uploads/2015/12/darth.jpg';

const StatuCard = ({user = 'default', title}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: user === 'default' ? Logo : user,
        }}
      />
      <View style={styles.content}>
        <Text style={styles.user}>{title}</Text>
        <Text style={styles.time}>Yesterdary, 10:55 am</Text>
      </View>
    </View>
  );
};

export default StatuCard;
