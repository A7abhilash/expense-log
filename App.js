import React from 'react';
import AppNavigator from './src/AppNavigator';
import {DataProvider} from './src/contexts/DataContext';
import {MsgProvider} from './src/contexts/MsgContext';
import {SettingsProvider} from './src/contexts/SettingsContext';

const App = () => {
  return (
    <MsgProvider>
      <SettingsProvider>
        <DataProvider>
          <AppNavigator />
        </DataProvider>
      </SettingsProvider>
    </MsgProvider>
  );
};

export default App;
