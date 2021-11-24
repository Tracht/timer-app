import React, { useRef } from 'react';
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
  let flatList = useRef(null);

  return (
        <SafeAreaView style={styles.safeArea}>
          {!!focusHistory.length && (
            <>
              <Text style={styles.title}> Things we have focused on </Text>
              <FlatList
                ref={flatList}
                style={styles.flatList}
                contentContainerStyle={styles.contentContainerStyle}
                data={focusHistory}
                renderItem={HistoryItem}
                keyExtractor={item => item.key}
                inverted={false} // inverses direction of scroll
                showsVerticalScrollIndicator={false} // makes the scroll invisible
                onContentSizeChange={()=> flatList.current.scrollToEnd()}
              />
              <View style={styles.clearContainer}>
                <RoundedButton size={75} title="Clear" onPress={() => clearHistory()} />
              </View>
            </>
          )}
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status === 0 ? 'red' : 'green', 
    fontSize: fontSize.md,
    marginLeft: spacing.md,
  }),
  safeArea: {
    flex: 1,
    alignItems: 'center'
  },
  flatList: {
    flex: 1, 
    margin: spacing.md,
  },
  title: {
    color: colors.white,
    fontSize: fontSize.lg,
    alignItems: 'center',
  },
  contentContainerStyle: {
    // flex: 1, // if you use flex you can't scroll
    alignItems: 'center',
    alignContent: 'flex-start',
    alignSelf: 'flex-end',
    flexDirection: 'column'
  },
  clearContainer: {
    alignItems: 'center',
    margin: spacing.lg,
  },
})
