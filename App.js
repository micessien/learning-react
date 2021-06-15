import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
// Components
import Navigation from "./Navigation/Navigation";

export default function App() {
  // Ignore log Remote debugger notification by message:
  LogBox.ignoreLogs(['Remote debugger']);

  // Ignore all log notifications: This is useful when giving product demos, for example
  // LogBox.ignoreAllLogs();

  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
}
