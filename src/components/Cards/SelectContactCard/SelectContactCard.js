import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import Icon from '../../../assets/svg/user.svg';

import styles from './SelectContactCard.style';

const Logo = 'https://pazarlamasyon.com/wp-content/uploads/2015/12/darth.jpg';

const SelectContactCard = ({user = 'default', title, status, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        source={{
          uri: user === 'default' ? Logo : user,
        }}
      />
      <View>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.description}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SelectContactCard;
