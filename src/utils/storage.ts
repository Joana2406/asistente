// src/utils/storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

// Función para guardar datos en AsyncStorage
export const saveUserData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('Error al guardar los datos en AsyncStorage:', error);
  }
};

// Función para obtener datos de AsyncStorage
export const getUserData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.error('Error al obtener los datos de AsyncStorage:', error);
  }
  return null;
};

// Función para eliminar datos de AsyncStorage
export const removeUserData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error al eliminar los datos de AsyncStorage:', error);
  }
};
