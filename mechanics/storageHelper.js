import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    }
    catch (error) {
        console.log("test dupy #1 b³¹d w przechowaniu danych", error);
    }
};

// get item from key

export const getItemFor = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    }
    catch (error) {
        console.log("test dupy #2 b³¹d w pobraniu danych");
    }
};