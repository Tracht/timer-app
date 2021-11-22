import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { spacing, fontSize } from '../utils/sizes';

const minutesToMillis = (min) => min * 1000 * 60;

export const Countdown = ({ minutes = 1, isPaused, setProgress, onEnd }) => {
  const [millis, setMillis] = useState(minutesToMillis(minutes));

  const interval = React.useRef(null);

  const countdown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current);
        onEnd();
        return time;
      } else {
        const timeLeft = time - 1000;
        // setProgress(timeLeft / minutesToMillis(minutes));
        const timeToCompletion = 1 - (time / minutesToMillis(minutes));
        setProgress(1 - (time / minutesToMillis(minutes)))
        return timeLeft;
      }
    });
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }
    interval.current = setInterval(countdown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  useEffect(() => {
    setMillis(minutesToMillis(minutes))
  }, [minutes])

  const min = Math.floor(millis / 1000 / 60) % 60;
  const secs = Math.floor(millis / 1000) % 60;
  const formatTime = (num) => (num < 10 ? `0${num}` : num);

  return (
    <Text style={styles.text}>
      {formatTime(min)}:{formatTime(secs)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSize.xxxl,
    fontWeight: 'bold',
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: 'rgba(94, 132, 226, 0.3)',
  },
});
