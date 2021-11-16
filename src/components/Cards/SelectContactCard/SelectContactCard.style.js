import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#00B19C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 45,
  },
  name: {
    color: '#DEE2E5',
    fontSize: 19,
    fontWeight: '400',
    marginLeft: 21,
  },
  description: {
    color: '#939CA1',
    fontSize: 17,
    fontWeight: '400',
    marginLeft: 21,
  },
});
