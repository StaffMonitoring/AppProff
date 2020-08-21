import React from 'react';
import {createAppContainer} from 'react-navigation'
import {AppNavigator} from './src/Navigation/AppNavigation'





const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
  
    <AppContainer/>
  
  );
}
