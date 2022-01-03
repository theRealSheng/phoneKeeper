import React, {createContext, useState} from 'react';

export const UIContext = createContext(null);

export const useUIContext = () => {
  const context = React.useContext(UIContext);
  if (!context) {
    throw new Error('useUI must be used within an UIProvider');
  }
  return context;
};

const UIProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [deleteSuccess, setDeleteSuccess] = useState(null);

  return (
    <UIContext.Provider
      value={{
        loading,
        message,
        errorMessage,
        setLoading,
        setMessage,
        setErrorMessage,
        deleteSuccess,
        setDeleteSuccess,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export {UIProvider};
