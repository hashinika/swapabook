import {AsyncStorage} from "react-native";

export function setStorageValue(key, value) {
    try {
        AsyncStorage.setItem(key, value);
    } catch (error) {
        alert(JSON.stringify(error));
    }
}

export async function getStorageValue(key) {
    try {
        return await AsyncStorage.getItem(key);
    } catch (error) {
        alert(JSON.stringify(error));
    }
}

export async function removeStorageValue(key) {
    try {
        return await AsyncStorage.removeItem(key);
    } catch (error) {
        alert(JSON.stringify(error));
    }
}