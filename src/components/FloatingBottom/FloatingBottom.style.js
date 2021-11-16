import {StyleSheet} from 'react-native';

const baseStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default {
  primary: StyleSheet.create({
    container: {
      ...baseStyle.container,
      bottom: 20,
      right: 25,
      borderRadius: 50,
      width: 50,
      height: 50,
      backgroundColor: '#04AD9C',
    },
  }),
  secondary: StyleSheet.create({
    container: {
      ...baseStyle.container,
      bottom: 80,
      right: 31.3,
      borderRadius: 50,
      width: 40,
      height: 40,
      backgroundColor: '#313C42',
    },
  }),
};
