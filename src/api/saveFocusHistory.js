import AsyncStorage from '@react-native-async-storage/async-storage'

export const saveFocusHistory = async (key, focusHistory) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(focusHistory));
  } catch(e) {
    console.log('save focus history error:', e)
  }
};