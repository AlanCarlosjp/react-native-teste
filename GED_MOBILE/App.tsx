import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

