import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { Focus } from './src/features/focus/focus';
import { FocusHistory } from './src/features/focus/focusHistory';
import { Timer } from './src/features/timer/timer';
import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';

const STATUS = {
  COMPLETE: 1, 
  FAIL: 0, 
}

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);
  
  const addFocusHistoryState = (subject, status) => {
    setFocusHistory([...focusHistory, { subject, status }])
  }

  const onClear = () => {
    // things to do 
    return;
  }

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
              addFocusHistoryState(focusSubject, STATUS.COMPLETE)
              setFocusSubject(null)
          }}
          onClearSubject={() => {
              addFocusHistoryState(focusSubject, STATUS.FAIL)
              setFocusSubject(null)
          }}
        />
      ) : (
        <> 
        <Focus addSubject={setFocusSubject} />
        <FocusHistory focusHistory={focusHistory} onClear={onClear}/>
        </>
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
