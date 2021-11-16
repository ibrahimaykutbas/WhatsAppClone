import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#232D36',
    height: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 17,
    paddingLeft: 10,
  },
  headerText: {
    color: '#D5DDE0',
    fontSize: 20,
    fontWeight: '400',
    marginLeft: 15,
  },
  headerSubText: {
    color: '#EAF3FA',
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 15,
  },
  icon: {
    marginRight: 10,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#101D25',
    paddingLeft: 25,
  },
  userContainer: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#00B19C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userText: {
    color: '#DEE2E5',
    fontSize: 19,
    fontWeight: '400',
    marginLeft: 21,
  },
  qrCodeIcon: {
    marginRight: 25,
  },
});
