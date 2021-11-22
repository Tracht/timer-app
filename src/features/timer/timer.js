import React, { useState } from 'react';
import { View, StyleSheet, Text, Vibration, Platform } from 'react-native';
import { ProgressBar } from 'react-native-paper';

import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';
import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';
import { Timing } from './timing';

export const Timer = ({ focusSubject, onTimerEnd, onClearSubject }) => {
  const DEFAULT_TIME = 0.5; // seconds
  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [hasStarted, setStart] = useState(false);
  const [progress, setProgress] = useState(0);

  const vibrate = () => {
    if (Platform.OS === 'ios') {
      // its not in the docs, but the way to get around iOS restrictions
      // is to repeat the interval several times
      // since it is restricted to 400ms.
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate(1000, true); // (milliseconds, repeat?)
    }
  };

  const changeTime = (min) => {
    setMinutes(min);
    setProgress(0);
    setStart(false);
  };

  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(0);
    setStart(false);
    onTimerEnd();
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.countdown}>
          <Countdown
            minutes={minutes}
            isPaused={!hasStarted}
            setProgress={setProgress}
            onEnd={onEnd}
          />
        </View>
      </View>

      <View style={styles.taskWrapper}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject} </Text>
      </View>

      <ProgressBar
        progress={progress}
        style={{ height: 10 }}
        color={colors.periwinkle}
      />

      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={changeTime} />
      </View>

      <View style={styles.buttonWrapper}>
        {hasStarted ? (
          <RoundedButton title="pause" onPress={() => setStart(false)} />
        ) : (
          <RoundedButton title="start" onPress={() => setStart(true)} />
        )}
      </View>
      <View style={styles.clearSubject}>
        <RoundedButton
            size={50}
            title="clear"
            onPress={() => onClearSubject()}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  subContainer: {
    paddingTop: spacing.xxl,
  },
  taskWrapper: {
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xxl,
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.white,
  },
  title: {
    color: colors.white,
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  countdown: {
    marginTop: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    // flex: 0.3,
    flexDirection: 'row',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearSubject: {
    marginBottom: spacing.lg,
    paddingLeft: spacing.lg,
  },
});
