// src/screens/RoutinesScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const RoutinesScreen = () => {
  const [reminder, setReminder] = useState('');
  const [reminders, setReminders] = useState<{ reminder: string; time: Date }[]>([]);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleAddReminder = () => {
    setReminders([...reminders, { reminder, time: selectedTime }]);
    setReminder('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rutinas</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu recordatorio"
        value={reminder}
        onChangeText={setReminder}
      />
      <Button title="Seleccionar Hora" onPress={() => setShowPicker(true)} />
      {showPicker && (
        <DateTimePicker
          value={selectedTime}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={(event, date) => {
            setShowPicker(false);
            if (date) setSelectedTime(date);
          }}
        />
      )}
      <Button title="Agregar Recordatorio" onPress={handleAddReminder} />

      <FlatList
        data={reminders}
        renderItem={({ item }) => (
          <Text>{`${item.reminder} - ${item.time.toLocaleTimeString()}`}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
});

export default RoutinesScreen;
