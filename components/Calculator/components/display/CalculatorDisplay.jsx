import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { commaSeparateNumber } from '../utils/numbersFormatter';

const CalculatorDisplay = ({ data }) => {
  let displayContent = '';
  if (data.length > 0) displayContent = data.join('');
  return (
    <View style={styles.displayWrapper}>
      <Text style={styles.displayText}>{commaSeparateNumber(displayContent)}</Text>
    </View>
  );
};

export default CalculatorDisplay;

const styles = StyleSheet.create({
  displayWrapper: {
    height: 38,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#EDBB99',
    borderColor: '#EDBB99',
    borderWidth: 1,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    paddingRight: 10,
    paddingLeft: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    padding: 3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  displayText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'ZenDots-Regular',
    lineHeight: 30,
    color: '#555',
  }
});
