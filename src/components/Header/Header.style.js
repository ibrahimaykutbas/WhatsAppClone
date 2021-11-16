import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 0.07,
    backgroundColor: '#232D36',
    paddingTop: 15,
    paddingLeft: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#9DA5AC',
    fontSize: 20,
    fontWeight: '700',
  },
  buttons: {
    flexDirection: 'row',
    paddingRight: 16,
  },
  search: {
    marginRight: 7,
  },
});
