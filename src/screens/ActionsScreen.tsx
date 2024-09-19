// src/screens/ActionsScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Actions: undefined;
  Chat: undefined;
  Diary: undefined;
  Routines: undefined;
  Mail: undefined;
};

type ActionsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Actions'>;

interface Props {
  navigation: ActionsScreenNavigationProp;
}

const ActionsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona una acción</Text>
      <Button title="Ir al chat" onPress={() => navigation.navigate('Chat')} />
      <Button title="Notas" onPress={() => navigation.navigate('Diary')} />
      <Button title="Rutinas" onPress={() => navigation.navigate('Routines')} />
      <Button title="Correo" onPress={() => navigation.navigate('Mail')} />
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ActionsScreen;
