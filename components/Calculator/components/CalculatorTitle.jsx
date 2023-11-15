import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CalculatorTitle = ({ isLandscape }) => {
  const styles = isLandscape ? landscapeStyles : portraitStyles;
  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.titleText}>OZ Calculator</Text>
    </View>
  );
};

export default CalculatorTitle;

const portraitStyles = StyleSheet.create({
  titleWrapper: {
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

const landscapeStyles = StyleSheet.create({
  titleWrapper: {
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
