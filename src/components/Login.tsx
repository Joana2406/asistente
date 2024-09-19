import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Aquí deberías implementar la lógica de autenticación
      // const user = await loginUser(email, password);
      // console.log('Usuario autenticado:', user);
    } catch (error) {
      Alert.alert('Error', 'El inicio de sesión falló. Verifique sus credenciales.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Ingresa tu email"
          keyboardType="email-address"
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Ingresa tu contraseña"
          secureTextEntry
        />
        <Button title="Iniciar Sesión" onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  innerContainer: {
    width: '90%',
    maxWidth: 400, // Limita el ancho máximo del formulario
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
    // Añadir márgenes para asegurar que el formulario no esté pegado a los bordes
    marginHorizontal: 20, 
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
});

export default Login;
