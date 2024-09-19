//src/screens/WelcomeScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const WelcomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to IAC Voice</Text>
      <Button title="Get Started" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width,
    height,
  },
});

export default WelcomeScreen;
