import React from 'react';
// Components
import Navigation from './Navigation/Navigation';
// Redux Stuff
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/es/integration/react';
import { PersistGate } from 'redux-persist/integration/react';
import Store from './Store/configureStore';
import { persistStore } from 'redux-persist';
// Logs
import {LogBox} from 'react-native';
// Ignore log Remote debugger notification by message:
LogBox.ignoreLogs(['Remote debugger']);
// Ignore all log notifications: This is useful when giving product demos, for example
// LogBox.ignoreAllLogs();

export default class App extends React.Component {
  render() {
    let persistor = persistStore(Store)

    return (
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}
