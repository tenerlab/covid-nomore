import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#03A1E9',
    padding: 0,
    alignItems: 'center',
    // justifyContent: 'center',
    // alignContent: 'center',
  },

  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },

  header: {
    textAlign: 'center',
    color: '#FFFB',
    fontSize: 35,
    marginBottom: 20,
  },

  currentStatus: {
    fontWeight: 'bold',
    color: '#FFFB',
    fontSize: 45,
  },

  dial: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  recommendations: {
    paddingLeft: 20,
    paddingRight: 20,
    color: '#FFF',
    fontSize: 15,
    marginTop: -50,
    textAlign: 'justify',
  },

  lower: {
    flexGrow: 0,
    marginTop: 20,
    marginBottom: 40,
    // marginLeft: 60,
    // marginRight: 60,
  },
});
