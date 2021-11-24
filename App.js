import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Focus } from './src/features/focus/focus';
import { FocusHistory } from './src/features/focus/focusHistory';
import { Timer } from './src/features/timer/Timer';
import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';
import uuid from 'react-native-uuid';
import { saveFocusHistory } from './src/api/saveFocusHistory';
import { loadFocusHistory } from './src/api/loadFocusHistory';
import { STATUS } from './src/constants';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);
  
  var testUUID = uuid.v1();

  const addFocusHistoryStatus = (subject, status) => {
    setFocusHistory([...focusHistory, {
       key: String(testUUID), // essential for FlatList
       subject, 
       status
    }])
  }

  const clearHistory = () => {
    setFocusHistory([]);
  }

  useEffect(() => {
    loadFocusHistory('focusHistory');
  }, [])

  useEffect(() => {
    saveFocusHistory('focusHistory', focusHistory);
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
        <View style={{flex: 1}}> 
      
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
