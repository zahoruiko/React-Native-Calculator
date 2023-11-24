import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { commaSeparateNumber } from '../utils/numbersFormatter';

const MemoryInfo = ({ data='' }) => {
  return (
    <View style={styles.displayWrapper}>
      <View>
        <Text style={styles.displayText}>Mem.:</Text>  
      </View>
      <View>
        <Text style={styles.displayText}>{commaSeparateNumber(data)}</Text>  
      </View>
    </View>
  );
};

export default MemoryInfo;

const styles = StyleSheet.create({
  displayWrapper: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fDeBc9',
    borderColor: '#EDBB99',
    borderWidth: 1,
    borderRadius: 15,
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
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'ZenDots-Regular',
    lineHeight: 20,
    color: '#55b',
  }
});
