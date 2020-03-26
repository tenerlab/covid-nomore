import React, { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

export const ConnectionContext = React.createContext(null);

export const ConnectionContextConsumer = ConnectionContext.Consumer;

export const ConnectionContextProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(null);
  const [isInternetReachable, setIsInternetReachable] = useState(null);
  const [cameBackOnline, setCameBackOnline] = useState(null);

  useEffect(() => {
    function handleConnectivityChange(connectionState) {
      const cameBackOnlineBool =
        connectionState.isInternetReachable === true &&
        isInternetReachable === false;

      setIsConnected(connectionState.isConnected);
      setIsInternetReachable(connectionState.isInternetReachable);
      setCameBackOnline(cameBackOnlineBool);
    }

    const unsubscribeConnectionListener = NetInfo.addEventListener(
      handleConnectivityChange
    );

    return function cleanup() {
      if (unsubscribeConnectionListener) unsubscribeConnectionListener();
    };
  });

  return (
    <ConnectionContext.Provider
      value={{
        isConnected,
        isInternetReachable,
        cameBackOnline,
        setCameBackOnline,
      }}
    >
      {children}
    </ConnectionContext.Provider>
  );
};
