import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './pages/Home/Home';
import Chat from './pages/Chat/Chat';
import Profile from './pages/Profile/Profile';
import Gallery from './pages/Gallery/Gallery';
import SelectContact from './pages/SelectContact/SelectContact';
import VoiceCall from './pages/VoiceCall/VoiceCall';
import VideoCall from './pages/VideoCall/VideoCall';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen name="ChatPage" component={Chat} />
        <Stack.Screen name="ProfilePage" component={Profile} />
        <Stack.Screen name="GalleryPage" component={Gallery} />
        <Stack.Screen name="SelectContactPage" component={SelectContact} />
        <Stack.Screen name="VoiceCallPage" component={VoiceCall} />
        <Stack.Screen name="VideoCallPage" component={VideoCall} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
