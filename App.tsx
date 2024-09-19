import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'; 
import AppNavigator from './src/navigation/AppNavigator';
import { VoiceSettingsProvider } from './src/contexts/VoiceSettingsContext'; // Asegúrate de importar el proveedor

const App: React.FC = () => {
  return (
    <VoiceSettingsProvider> {/* Envuelve el AppNavigator con el proveedor */}
      <NavigationContainer>
        <StatusBar style="auto" />
        <AppNavigator />
      </NavigationContainer>
    </VoiceSettingsProvider>
  );
};

export default App;
