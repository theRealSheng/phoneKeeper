import React from 'react';

import {PhoneContextProvider} from './phone_context';
import {UIProvider} from './ui_context';

const ContextProvider = ({children}) => {
  return (
    <UIProvider>
      <PhoneContextProvider>{children}</PhoneContextProvider>
    </UIProvider>
  );
};

export default ContextProvider;
