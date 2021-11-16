import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090E11',
  },
  imageContainer: {
    height: 300,
    justifyContent: 'flex-end',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    color: '#FFFDFF',
    fontSize: 32,
    fontWeight: 'bold',
    paddingLeft: 40,
    paddingBottom: 13,
    position: 'absolute',
  },
  innerContainer: {
    minHeight: 50,
    backgroundColor: '#101D25',
    marginBottom: 16,
    paddingTop: 5,
    paddingLeft: 24,
    paddingBottom: 10,
  },
  headerText: {
    color: '#1CA08B',
    fontSize: 17,
    fontWeight: '400',
    marginBottom: 10,
  },
  settingContainer: {
    flex: 0.7,
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 15,
  },
  settingHeader: {
    color: '#C8D2D7',
    fontSize: 19,
    fontWeight: '400',
  },
  settingHeaderLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#19262E',
    paddingVertical: 10,
  },
  settingText: {
    color: '#95A2A8',
    fontSize: 14,
    fontWeight: '400',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: 20,
  },
  block: {
    color: '#BC5C5C',
    fontSize: 19,
    fontWeight: '400',
  },
});
