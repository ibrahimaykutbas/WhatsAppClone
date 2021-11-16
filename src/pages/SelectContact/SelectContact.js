import React, {useState} from 'react';
import {View, Text} from 'react-native';

import Modal from 'react-native-modal';

import BackIcon from '../../assets/svg/back.svg';
import SearhIcon from '../../assets/svg/search.svg';
import MenuIcon from '../../assets/svg/menu.svg';
import NewGroupIcon from '../../assets/svg/newGroup.svg';
import NewContactIcon from '../../assets/svg/newContact.svg';
import QRCodeIcon from '../../assets/svg/QRCode.svg';

import SelectContactSettingsModal from '../../components/Modals/SelectContactSettingsModal/SelectContactSettingsModal';

import SelectContactCard from '../../components/Cards/SelectContactCard/SelectContactCard';

import styles from './SelectContact.style';

const SelectContact = ({navigation}) => {
  const [settingsModal, setSettingsModal] = useState(false);

  const handleSettingsToggle = () => {
    setSettingsModal(!settingsModal);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleChat = () => {
    navigation.navigate('ChatPage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <BackIcon onPress={handleGoBack} />
          <View>
            <Text style={styles.headerText}>Select Contact</Text>
            <Text style={styles.headerSubText}>10 contacts</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <SearhIcon style={styles.icon} />
          <MenuIcon style={styles.icon} onPress={handleSettingsToggle} />
        </View>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.userContainer}>
          <View style={styles.iconContainer}>
            <NewGroupIcon />
          </View>
          <Text style={styles.userText}>New group</Text>
        </View>
        <View style={[styles.userContainer, {justifyContent: 'space-between'}]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.iconContainer}>
              <NewContactIcon />
            </View>
            <Text style={styles.userText}>New contact</Text>
          </View>
          <QRCodeIcon style={styles.qrCodeIcon} />
        </View>
        <SelectContactCard
          user="https://wallpapercave.com/wp/wp2068190.jpg"
          title="Qui-Gon Jinn"
          status="Hey there! I am using W..."
          onPress={handleChat}
        />
        <SelectContactCard
          user="https://upload.wikimedia.org/wikipedia/tr/thumb/0/0f/Obi-Wan_Kenobi.png/1200px-Obi-Wan_Kenobi.png"
          title="Obi-Wan Kenobi"
          status="Hey there! I am using W..."
        />
        <SelectContactCard
          user="https://static.wikia.nocookie.net/yildizsavaslari/images/6/6f/Anakin_Skywalker_RotS.png/revision/latest?cb=20180522061709&path-prefix=tr"
          title="Anakin Skywalker"
          status="Hey there! I am using W..."
        />
        <SelectContactCard
          user="https://static.wikia.nocookie.net/yildizsavaslari/images/b/b2/Padmegreenscrshot.jpg/revision/latest?cb=20170301083438&path-prefix=tr"
          title="Padmé Amidala"
          status="Hey there! I am using W..."
        />
        <SelectContactCard
          user="https://fikrisinema.com/wp-content/uploads/2015/12/Luke-Skywalker-FikriSinema-1.jpg"
          title="Luke Skywalker"
          status="Hey there! I am using W..."
        />
        <SelectContactCard
          user="https://s3.amazonaws.com/libapps/accounts/81381/images/leia.jpg"
          title="Leia Organa"
          status="Hey there! I am using W..."
        />
        <SelectContactCard
          user="https://i0.wp.com/filmloverss.com/wp-content/uploads/2016/01/star-wars-han-solo-filmloverss.jpg?fit=720%2C400&ssl=1"
          title="Han Solo"
          status="Hey there! I am using W..."
        />
      </View>
      <SelectContactSettingsModal
        visible={settingsModal}
        onClose={handleSettingsToggle}
      />
    </View>
  );
};

export default SelectContact;
