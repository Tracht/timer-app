import AsyncStorage from '@react-native-async-storage/async-storage'

export const loadFocusHistory = async(key) => {
  try {
    const history = await AsyncStorage.getItem(key);
    const parsedHistory = history && JSON.parse(history);
    history && setFocusHistory(parsedHistory)
  } catch(e) {
    console.log('load focus history error:', e)
  }
};