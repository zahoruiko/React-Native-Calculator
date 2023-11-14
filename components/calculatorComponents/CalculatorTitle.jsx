import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CalculatorTitle = () => {
  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.titleText}>OZ Calculator</Text>
    </View>
  );
};

export default CalculatorTitle;

const styles = StyleSheet.create({
  titleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 5,
  },
  titleText: {
    fontSize: 16,
    fontFamily: 'ZenDots-Regular',
    color: '#555'
  }
});
