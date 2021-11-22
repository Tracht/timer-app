import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { spacing, fontSize } from '../../utils/sizes';
import { colors } from '../../utils/colors';
import { RoundedButton } from '../../components/RoundedButton';


const HistoryItem = ({ item }) => {
  return (
    <Text style={styles.historyItem(item.status)}>
      {item.subject}
    </Text>
  )
}

export const FocusHistory = ({ focusHistory, clearHistory }) => {

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        
        <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
          {!!focusHistory.length && (
            <>
              <Text style={styles.title}> Things we have focused on </Text>
              <FlatList
                style={styles.flatList}
                contentContainerStyle={{ flex: 1, alignItems: 'center'}}
                data={focusHistory}
                renderItem={HistoryItem}
              />
              <View style={styles.clearContainer}>
                <RoundedButton size={75} title="Clear" onPress={() => clearHistory()} />
              </View>
            </>
          )}
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: spacing.md,
    justifyContent: 'center',
  },
  historyItem: (status) => ({
    color: status === 0 ? 'red' : 'green', 
    fontSize: fontSize.md,
    marginLeft: spacing.md,
  }), 
  title: {
    color: colors.white,
    fontSize: fontSize.lg,
    alignItems: 'center',
  }, 
  flatList: {
    flex: 0.5, 
    padding: spacing.md,
  },
  clearContainer: {
    alignItems: 'center',
    padding: spacing.md,
  }
})
