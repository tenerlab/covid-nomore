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
    padding: 18,
    minHeight: '80%',
    backgroundColor: '#ffffff',
  },
  profileField: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  fieldLabel: {
    marginRight: 5,
  },
  profileName: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 20,
  },

  notificationsSection: {
    marginTop: 30,
  },
  notificationsSectionTitle: {
    fontSize: 16,
  },
});
