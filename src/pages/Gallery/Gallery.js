import React from 'react';
import {View, Text} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import BackIcon from '../../assets/svg/back.svg';

import MediaCard from '../../components/Cards/MediaCard/MediaCard';
import DocsCard from '../../components/Cards/DocsCard/DocsCard';
import LinksCard from '../../components/Cards/LinksCard/LinksCard';

import styles from './Gallery.style';

const Tab = createMaterialTopTabNavigator();

const Gallery = ({navigation}) => {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackIcon onPress={handleBack} />
        <Text style={styles.name}>Qui-Gon Jinn</Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: '700',
          },
          tabBarStyle: {backgroundColor: '#232D36'},
          tabBarActiveTintColor: '#189C87',
          tabBarInactiveTintColor: '#9DA5AC',
        }}>
        <Tab.Screen
          name="MediaPage"
          component={props => <MediaCard {...props} />}
          options={{title: 'Media'}}
        />
        <Tab.Screen
          name="DocsPage"
          component={props => <DocsCard {...props} />}
          options={{title: 'Docs'}}
        />
        <Tab.Screen
          name="LinksPage"
          component={props => <LinksCard {...props} />}
          options={{title: 'Links'}}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Gallery;
