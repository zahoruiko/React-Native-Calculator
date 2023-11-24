import React from 'react';
import { StyleSheet, View } from 'react-native';

const KeyboardWrapper = ({ children, isLandscape }) => {
  const styles = isLandscape ? landscapeStyles : portraitStyles;
  return (
    <View style={styles.keyboardWrapper}>
      { children }
    </View>
  )
};

export default KeyboardWrapper;

const portraitStyles = StyleSheet.create({
  keyboardWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: 5,
  }
});

const landscapeStyles = StyleSheet.create({
  keyboardWrapper: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 15,
    marginRight: 5,
    paddingTop: 30,
    paddingBottom: 10,
  }
});
