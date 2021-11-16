import React from 'react';
import {View, Text} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Chats from '../Chats/Chats';
import Status from '../Status/Status';
import Calls from '../Calls/Calls';
import Header from '../../components/Header/Header';

import styles from './Home.style';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
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
          name="ChatsPage"
          component={props => <Chats {...props} />}
          options={{title: 'Chats'}}
        />
        <Tab.Screen
          name="StatusPage"
          component={Status}
          options={{title: 'Status'}}
        />
        <Tab.Screen
          name="CallsPage"
          component={Calls}
          options={{title: 'Calls'}}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Home;
