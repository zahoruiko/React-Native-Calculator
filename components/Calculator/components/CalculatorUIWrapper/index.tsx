import React from 'react';
import { StyleSheet, View } from 'react-native';
import { isPhone } from '../utils/device';

type TCalculatorUIWrapperProps = {
  children: JSX.Element|JSX.Element[];
  isLandscape: boolean;
}

const CalculatorUIWrapper: React.FC<TCalculatorUIWrapperProps> = ({ children, isLandscape }) => {
  let styles;
  if (isPhone()) {
    styles = isLandscape ? phoneLandscapeStyles : phonePortraitStyles;
  } else {
    styles = isLandscape ? tabletLandscapeStyles : tabletPortraitStyles;
  }
  return <View style={styles.calculatorUIWrapper}>{children}</View>;
};

export default CalculatorUIWrapper;

const phonePortraitStyles = StyleSheet.create({
  calculatorUIWrapper: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    borderColor: 'lightgray',
    borderWidth: 2,
    backgroundColor: '#FEF5E7',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4
  }
});

const phoneLandscapeStyles = StyleSheet.create({
  calculatorUIWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: '100%',
    width: '100%',
    borderColor: 'lightgray',
    borderWidth: 2,
    backgroundColor: '#FEF5E7',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4
  }
});

const tabletPortraitStyles = StyleSheet.create({
  calculatorUIWrapper: {
    flexDirection: 'column',
    height: 650,
    width: 380,
    borderColor: 'lightgray',
    borderWidth: 2,
    backgroundColor: '#FEF5E7',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4
  }
});

const tabletLandscapeStyles = StyleSheet.create({
  calculatorUIWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 380,
    width: 650,
    borderColor: 'lightgray',
    borderWidth: 2,
    backgroundColor: '#FEF5E7',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4
  }
});
