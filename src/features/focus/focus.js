import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { spacing, fontSize } from '../../utils/sizes';
import { colors } from '../../utils/colors';


export const Focus = ({ addSubject }) => {
  const [tempItem, setTempItem] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>
          What would you like to focus on?
        </Text>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            // Intermediary step, must hit the return button
            onSubmitEditing={({ nativeEvent }) => {
              setTempItem(nativeEvent.text);
            }}
          />
          <RoundedButton
            onPress={() => addSubject(tempItem)}
            size={50}
            title="+"
          />
        </View>

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
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSize.lg,
  },
  textInput: {
    flex: 1,
    marginRight: spacing.md,
  },
  inputContainer: {
    paddingTop: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
