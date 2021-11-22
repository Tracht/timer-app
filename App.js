import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Focus } from './src/features/focus/focus';
import { FocusHistory } from './src/features/focus/focusHistory';
import { Timer } from './src/features/timer/Timer';
import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';
import AsyncStorage from '@react-native-async-storage/async-storage'

const STATUS = {
  COMPLETE: 1, 
  FAIL: 0, 
}

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);
  
  const addFocusHistoryStatus = (subject, status) => {
    setFocusHistory([...focusHistory, {
       key: String(focusHistory.length + 1), // essential for FlatList
       subject, 
       status
    }])
  }

  const clearHistory = () => {
    setFocusHistory([]);
  }

  const saveFocusHistory = async () => {
    try {
      await AsyncStorage.setItem('focusHistory', JSON.stringify(focusHistory));
    } catch(e) {
      console.log('save focus history error:', e)
    }
  };

  const loadFocusHistory = async() => {
    try {
      const history = await AsyncStorage.getItem('focusHistory');
      const parsedHistory = history && JSON.parse(history);
      history && setFocusHistory(parsedHistory)
    } catch(e) {
      console.log('load focus history error:', e)
    }
  };

  useEffect(() => {
    loadFocusHistory();
  }, [])

  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory])

  useEffect(() => {
    if (focusSubject) {
      setFocusHistory([...focusHistory, focusSubject])
    }
  }, [focusSubject])

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer 
          focusSubject={focusSubject}
          onTimerEnd={() => {
              addFocusHistoryStatus(focusSubject, STATUS.COMPLETE)
              setFocusSubject(null)
          }}
          onClearSubject={() => {
              addFocusHistoryStatus(focusSubject, STATUS.FAIL)
              setFocusSubject(null)
          }}
        />
      ) : (
        <View style={{flex: 0.5}}> 
          <Focus addSubject={setFocusSubject} />
          <FocusHistory focusHistory={focusHistory} clearHistory={clearHistory}/>
        </View>
      )}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? spacing.xxl : spacing.xxxl,
    backgroundColor: colors.darkBlue,
  },
});
