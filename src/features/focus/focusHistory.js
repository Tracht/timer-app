import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { spacing, fontSize } from '../../utils/sizes';
import { colors } from '../../utils/colors';
import { RoundedButton } from '../../components/RoundedButton';


const HistoryItem = ({ item, index}) => {
  return (
    <>
    <Text style={styles.historyItem(item.status)}>
      {JSON.stringify(item)}
    </Text>
    </>
  )
}

export const FocusHistory = ({ focusHistory, onClear }) => {
  
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0.6 }}>
        <Text style={styles.title}> Things we have focused on: </Text>
        {!!focusHistory.length && (
          <FlatList 
            style={{ flex: 1, alignItems: 'left' }} 
            data={focusHistory}
            renderItem={HistoryItem} 
          />
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? 'red' : 'green', 
    fontSize: fontSize.md,
  }), 
  title: {
    color: 'white',
    fontSize: fontSize.lg,
  }
})
