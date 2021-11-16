import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#054C44',
  },
  headerContainer: {
    height: 133,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    color: '#8DB5B4',
    fontSize: 15,
    fontWeight: '400',
    marginTop: 8,
    marginLeft: 8,
  },
  name: {
    color: '#F3FFFF',
    fontSize: 30,
    fontWeight: '400',
    marginTop: 20,
  },
  type: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '400',
    marginTop: 8,
    paddingBottom: 13,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
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
    height: 87,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
