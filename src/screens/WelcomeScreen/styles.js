import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  // screen styles:

  container: { flex: 1 },
  screenBg: { flex: 1, backgroundColor: '#20C1FF', resizeMode: 'cover' },
  slideContainerWrap: { flex: 1 },

  // slide styles:

  slideContainer: {
    flex: 1,
    color: '#ffffff',
  },
  infoCard: {
    width: windowWidth,
    height: windowHeight * 0.83,
    alignSelf: 'center',
  },
  infoCardImage: {
    alignSelf: 'center',
    width: windowWidth * 0.9, // original size is: 1080x780
    height: windowWidth * 0.9 * (780 / 1080),
    marginTop: windowHeight * 0.04,
    marginBottom: windowHeight * 0.03,
  },
  infoCardContent: {
    width: windowWidth * 0.72,
    alignSelf: 'center',
  },

  // texts:

  textTitle: {
    fontSize: 20,
    lineHeight: 24,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#ffffff',
  },
  textCommon: {
    opacity: 0.75,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
  textHighlighted: {
    opacity: 0.85,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },

  // spacing:

  spacingAfterLarge: {
    marginBottom: 30,
  },
  spacingAfterMedium: {
    marginBottom: 20,
  },

  // nav dots:

  navigationDotsView: {
    flexDirection: 'row',
    left: windowWidth * 0.445,
    marginTop: 30,
  },
  activeIndicator: {
    width: 8,
    height: 8,
    borderRadius: 13,
    backgroundColor: '#ffffff',
    opacity: 1,
    marginRight: 8,
  },
  inactiveIndicator: {
    width: 8,
    height: 8,
    borderRadius: 13,
    backgroundColor: '#ffffff',
    opacity: 0.4,
    marginRight: 8,
  },

  // buttons:

  primaryButtonTouchable: {
    borderRadius: 12,
    backgroundColor: '#665eff',
    height: 52,
    alignSelf: 'center',
    width: windowWidth * 0.8,
    marginTop: 30,
    justifyContent: 'center',
  },
  primaryButtonText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
});
