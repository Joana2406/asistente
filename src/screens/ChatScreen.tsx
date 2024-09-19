// src/screens/ChatScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSend = async () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: input,
        sender: 'user',
      };
      setMessages([...messages, newMessage]);
      setInput('');
      setLoading(true);

      try {
        console.log('Enviando solicitud...');
        const response = await axios.post('http://192.168.1.79:3009/query', {
          prompt: input,
        });
        console.log('Respuesta del servidor:', response.data);

        const botResponse: Message = {
          id: Date.now().toString(),
          text: response.data.response,
          sender: 'bot',
        };
        setMessages([...messages, newMessage, botResponse]);
      } catch (error) {
        console.error('Error al recibir la respuesta:', error);

        const errorMessage: Message = {
          id: Date.now().toString(),
          text: 'Error al recibir la respuesta del servidor.',
          sender: 'bot',
        };
        setMessages([...messages, newMessage, errorMessage]);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={item.sender === 'user' ? styles.userMessage : styles.botMessage}>
            <Text>{item.text}</Text>
          </View>
        )}
        style={styles.messageList}
      />
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Escribe tu mensaje..."
      />
      <Button title={loading ? 'Enviando...' : 'Enviar'} onPress={handleSend} disabled={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  messageList: {
    flex: 1,
    marginBottom: 16,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#d1ffd1',
    padding: 8,
    borderRadius: 10,
    marginBottom: 4,
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e1e1e1',
    padding: 8,
    borderRadius: 10,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 10,
    marginBottom: 8,
  },
});

export default ChatScreen;
