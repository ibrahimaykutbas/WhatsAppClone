import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: 331,
    height: 290,
    backgroundColor: '#364147',
    alignSelf: 'center',
    borderRadius: 4,
  },
  header: {
    height: 199,
    borderBottomWidth: 1,
    borderBottomColor: '#4D585E',
    paddingTop: 20,
    paddingLeft: 24,
  },
  headerText: {
    color: '#D7E0E5',
    fontSize: 21,
    fontWeight: '400',
  },
  option: {
    flexDirection: 'row',
    paddingLeft: 2,
    paddingTop: 21,
    alignItems: 'center',
  },
  optionText: {
    color: '#FBFEFF',
    fontSize: 17,
    fontWeight: '400',
    marginLeft: 21,
  },
  footer: {
    paddingTop: 22,
    paddingLeft: 24,
  },
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    color: '#F9FFFF',
    fontSize: 15,
    fontWeight: '400',
    marginLeft: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonText: {
    color: '#25AC9D',
    fontSize: 15,
    fontWeight: '400',
    marginRight: 25,
  },
});
