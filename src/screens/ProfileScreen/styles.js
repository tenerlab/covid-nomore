import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#03A1E9',
    padding: 0,
    justifyContent: 'center',
    alignContent: 'center',
    position: 'relative',
  },
  contentWrap: {
    margin: 30,
    minHeight: '80%',
  },
  section: {
    padding: 18,
    backgroundColor: '#ffffff',
    marginBottom: 20,
  },
  profileField: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  fieldLabel: {
    marginRight: 5,
    color: '#000000',
  },
  fieldLabelEdit: {
    color: '#0183D3',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#0183D3',
    marginLeft: 'auto',
    fontSize: 12,
  },
  profileName: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 20,
  },
  profileFieldConditions: {
    marginTop: 8,
  },
  notificationsSectionTitle: {
    fontSize: 16,
  },
});
