import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const Button = ({ handler, buttonTitle, optionalStyle, isLandscape }) => {
  const styles = isLandscape ? landscapeStyles : portraitStyles;
  return (
    <TouchableHighlight onPress={handler} underlayColor="#FEF5E7" style={styles.buttonStyle}>
      <View style={styles.buttonTextWrapper}>
        <Text style={[styles.buttonTitle, optionalStyle]}>{buttonTitle}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default Button;

const portraitStyles = StyleSheet.create({
  buttonStyle: {
    margin: 0,
    padding: 0,
    height: 50
  },
  buttonTextWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFE1B3',
    width: 75,
    height: '100%',
    borderWidth: 1,
    borderColor: '#EDBB99',
    borderRadius: 10,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3
  },
  buttonTitle: {
    fontSize: 24,
    fontWeight: '400',
    color: '#555',
    fontFamily: 'ZenDots-Regular'
  }
});

const landscapeStyles = StyleSheet.create({
  buttonStyle: {
    margin: 0,
    padding: 0,
    height: 50
  },
  buttonTextWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFE1B3',
    width: 65,
    height: '100%',
    borderWidth: 1,
    borderColor: '#EDBB99',
    borderRadius: 10,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3
  },
  buttonTitle: {
    fontSize: 24,
    fontWeight: '400',
    color: '#555',
    fontFamily: 'ZenDots-Regular'
  }
});
