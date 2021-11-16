import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#101D25',
    paddingBottom: 10,
  },
  innerContainer: {
    flex: 1,
  },
  header: {
    height: 52,
    flexDirection: 'row',
    backgroundColor: '#232D36',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 15,
  },
  username: {
    color: '#D3DAE0',
    fontSize: 17,
  },
  callContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 0.7,
  },
  infoContainer: {
    alignItems: 'center',
  },
  date: {
    minWidth: 59,
    minHeight: 27,
    backgroundColor: '#202B31',
    marginTop: 10,
    marginHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  info: {
    minWidth: 59,
    minHeight: 27,
    backgroundColor: '#202B31',
    marginTop: 10,
    marginHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  date: {
    color: '#9CA7AD',
    fontSize: 14,
  },
  infoText: {
    color: '#C7BE8A',
    fontSize: 14,
    textAlign: 'center',
    padding: 5,
  },
  footerContainer: {
    flex: 0.09,
    flexDirection: 'row',
    marginHorizontal: 12,
  },
  footerContent: {
    flex: 1,
    height: 41,
    flexDirection: 'row',
    backgroundColor: '#2D383E',
    borderRadius: 20,
    paddingLeft: 13,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  message: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 200,
    marginLeft: 5,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  voice: {
    width: 43,
    height: 43,
    borderRadius: 43,
    backgroundColor: '#02AF9C',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
