import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const Button = ({ handler, buttonTitle, optionalStyle }) => {
  return (
    <TouchableHighlight onPress={handler} underlayColor="#FEF5E7">
      <View style={styles.buttonTextWrapper}>
        <Text style={[styles.buttonTitle, optionalStyle]}>{buttonTitle}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonTextWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFE1B3',
    margin: 5,
    width: 75,
    height: 68,
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
    fontFamily: 'ZenDots-Regular',
  }
});
