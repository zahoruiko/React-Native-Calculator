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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDBB99',
    borderColor: '#EDBB99',
    borderWidth: 1,
    height: 30,
    justifyContent: 'flex-end',
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginBottom: 15,
    marginLeft: 5,
    marginRight: 5,

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
    color: '#555',
  }
});
