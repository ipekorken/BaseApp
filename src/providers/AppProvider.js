import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import NavigationProvider from './NavigationProvider';
import store, {persistor} from '@/redux/store';

const AppProvider = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationProvider />
      </PersistGate>
    </Provider>
  );
};

export default AppProvider;
