// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Asegúrate de importar correctamente tu Stack Param List
import { signInWithEmailAndPassword } from '../services/authService'; // Importa tu función de autenticación personalizada si la usas

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // Asegúrate de incluir esta línea para la visibilidad de la contraseña

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor, ingrese ambos campos.');
      return;
    }

    try {
      // Aquí deberías integrar tu lógica de autenticación
      // Por ejemplo, usando Firebase:
      // await signInWithEmailAndPassword(email, password);
      
      // Temporalmente usaremos una alerta para simular la autenticación
      Alert.alert('Login', 'Iniciar sesión presionado');
      
      // Si la autenticación es exitosa, navega a la pantalla de configuración de voz
      navigation.navigate('VoiceConfig');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
          <Text style={styles.arrowText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.welcomeText}>¡Bienvenido a IAC voice!</Text>
        <Image 
          source={{ uri: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-nvEBeSy1b9wlHJjQiVd6BT7n.png?st=2024-09-15T03%3A48%3A52Z&amp;se=2024-09-15T05%3A48%3A52Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-14T23%3A09%3A09Z&amp;ske=2024-09-15T23%3A09%3A09Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=zST//CIue%2BBEegBcc9V8xihu0J1Vrjn1iXAR%2BMlAm/k%3D' }} 
          style={styles.logo} 
        />
      </View>
      <View style={styles.formContainer}>
        <TextInput 
          placeholder="Introduce tu correo electrónico" 
          keyboardType="email-address"
          style={styles.input} 
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.passwordContainer}>
          <TextInput 
            placeholder="Introduce la contraseña" 
            secureTextEntry={!passwordVisible}
            style={styles.input} 
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity 
            style={styles.togglePassword} 
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Text>👁</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.forgotPassword}>¿Has olvidado tu contraseña?</Text>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>INICIAR SESIÓN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerButtonText}>REGISTRARSE</Text>
        </TouchableOpacity>
        <Text style={styles.terms}>
          Al continuar, aceptas nuestras Condiciones de Uso y Aviso de Privacidad.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    elevation: 3,
    paddingBottom: 20,
    alignItems: 'center',
  },
  backArrow: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  arrowText: {
    fontSize: 24,
    color: '#000000',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  logo: {
    width: 100,
    height: 50,
    marginVertical: 20,
  },
  formContainer: {
    backgroundColor: '#d3d3d3',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 30,
    fontSize: 14,
    backgroundColor: '#ffffff',
  },
  passwordContainer: {
    width: '100%',
    position: 'relative',
  },
  togglePassword: {
    position: 'absolute',
    top: '50%',
    right: 20,
    transform: [{ translateY: -15 }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPassword: {
    fontSize: 12,
    color: '#a9a9a9',
    marginVertical: 10,
  },
  loginButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#28a745',
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 10,
  },
  registerButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  terms: {
    fontSize: 12,
    color: '#000000',
    marginTop: 10,
  },
});

export default LoginScreen;
