import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#03A1E9',
    padding: 0,
    position: 'relative',
  },
  formWrap: {
    margin: 30,
    padding: 18,
    backgroundColor: '#ffffff',
  },
  formInputFieldWrap: {
    marginBottom: 20,
  },
  formFieldWrap: {
    marginBottom: 20,
    paddingLeft: 8,
    paddingRight: 8,
  },
  labelStyle: {
    fontWeight: 'normal',
    fontSize: 16,
    color: '#666669',
  },
  inputStyle: {
    fontWeight: 'normal',
    fontSize: 14,
  },
  datePicker: {
    width: '100%',
  },
  formActionsWrap: {
    marginTop: 100,
  },
  btnSubmitStyle: {
    backgroundColor: '#53b78D',
  },
  disclaimer: {
    marginTop: 10,
    padding: 5,
    textAlign: 'center',
  },
  todoText: {
    fontSize: 12,
    color: '#888',
  },
});
