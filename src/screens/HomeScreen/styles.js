import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // general styles:

  container: { flex: 1 },
  screenBg: { flex: 1, backgroundColor: '#20C1FF', resizeMode: 'cover' },

  // screen styles:

  screenPage: {
    height: '100%',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  screenHeader: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
  },
  screenBody: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  // content styles:
  titleTexts: {
    marginBottom: 5,
  },
  titleTextCovid: {
    fontSize: 26,
    lineHeight: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  titleTextNoMore: {
    fontSize: 26,
    lineHeight: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#ffffff',
    marginLeft: 5,
  },
  slogan: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  // header score:
  scoreBoard: {
    marginTop: 30,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  scoreBlock: {
    minWidth: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 2,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  scoreLabel: {
    color: '#1560A5',
    textTransform: 'uppercase',
    fontSize: 12,
    paddingTop: 2,
    paddingBottom: 2,
  },
  scoreValue: {
    color: '#1560A5',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scoreUnit: {
    color: '#1560A5',
    marginLeft: 5,
  },

  // score items:

  scoreItem: {
    display: 'flex',
    flexDirection: 'row',
  },
  scoreItemBlock: {
    minWidth: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 2,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  scoreItemContent: {
    flex: 1,
  },
  scoreItemIconWrap: {
    padding: 5,
  },
  scoreItemTitle: {
    textTransform: 'uppercase',
    fontSize: 20,
  },
});
