import React from 'react';
import { StyleSheet, View } from 'react-native';

const CalculatorUIWrapper = ({ children }) => {
  return <View style={styles.calculatorUIWrapper}>{children}</View>;
};

export default CalculatorUIWrapper;

const styles = StyleSheet.create({
  calculatorUIWrapper: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: 645,
    width: 380,
    borderColor: 'lightgray',
    borderWidth: 2,
    backgroundColor: '#FEF5E7',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4
  }
});
