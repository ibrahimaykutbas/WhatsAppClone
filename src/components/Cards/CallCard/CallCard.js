import React from 'react';
import {View, Text, Image} from 'react-native';

import UserIcon from '../../../assets/svg/user.svg';
import AudioIcon from '../../../assets/svg/audio.svg';
import VideoIcon from '../../../assets/svg/video.svg';
import GreenIcon from '../../../assets/svg/green.svg';
import RedIcon from '../../../assets/svg/red.svg';

import styles from './CallCard.style';

/* const ObiWanKenobi =
  'https://upload.wikimedia.org/wikipedia/tr/thumb/0/0f/Obi-Wan_Kenobi.png/1200px-Obi-Wan_Kenobi.png';
const AnakinSkywalker =
  'https://static.wikia.nocookie.net/yildizsavaslari/images/6/6f/Anakin_Skywalker_RotS.png/revision/latest?cb=20180522061709&path-prefix=tr';
 */
const CallCard = ({user, title, type, color}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: user,
        }}
      />
      <View style={styles.content}>
        <View>
          <Text style={styles.user}>{title}</Text>
          <View style={styles.detailContainer}>
            {color === 'red' ? <RedIcon /> : <GreenIcon />}
            <Text style={styles.time}>(3)Yesterday, 10:55 am</Text>
          </View>
        </View>
        {type === 'Audio' ? <AudioIcon /> : <VideoIcon />}
      </View>
    </View>
  );
};

export default CallCard;
