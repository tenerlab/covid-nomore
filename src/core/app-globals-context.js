import React, { useState } from 'react';

export const AppGlobalsContext = React.createContext(null);
export const AppGlobalsContextConsumer = AppGlobalsContext.Consumer;

export const AppGlobalsContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(undefined);

  return (
    <AppGlobalsContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AppGlobalsContext.Provider>
  );
};
