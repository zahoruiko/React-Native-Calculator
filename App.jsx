import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CalculatorUIWrapper from './components/CalculatorUIWrapper';
import CalculatorDisplay from './components/CalculatorDisplay';
import ButtonsWrapper from './components/ButtonsWrapper';
import Button from './components/Button';
import CalculatorTitle from './components/CalculatorTitle';
import CalculationsList from './components/CalculationsList';

function App() {
  const [inputField, setInputField] = useState([]);
  const [accumulator, setAccumulator] = useState(0);
  const [operation, setOperation] = useState('');
  const [calculationsListData, setCalculationsListData] = useState([]);

  const handleClearAllButton = () => {
    setInputField([]);
    setAccumulator(0);
    setOperation('');
    setCalculationsListData([]);
  };

  const handleClearLastButton = () => {
    inputField.pop();
    setInputField([...inputField]);
  };

  const handlePlusMinusButton = () => {
    setInputField(prevValue => {
      if (prevValue.length > 0 && +prevValue.join('') !== 0) {
        if (prevValue[0] !== '-') {
          prevValue.unshift('-');
        } else {
          prevValue.shift();
        }
      }
      setAccumulator(+prevValue.join(''));
      return [...prevValue];
    });
  };

  const handlePercentButton = () => {
    setAccumulator(prevValue => {
      setInputField(prevValue2 => {
        return [...String((prevValue / 100) * +prevValue2.join('')).split('')];
      });
      return prevValue;
    });
  };

  const handleNumberButton = value => {
    const inputValue = inputField.join('');
    if (inputValue === 'Infinity' || inputValue === 'NaN') {
      setInputField(() => {
        setAccumulator(0);
        return [];
      });
    }

    if (operation === '=') {
      setOperation(() => {
        setInputField(() => {
          setAccumulator(0);
          return [];
        });
        return '';
      });
      setCalculationsListData([...calculationsListData, '---------------']);
      return;
    }

    if (value === '.' && !inputField.includes('.')) {
      if (value === '.' && inputField.length === 0) {
        setInputField([...inputField, 0, value]);
      } else {
        setInputField([...inputField, value]);
      }
    } else if (value !== '.') {
      if (inputField.length > 0 && value === '0') {
        setInputField([...inputField, value]);
      } else if (value !== '0') {
        if (inputField.length === 0) {
          setInputField([value]);
        } else {
          if (inputField[0] === '0') {
            setInputField([value]);
          } else {
            setInputField([...inputField, value]);
          }
        }
      }
    }
  };

  const handleOperationButton = value => {
    if (operation === '=') {
      setCalculationsListData([...calculationsListData, value]);
    } else {
      setCalculationsListData([...calculationsListData, inputField.join(''), value]);
    }
    if (operation === '') {
      setAccumulator(+inputField.join(''));
      setInputField([]);
      setOperation(value);
    } else {
      if (operation === '+') {
        setAccumulator(prevState => prevState + +inputField.join(''));
      } else if (operation === '-') {
        setAccumulator(prevState => prevState - +inputField.join(''));
      } else if (operation === 'x') {
        setAccumulator(prevState => prevState * +inputField.join(''));
      } else if (operation === '/') {
        setAccumulator(prevState => prevState / +inputField.join(''));
      }
      setOperation(value);
      setInputField([]);
    }
    if (value === '=') {
      setOperation('=');
      setAccumulator(prevValue => {
        setInputField(() => {
          setCalculationsListData([...calculationsListData, inputField.join(''), value, prevValue]);
          return String(prevValue).split('');
        });
        return prevValue;
      });
    } else {
      if (operation === '=') {
        setCalculationsListData([...calculationsListData, value]);
      } else {
        setCalculationsListData([...calculationsListData, inputField.join(''), value]);
      }
    }
  };

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <CalculatorUIWrapper>
        <CalculatorTitle />
        <CalculationsList data={calculationsListData} />
        <CalculatorDisplay data={inputField} />
        <ButtonsWrapper>
          <Button handler={() => handleClearAllButton()} buttonTitle={'C'} optionalStyle={styles.clearButton} />
          <Button handler={() => handleClearLastButton()} buttonTitle={'BS'} optionalStyle={styles.clearButton} />
          <Button handler={() => handlePercentButton('%')} buttonTitle={'%'} optionalStyle={styles.operationButton} />
          <Button handler={() => handleOperationButton('+')} buttonTitle={'+'} optionalStyle={styles.operationButton} />

          <Button handler={() => handleNumberButton('7')} buttonTitle={'7'} optionalStyle={styles.numberButton} />
          <Button handler={() => handleNumberButton('8')} buttonTitle={'8'} optionalStyle={styles.numberButton} />
          <Button handler={() => handleNumberButton('9')} buttonTitle={'9'} optionalStyle={styles.numberButton} />
          <Button handler={() => handleOperationButton('-')} buttonTitle={'-'} optionalStyle={styles.operationButton} />

          <Button handler={() => handleNumberButton('4')} buttonTitle={'4'} optionalStyle={styles.numberButton} />
          <Button handler={() => handleNumberButton('5')} buttonTitle={'5'} optionalStyle={styles.numberButton} />
          <Button handler={() => handleNumberButton('6')} buttonTitle={'6'} optionalStyle={styles.numberButton} />
          <Button handler={() => handleOperationButton('x')} buttonTitle={'x'} optionalStyle={styles.operationButton} />

          <Button handler={() => handleNumberButton('1')} buttonTitle={'1'} optionalStyle={styles.numberButton} />
          <Button handler={() => handleNumberButton('2')} buttonTitle={'2'} optionalStyle={styles.numberButton} />
          <Button handler={() => handleNumberButton('3')} buttonTitle={'3'} optionalStyle={styles.numberButton} />
          <Button handler={() => handleOperationButton('/')} buttonTitle={'/'} optionalStyle={styles.operationButton} />

          <Button handler={() => handleNumberButton('0')} buttonTitle={'0'} optionalStyle={styles.numberButton} />
          <Button handler={() => handleNumberButton('.')} buttonTitle={'.'} optionalStyle={styles.numberButton} />
          <Button
            handler={() => handlePlusMinusButton('+/-')}
            buttonTitle={'+/-'}
            optionalStyle={styles.operationButton}
          />
          <Button handler={() => handleOperationButton('=')} buttonTitle={'='} optionalStyle={styles.operationButton} />
        </ButtonsWrapper>
      </CalculatorUIWrapper>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  numberButton: {
    color: '#566573'
  },
  operationButton: {
    color: '#2E86C1'
  },
  clearButton: {
    color: '#A93226'
  }
});