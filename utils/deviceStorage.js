import AsyncStorage from "@react-native-async-storage/async-storage";

const deviceStorage = {
  saveItem: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  },

  loadItem: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  },

  removeItem: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  },

  loadAllItems: async () => {
    try {
      const value = await AsyncStorage.getAllKeys();
      return value;
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  },
};

export default deviceStorage;
