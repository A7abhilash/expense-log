import React from 'react';
import AppNavigator from './src/AppNavigator';
import {MsgProvider} from './src/contexts/MsgContext';
import {SettingsProvider} from './src/contexts/SettingsContext';

const App = () => {
  return (
    <MsgProvider>
      <SettingsProvider>
        <AppNavigator />
      </SettingsProvider>
    </MsgProvider>
  );
};

export default App;
