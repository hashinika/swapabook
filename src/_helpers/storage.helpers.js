import {AsyncStorage} from "react-native";

export async function setStorageValue(key, value) {
    try {
        return await AsyncStorage.setItem(key, value);
    } catch (error) {
        return error;
    }
}

export async function getStorageValue(key) {
    try {
        return await AsyncStorage.getItem(key);
    } catch (error) {
      console.log('get item error', JSON.stringify(error));
    }
}

export async function removeStorageValue(key) {
    try {
        return await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log('remove item error',JSON.stringify(error));
    }
}