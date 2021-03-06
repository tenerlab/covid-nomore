import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerWrapper: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#03A1E9',
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    position: 'relative',
  },
  imgWrapper: {
    marginTop: 0,
  },
  imgWrapperFooter: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#ffffff',
  },
  imgLogo: {
    width: '80%',
    height: undefined,
    alignSelf: 'center',
    aspectRatio: 660 / 220, // 1810 / 1668,
    resizeMode: 'cover',
  },
  tempTextsWrapper: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 0,
  },
  tempTextBig: {
    fontSize: 20,
    lineHeight: 24,
    marginBottom: 10,
    color: '#ffffff',
  },
  tempText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 5,
    color: '#ffffff',
  },
  btnContainerWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    paddingTop: 0,
    marginBottom: 0,
  },
  btn: {
    height: 40,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    color: '#333333',
  },
  btnSpecial: {
    height: 40,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#bbbbcc',
    color: '#333333',
  },
  currentUserText: {
    color: '#bbb',
    textAlign: 'center',
    fontSize: 12,
  },
});
