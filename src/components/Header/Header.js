import React from 'react';
import {View, Text} from 'react-native';

import SearchIcon from '../../assets/svg/search.svg';
import MenuIcon from '../../assets/svg/menu.svg';

import styles from './Header.style';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Whatsapp</Text>
      <View style={styles.buttons}>
        <SearchIcon style={styles.search} />
        <MenuIcon style={styles.menu} />
      </View>
    </View>
  );
};

export default Header;
