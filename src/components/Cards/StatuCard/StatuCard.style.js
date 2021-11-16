import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 65,
    flexDirection: 'row',
    marginTop: 10,
  },
  content: {
    flex: 1,
    paddingBottom: 15,
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#18252D',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  user: {
    color: '#D4DCDF',
    fontSize: 19,
    fontWeight: '700',
    paddingLeft: 21,
  },
  time: {
    color: '#868F94',
    fontSize: 14,
    fontWeight: '400',
    paddingLeft: 21,
  },
});
