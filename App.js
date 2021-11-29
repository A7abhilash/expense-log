import React from 'react';
import AppNavigator from './src/AppNavigator';
import {MsgProvider} from './src/contexts/MsgContext';

const App = () => {
  return (
    <MsgProvider>
      <AppNavigator />
    </MsgProvider>
  );
};

export default App;
