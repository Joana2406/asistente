// src/screens/VoiceSettingsScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Picker } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  VoiceSettings: undefined;
  Actions: undefined; // Asegúrate de que Actions esté incluido
};

type VoiceSettingsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'VoiceSettings'>;

interface Props {
  navigation: VoiceSettingsScreenNavigationProp;
}

const VoiceSettingsScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedVoice, setSelectedVoice] = useState<string>('voice1');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

  useEffect(() => {
    // Recuperar configuración guardada al montar el componente
    const loadSettings = async () => {
      try {
        const voice = await AsyncStorage.getItem('voice');
        const language = await AsyncStorage.getItem('language');
        
        if (voice !== null) {
          setSelectedVoice(voice);
        }
        if (language !== null) {
          setSelectedLanguage(language);
        }
      } catch (error) {
        console.error('Error loading settings', error);
      }
    };

    loadSettings();
  }, []);

  const handleContinue = async () => {
    try {
      // Guardar configuración
      await AsyncStorage.setItem('voice', selectedVoice);
      await AsyncStorage.setItem('language', selectedLanguage);
      
      // Redirigir a la pantalla de acciones
      navigation.navigate('Actions');
    } catch (error) {
      console.error('Error saving settings', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Configura tu voz e idioma</Text>

      <Text style={styles.label}>Selecciona la voz:</Text>
      <Picker
        selectedValue={selectedVoice}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedVoice(itemValue)}
      >
        <Picker.Item label="Voz 1" value="voice1" />
        <Picker.Item label="Voz 2" value="voice2" />
        <Picker.Item label="Voz 3" value="voice3" />
      </Picker>

      <Text style={styles.label}>Selecciona el idioma:</Text>
      <Picker
        selectedValue={selectedLanguage}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="Inglés" value="en" />
        <Picker.Item label="Español" value="es" />
        <Picker.Item label="Francés" value="fr" />
      </Picker>

      <Button title="Continuar" onPress={handleContinue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: 150,
  },
});

export default VoiceSettingsScreen;
