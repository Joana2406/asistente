// src/screens/DiaryScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DiaryScreen = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState<string[]>([]);

  const handleSaveNote = async () => {
    try {
      const updatedNotes = [...notes, note];
      await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
      setNotes(updatedNotes);
      setNote(''); // Limpiar campo después de guardar
    } catch (error) {
      console.error('Error saving note', error);
    }
  };

  const loadNotes = async () => {
    const savedNotes = await AsyncStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  };

  // Cargar las notas al montar el componente
  React.useEffect(() => {
    loadNotes();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notas</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nota aquí"
        value={note}
        onChangeText={setNote}
      />
      <Button title="Guardar Nota" onPress={handleSaveNote} />
      <FlatList
        data={notes}
        renderItem={({ item }) => <Text style={styles.note}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  note: { fontSize: 18, marginBottom: 5 },
});

export default DiaryScreen;
