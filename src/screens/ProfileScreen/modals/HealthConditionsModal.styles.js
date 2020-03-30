import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 3,
    padding: 20,
    flexGrow: 0,
  },
  headerTitle: {
    fontSize: 20,
    marginBottom: 20,
    color: '#666669',
  },
  list: {
    height: 150,
  },
  listText: {
    flexDirection: 'row',
    paddingBottom: 3,
  },
  encounter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  risk: {
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
  cancel: {
    color: '#AAA',
  },
  submit: {
    color: '#0183D3',
  },
});