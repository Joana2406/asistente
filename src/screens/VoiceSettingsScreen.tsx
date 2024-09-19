import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  VoiceSettings: undefined;
  Chat: undefined;
};

type VoiceSettingsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'VoiceSettings'>;

interface Props {
  navigation: VoiceSettingsScreenNavigationProp;
}

const VoiceSettingsScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const [selectedVoice, setSelectedVoice] = useState<string>('default');

  const handleContinue = () => {
    // Guarda la configuración y navega
    navigation.navigate('Chat');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Configura tu voz e idioma</Text>
      
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Selecciona el idioma:</Text>
        <Text>{selectedLanguage === 'en' ? 'Inglés' : 'Español'}</Text>
        <Button title="Inglés" onPress={() => setSelectedLanguage('en')} />
        <Button title="Español" onPress={() => setSelectedLanguage('es')} />
      </View>
      
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Selecciona la voz:</Text>
        <Text>{selectedVoice === 'default' ? 'Voz Predeterminada' : selectedVoice === 'female' ? 'Voz Femenina' : 'Voz Masculina'}</Text>
        <Button title="Voz Predeterminada" onPress={() => setSelectedVoice('default')} />
        <Button title="Voz Femenina" onPress={() => setSelectedVoice('female')} />
        <Button title="Voz Masculina" onPress={() => setSelectedVoice('male')} />
      </View>
      
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
  pickerContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default VoiceSettingsScreen;
