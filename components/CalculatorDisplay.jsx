import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CalculatorDisplay = ({ data }) => {
  let displayContent = '';
  if (data.length > 0) displayContent = data.join('');

  return (
    <View style={styles.displayWrapper}>
      <Text style={styles.displayText}>{displayContent}</Text>
    </View>
  );
};

export default CalculatorDisplay;

const styles = StyleSheet.create({
  displayWrapper: {
    margin: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAE5D3',
    borderColor: '#EDBB99',
    borderWidth: 1,
    height: 15,
    justifyContent: 'flex-end',
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginLeft: 15,
    marginRight: 20,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4
  },
  displayText: {
    fontSize: 26,
    fontWeight: 'bold',
  }
});
