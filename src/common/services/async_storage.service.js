import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageService = {
  get: async (key) => await AsyncStorage.getItem(key),
  set: async (key, value) => await AsyncStorage.setItem(key, value),
  remove: async (key) => await AsyncStorage.removeItem(key),
  getAllKeys: async () => await AsyncStorage.getAllKeys(),
  clearAll: async () => await AsyncStorage.clear(),
};

export default AsyncStorageService;
