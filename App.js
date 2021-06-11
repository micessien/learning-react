import React from 'react';
import { LogBox } from 'react-native';
// Components
import Navigation from "./Navigation/Navigation";

export default function App() {
  // Ignore log Remote debugger notification by message:
  LogBox.ignoreLogs(['Remote debugger']);

  // Ignore all log notifications: This is useful when giving product demos, for example
  // LogBox.ignoreAllLogs();

  return (
    <Navigation />
  );
}
