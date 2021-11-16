import React from 'react';
import {View, Text} from 'react-native';

import CallCard from '../../components/Cards/CallCard/CallCard';

import FloatingBottom from '../../components/FloatingBottom/FloatingBottom';

import styles from './Calls.style';

const Calls = () => {
  return (
    <View style={styles.container}>
      <CallCard
        user="https://upload.wikimedia.org/wikipedia/tr/thumb/0/0f/Obi-Wan_Kenobi.png/1200px-Obi-Wan_Kenobi.png"
        title="Obi-Wan Kenobi"
        type="Audio"
        color="green"
      />
      <CallCard
        user="https://static.wikia.nocookie.net/yildizsavaslari/images/6/6f/Anakin_Skywalker_RotS.png/revision/latest?cb=20180522061709&path-prefix=tr"
        title="Anakin Skywalker"
        type="Video"
        color="red"
      />
      <FloatingBottom icon="phone" />
    </View>
  );
};

export default Calls;
