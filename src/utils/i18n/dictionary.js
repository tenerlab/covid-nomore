const DICTIONARY_EN = {
  screenNames: {
    Init: 'Init',
    Risk: 'Risk',
    Symptoms: 'Symptoms',
    Location: 'Location',
    Profile: 'Profile',

    Login: 'Login',
    Settings: 'Settings',
    'User Profile': 'User Profile',
  },
  slides: {},
  auth: {
    'You are logged-in as': 'You are logged-in as',
    'You have logged-in as': 'You have logged-in as',
    "You've been logged-out": "You've been logged-out",
    'Username is missing or empty.': 'Username is missing or empty.',
    'No users are matching provided username and password.':
      'No users are matching provided username and password.',
    'No users are matching provided username.':
      'No users are matching provided username.',
    'Failed to create new user with username':
      'Failed to create new user with username',
  },
  permissions: {
    'Application needs access to your microphone so you can record audio.':
      'Application needs access to your microphone so you can record audio.',
  },
  wipe: {
    'Delete all local data and in cloud': 'Delete all local data and in cloud',
    'Logout user and delete local data': 'Logout user and delete local data',
    'All data has been deleted': 'All data has been deleted',
    "You've been logged-out": "You've been logged-out",
  },
  preExistingHealthConditions: {
    Asthma: 'Asthma',
    'Type II Diabetes': 'Type II Diabetes',
  },
  common: {
    'Loading...': 'Loading...',
    'Choose a username': 'Choose a username',
    'Type a message...': 'Type a message...',
    'Unknown error has occurred': 'Unknown error has occurred',
    'Change language': 'Change language',
    'Terms of Service': 'Terms of Service',
    'Privacy Policy': 'Privacy Policy',
    'To open the Terms of Service you need to have a web browser installed':
      'To open the Terms of Service you need to have a web browser installed',
    Enter: 'Enter',
    Close: 'Close',
    Retry: 'Retry',
    'No Connection': 'No Connection',
    'No Internet connection': 'No Internet connection',
    'user id': 'user id',
    'device id': 'device id',
  },
};

const DICTIONARY_DE = {
  screenNames: {
    Init: 'Starten',
    Risk: 'Risk',
    Symptoms: 'Symptoms',
    Location: 'Location',
    Profile: 'Profile',

    Login: 'Login',
    Settings: 'Einstellungen',
    'User Profile': 'Benutzerprofil',
  },
  slides: {},
  auth: {
    'You are logged-in as': 'Du bist eingeloggt als',
    'You have logged-in as': 'Du hast Dich eingeloggt als',
    "You've been logged-out": 'Du wurdest abgemeldet.',
    'Username is missing or empty.': 'Nutzername fehlt.',
    'No users are matching provided username and password.':
      'Falscher Nutzername oder falsches Passwort.',
    'No users are matching provided username.':
      'Falscher Nutzername oder falsches Passwort.',
    'Failed to create new user with username':
      'FFehlgeschlagen! Neuer Nutzer <> konnte nicht erstellt werden.',
  },
  permissions: {
    'Application needs access to your microphone so you can record audio.':
      'Die Anwendung benötigt Zugriff auf Dein Mikrofon, um Audionachrichten aufzuzeichnen.',
  },
  wipe: {
    'Delete all local data and in cloud':
      'Lösche alle meine Daten vollständig\n(lokal und in der Cloud)',
    'Logout user and delete local data':
      'Lösche alle meine Daten lokal und melde mich ab',
    'All data has been deleted': 'Alle Daten wurden gelöscht',
    "You've been logged-out": 'Du wurdest abgemeldet.',
  },
  preExistingHealthConditions: {
    asthma: 'Asthma',
    diabetes_type_2: 'Type II Diabetes',
  },
  common: {
    'Loading...': 'Lädt ...',
    'Choose a username': 'Wähle einen Nutzernamen',
    'Type a message...': 'Schreibe eine Nachricht...',
    'Unknown error has occurred': 'Unbekannter Fehler ist aufgetreten',
    'Change language': 'Sprache ändern',
    'Terms of Service': 'AGB',
    'Privacy Policy': 'Datenschutz',
    'To open the Terms of Service you need to have a web browser installed':
      'zum Lesen der AGBs wird ein Webbrowser benötigt',
    Enter: 'Eingeben',
    Close: 'Schließen',
    Retry: 'Wiederholen',
    'No Connection': 'Keine Verbindung',
    'No Internet connection': 'Keine Internetverbindung',
    'user id': 'Benutzer-ID',
    'device id': 'Geräte-ID',
  },
};

export const DICTIONARY = {
  en: DICTIONARY_EN,
  de: DICTIONARY_DE,
};

export const DICTIONARY_LANGS = Object.keys(DICTIONARY);
export const DICTIONARY_GROUPS = Object.keys(DICTIONARY_EN);
export const DICTIONARY_DEFAULT_GROUP = 'common';
