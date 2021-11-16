import React from 'react';
import {View, Text} from 'react-native';

import Modal from 'react-native-modal';

import DocumentIcon from '../../../assets/svg/chat/document.svg';
import CameraIcon from '../../../assets/svg/chat/camera.svg';
import GalleryIcon from '../../../assets/svg/chat/gallery.svg';
import AudioIcon from '../../../assets/svg/chat/audio.svg';
import LocationIcon from '../../../assets/svg/chat/location.svg';
import ContactIcon from '../../../assets/svg/chat/contact.svg';

import styles from './FilesModal.style';

const FilesModal = ({visible, onClose}) => {
  return (
    <Modal
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}>
      <View style={styles.container}>
        <View style={styles.topButtons}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.documentContainer}>
              <DocumentIcon />
            </View>
            <Text style={styles.text}>Document</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.cameraContainer}>
              <CameraIcon />
            </View>
            <Text style={styles.text}>Camera</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.galleryContainer}>
              <GalleryIcon />
            </View>
            <Text style={styles.text}>Document</Text>
          </View>
        </View>

        <View style={styles.topButtons}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.audioContainer}>
              <AudioIcon />
            </View>
            <Text style={styles.text}>Audio</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.locationContainer}>
              <LocationIcon />
            </View>
            <Text style={styles.text}>Location</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.contactContainer}>
              <ContactIcon />
            </View>
            <Text style={styles.text}>Contact</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilesModal;
