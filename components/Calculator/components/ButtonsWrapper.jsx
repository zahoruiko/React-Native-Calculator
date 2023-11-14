import React from 'react';
import { StyleSheet, View } from 'react-native';

const ButtonsWrapper = ({ children }) => {
  return (
    <View style={styles.buttonsWrapper}>
      { children }
    </View>
  )
};

export default ButtonsWrapper;

const styles = StyleSheet.create({
  buttonsWrapper: {
    height: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 0,
    paddingBottom: 0,
  }
});
