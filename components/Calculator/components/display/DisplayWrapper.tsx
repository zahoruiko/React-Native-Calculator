import React from 'react';
import { StyleSheet, View } from 'react-native';

type TDisplayWrapperProps = {
  children: JSX.Element|JSX.Element[];
}

const DisplayWrapper: React.FC<TDisplayWrapperProps> = ({ children }) => {
  return <View style={styles.displayWrapper}>{children}</View>;
};

export default DisplayWrapper;

const styles = StyleSheet.create({
  displayWrapper: {
    flex: 1,
    flexDirection: 'column'
  }
});
