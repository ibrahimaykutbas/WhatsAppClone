import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import MessageCard from '../../components/Cards/ChatCard/ChatCard';
import FloatingBottom from '../../components/FloatingBottom/FloatingBottom';

import SettingsModal from '../../components/Modals/SettingsModal/SettingsModal';

import styles from './Chats.style';

const Chats = ({navigation}) => {
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);

  const handleChatPage = () => {
    navigation.navigate('ChatPage');
  };

  const handleSelectContact = () => {
    navigation.navigate('SelectContactPage');
  };

  const handleModalToggle = () => {
    setSettingsModalVisible(!settingsModalVisible);
  };

  return (
    <View style={styles.container}>
      <MessageCard
        user="https://wallpapercave.com/wp/wp2068190.jpg"
        title="Qui-Gon Jinn"
        message="Hedefin gerçeklerini belirler."
        notification
        pinned
        onPress={handleChatPage}
      />
      <MessageCard
        user="https://static.wikia.nocookie.net/yildizsavaslari/images/d/d6/Yoda_SWSB.png/revision/latest?cb=20210531083307&path-prefix=tr"
        title="Yoda"
        message="Deneme, yap ya da yapma."
      />
      <MessageCard
        user="https://upload.wikimedia.org/wikipedia/tr/thumb/0/0f/Obi-Wan_Kenobi.png/1200px-Obi-Wan_Kenobi.png"
        title="Obi-Wan Kenobi"
        message="Hello, there!"
      />
      <MessageCard
        user="https://static.wikia.nocookie.net/yildizsavaslari/images/6/6f/Anakin_Skywalker_RotS.png/revision/latest?cb=20180522061709&path-prefix=tr"
        title="Anakin Skywalker"
        message="Bazen gururumuzu bir kenara bırakmalı ve gerekli olanı yapmalıyız."
      />
      <MessageCard
        user="https://static.wikia.nocookie.net/yildizsavaslari/images/b/b2/Padmegreenscrshot.jpg/revision/latest?cb=20170301083438&path-prefix=tr"
        title="Padmé Amidala"
        message="Demek hürriyet böyle görkemli alkışlarla kaybediliyormuş."
      />
      <SettingsModal
        visible={settingsModalVisible}
        onClose={handleModalToggle}
      />
      <FloatingBottom icon="message" onPress={handleSelectContact} />
    </View>
  );
};

export default Chats;
