// src/screens/MailScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const MailScreen = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSendEmail = async () => {
    try {
      const response = await fetch('https://api.tu-servicio-de-correo.com/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to,
          subject,
          body,
        }),
      });

      if (response.ok) {
        alert('Correo enviado');
      } else {
        alert('Error al enviar el correo');
      }
    } catch (error) {
      console.error('Error sending email', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enviar Correo</Text>
      <TextInput
        style={styles.input}
        placeholder="Para"
        value={to}
        onChangeText={setTo}
      />
      <TextInput
        style={styles.input}
        placeholder="Asunto"
        value={subject}
        onChangeText={setSubject}
      />
      <TextInput
        style={styles.input}
        placeholder="Cuerpo del correo"
        value={body}
        onChangeText={setBody}
        multiline
      />
      <Button title="Enviar Correo" onPress={handleSendEmail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
});

export default MailScreen;
