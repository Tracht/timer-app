import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';

export const TimingButtons = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="15 s" 
          onPress={() => onChangeTime(0.25)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="45 s" 
          onPress={() => onChangeTime(0.75)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="90 s" 
          onPress={() => onChangeTime(1.15)} />
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
