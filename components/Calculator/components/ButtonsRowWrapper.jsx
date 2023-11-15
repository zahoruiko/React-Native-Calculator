import React from 'react';
import { StyleSheet, View } from 'react-native';

const ButtonsRowWrapper = ({ children }) => {
  return (
    <View style={styles.buttonsRowWrapper}>
      { children }
    </View>
  )
};

export default ButtonsRowWrapper;

const styles = StyleSheet.create({
  buttonsRowWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
