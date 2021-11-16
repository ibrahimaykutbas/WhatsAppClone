import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import StatuCard from '../../components/Cards/StatuCard/StatuCard';
import FloatingBottom from '../../components/FloatingBottom/FloatingBottom';

import styles from './Status.style';

const Status = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatuCard title="My status" />
        <Text style={styles.updates}>Recent updates</Text>
        <StatuCard
          user="https://wallpapercave.com/wp/wp2068190.jpg"
          title="Qui-Gon Jinn"
        />
        <StatuCard
          user="https://upload.wikimedia.org/wikipedia/tr/thumb/0/0f/Obi-Wan_Kenobi.png/1200px-Obi-Wan_Kenobi.png"
          title="Obi-Wan Kenobi"
        />
        <StatuCard
          user="https://static.wikia.nocookie.net/yildizsavaslari/images/6/6f/Anakin_Skywalker_RotS.png/revision/latest?cb=20180522061709&path-prefix=tr"
          title="Anakin Skywalker"
        />
        <StatuCard
          user="https://static.wikia.nocookie.net/yildizsavaslari/images/b/b2/Padmegreenscrshot.jpg/revision/latest?cb=20170301083438&path-prefix=tr"
          title="Padmé Amidala"
        />
        <Text style={styles.updates}>Viewed updates</Text>
        <StatuCard
          user="https://fikrisinema.com/wp-content/uploads/2015/12/Luke-Skywalker-FikriSinema-1.jpg"
          title="Luke Skywalker"
        />
        <StatuCard
          user="https://s3.amazonaws.com/libapps/accounts/81381/images/leia.jpg"
          title="Leia Organa"
        />
        <StatuCard
          user="https://i0.wp.com/filmloverss.com/wp-content/uploads/2016/01/star-wars-han-solo-filmloverss.jpg?fit=720%2C400&ssl=1"
          title="Han Solo"
        />
      </ScrollView>
      <FloatingBottom icon="camera" />
      <FloatingBottom theme="secondary" icon="pencil" />
    </View>
  );
};

export default Status;
