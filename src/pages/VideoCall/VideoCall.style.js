import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {},
  info: {
    color: '#B6BABD',
    fontSize: 15,
    fontWeight: '400',
    marginTop: 15,
    marginBottom: 13,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 90,
    marginBottom: 13,
  },
  name: {
    color: '#D3DAE0',
    fontSize: 33,
    fontWeight: '400',
  },
  type: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '400',
    marginTop: 8,
  },
  closeButton: {
    width: 58,
    height: 58,
    borderRadius: 58,
    backgroundColor: '#E91C43',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 42,
  },
  footerContainer: {
    width: '100%',
    height: 87,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
