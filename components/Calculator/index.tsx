import React, { useState } from 'react';
import { commaSeparateNumber } from './components/utils/numbersFormatter';
import CalculatorUI from './components/CalculatorUI';

function Calculator() {
  const [inputField, setInputField] = useState<string[]>([]);
  const [accumulator, setAccumulator] = useState<number>(0);
  const [operation, setOperation] = useState<string>('');
  const [calculationsListData, setCalculationsListData] = useState<string[]>([]);
  const [calculatorMemory, setCalculatorMemory] = useState<number>(0);

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
      return [...prevValue];
    });

    if (operation === '=') {
      if (inputField.length !== 0) {
        setCalculationsListData([...calculationsListData, commaSeparateNumber(+inputField.join(''))]);
      }
    }
  };

  const handlePercentButton = () => {
    setAccumulator(prevValue => {
      setInputField(prevValue2 => {
        return [...String((prevValue / 100) * +prevValue2.join('')).split('')];
      });
      return prevValue;
    });
  };

  const handleNumberButton = (value: string) => {
    const inputValue = inputField.join('');
    if (inputValue === 'Infinity' || inputValue === 'NaN') {
      setInputField(() => {
        setAccumulator(0);
        return [];
      });
    }

    if (operation === '=') {
      setOperation(() => {
        setAccumulator(0);
        return '';
      });
      setCalculationsListData([...calculationsListData, '---------------']);
    }

    if (inputField.length <= 19) {
      if (value === '.' && !inputField.includes('.')) {
        if (value === '.' && inputField.length === 0) {
          setInputField(['0', value]);
        } else {
          setInputField([...inputField, value]);
        }
      } else if (value !== '.') {
        if (inputField.length === 0 && value === '0') {
          setInputField([value]);
        } else if (inputField.length > 0 && value === '0') {
          if (
            (inputField.length === 1 && inputField[0] === '0') ||
            (inputField.length === 2 && inputField[0] === '-' && inputField[1] === '0')
          ) {
            setInputField([value]);
          } else {
            setInputField([...inputField, value]);
          }
        } else if (value !== '0') {
          if (inputField.length === 0) {
            setInputField([value]);
          } else {
            if (inputField[0] === '0') {
              if (
                (inputField[0] === '0' && inputField[1] === '.') ||
                (inputField[0] === '-' && inputField[1] === '0' && inputField[2] === '.')
              ) {
                setInputField([...inputField, value]);
              } else {
                setInputField([value]);
              }
            } else {
              setInputField([...inputField, value]);
            }
          }
        }
      }
    }
  };

  const handleOperationButton = (value: string) => {
    if (operation === '=') {
      setCalculationsListData([...calculationsListData, value]);
    } else {
      setCalculationsListData([...calculationsListData, commaSeparateNumber(+inputField.join('')), value]);
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
          if (accumulator !== +inputField.join('')) {
            if (inputField.length > 0) {
              setCalculationsListData([
                ...calculationsListData,
                commaSeparateNumber(+inputField.join('')),
                value,
                commaSeparateNumber(prevValue)
              ]);
            } else {
              setCalculationsListData([
                ...calculationsListData,
                value,
                commaSeparateNumber(prevValue)
              ]);
            }
          } else {
            setCalculationsListData([
              ...calculationsListData,
              commaSeparateNumber(accumulator),
              value,
              commaSeparateNumber(prevValue)
            ]);
          }
          return [];
        });
        return prevValue;
      });
    } else {
      if (operation === '=') {
        setCalculationsListData([...calculationsListData, value]);
      } else {
        setCalculationsListData([...calculationsListData, commaSeparateNumber(+inputField.join('')), value]);
      }
    }
  };

  const handleOperationWithMemory = (memoryOperation: string) => {
    switch (memoryOperation) {
      case 'MC': {
        setCalculatorMemory(0);
      }; break;
      case 'MR': {
        if (operation === '=') {
          setOperation(() => {
            setAccumulator(0);
            return '';
          });
          setCalculationsListData([...calculationsListData, '---------------']);
        } 
        setInputField([...String(calculatorMemory).split('')]);
      }; break;
      case 'M+': {
        if (inputField.length > 0) {
          setCalculatorMemory(prevValue => prevValue + +inputField.join(''));
        } else {
          setCalculatorMemory(prevValue => prevValue + accumulator);
        }
      }; break;
      case 'M-': {
        if (inputField.length > 0) {
          setCalculatorMemory(prevValue => prevValue - +inputField.join(''));
        } else {
          setCalculatorMemory(prevValue => prevValue - accumulator);
        }
      }; break;
      default: {
        return;
      };
    }
  }

  return (
    <CalculatorUI
      calculationsListData={calculationsListData}
      inputField={inputField}
      handleClearAllButton={handleClearAllButton}
      handleClearLastButton={handleClearLastButton}
      handleNumberButton={handleNumberButton}
      handleOperationButton={handleOperationButton}
      handlePercentButton={handlePercentButton}
      handlePlusMinusButton={handlePlusMinusButton}
      handleOperationWithMemory={handleOperationWithMemory}
      memoryInfoData={calculatorMemory}
    />
  );
}

export default Calculator;
