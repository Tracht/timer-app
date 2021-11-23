import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';

export const TimingButtons = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="3 s" 
          onPress={() => onChangeTime(0.05)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="5 s" 
          onPress={() => onChangeTime(0.083)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="10 s" 
          onPress={() => onChangeTime(0.166)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
