// src/screens/SettingsScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import { saveUserData, getUserData } from '../utils/storage';

const SettingsScreen: React.FC = () => {
  const [username, setUsername] = useState<string>('');

  // Función para guardar el nombre de usuario
  const handleSave = async () => {
    try {
      await saveUserData('username', username);
      alert('Nombre de usuario guardado');
    } catch (error) {
      console.error('Error al guardar el nombre de usuario', error);
    }
  };

  // Función para cargar el nombre de usuario
  const handleLoad = async () => {
    try {
      const storedUsername = await getUserData('username');
      if (storedUsername) {
        setUsername(storedUsername);
      } else {
        alert('No hay datos guardados');
      }
    } catch (error) {
      console.error('Error al cargar el nombre de usuario', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombre de usuario:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Guardar" onPress={handleSave} />
      <Button title="Cargar" onPress={handleLoad} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    padding: 8,
    marginBottom: 16,
  },
});

export default SettingsScreen;
