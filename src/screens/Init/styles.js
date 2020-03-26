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
  imgLogoTop: {
    width: '80%',
    height: undefined,
    alignSelf: 'center',
    aspectRatio: 1810 / 1668,
  },
  imgLogoBottom: {
    width: '100%',
    height: undefined,
    aspectRatio: 3270 / 811,
  },
  formWrapper: {
    width: 180,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderWrapper: {
    width: '100%',
    height: 165,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  loadingIndicatorWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: 5,
    color: '#ffffff',
    alignSelf: 'center',
  },
  retryBlockWrap: {
    marginTop: -40,
  },
  errorMessage: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 12,
  },
});
