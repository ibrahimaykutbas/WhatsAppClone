import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 65,
    flexDirection: 'row',
    marginTop: 16,
    marginLeft: 21,
    marginRight: 21,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#18252D',
  },
  content: {
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  user: {
    color: '#D4DCDF',
    fontSize: 19,
    fontWeight: '400',
    paddingLeft: 21,
  },
  message: {
    color: '#868F94',
    fontSize: 14,
    fontWeight: '400',
    paddingLeft: 21,
  },
  detail: {
    alignItems: 'flex-end',
  },
  icons: {
    flexDirection: 'row',
  },
  time: {
    color: '#868F94',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 10,
  },
  timeNotification: {
    color: '#00AF9E',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 10,
  },
  notification: {
    backgroundColor: '#00AE98',
    width: 18,
    height: 18,
    borderRadius: 18,
    textAlign: 'center',
    marginLeft: 5,
  },
});
