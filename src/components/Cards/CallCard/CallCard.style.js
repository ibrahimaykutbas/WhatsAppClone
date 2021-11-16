import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 65,
    flexDirection: 'row',
    marginTop: 16,
    marginLeft: 21,
    marginRight: 21,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#18252D',
    paddingBottom: 10,
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
  detailContainer: {
    flexDirection: 'row',
    paddingLeft: 21,
    paddingTop: 5,
  },
  time: {
    color: '#868F94',
    fontSize: 12,
    fontWeight: '700',
    paddingLeft: 5,
  },
});
