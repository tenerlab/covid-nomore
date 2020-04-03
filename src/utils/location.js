import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';

function getLocationStatus() {
  return new Promise(resolve => {
    BackgroundGeolocation.checkStatus(resolve);
  });
}

export const isLocationEnabled = async () => {
  const status = await getLocationStatus();
  return status && status.locationServicesEnabled === true;
};

export const hasLocationPermissions = async () => {
  const status = await getLocationStatus();
  return status === BackgroundGeolocation.AUTHORIZED;
};
