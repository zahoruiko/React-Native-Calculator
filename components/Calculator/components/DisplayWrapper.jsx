import React from 'react';
import { StyleSheet, View } from 'react-native';

const DisplayWrapper = ({children}) => {
  return (
    <View style={styles.displayWrapper}>{children}</View>
  )
}

export default DisplayWrapper;

const styles = StyleSheet.create({
  displayWrapper: {
    flex: 1,
    flexDirection: 'column',
  }
});
