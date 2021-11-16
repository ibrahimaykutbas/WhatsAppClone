import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: 190,
    height: 212,
    backgroundColor: '#313C42',
    position: 'absolute',
    right: 0,
    top: 0,
    paddingTop: 20,
  },
  text: {
    color: '#F9FFFF',
    fontSize: 17,
    fontWeight: '400',
    marginLeft: 24,
    marginBottom: 20,
  },
  more: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  moreIcon: {
    paddingTop: 20,
  },
});
