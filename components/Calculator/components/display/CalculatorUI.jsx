import React, { useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import Button from '../keyboard/Button';
import ButtonsRowWrapper from '../keyboard/ButtonsRowWrapper';
import CalculationsList from './CalculationsList';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorTitle from '../CalculatorTitle';
import CalculatorUIWrapper from '../CalculatorUIWrapper';
import DisplayWrapper from './DisplayWrapper';
import KeyboardWrapper from '../keyboard/KeyboardWrapper';
import MemoryInfo from './MemoryInfo';

function CalculatorUI({
  calculationsListData,
  inputField,
  handleClearAllButton,
  handleClearLastButton,
  handleNumberButton,
  handleOperationButton,
  handlePercentButton,
  handlePlusMinusButton,
  handleOperationWithMemory,
  memoryInfoData
}) {
  const [isLandscape, setIsLandscape] = useState(false);

  const determineOrientation = () => {
    const { width, height } = Dimensions.get('window');
    if (width > height) {
      setIsLandscape(true);
    } else {
      setIsLandscape(false);
    }
  };

  return (
    <SafeAreaView style={styles.mainWrapper} onLayout={() => determineOrientation()}>
      <CalculatorUIWrapper isLandscape={isLandscape}>
        <DisplayWrapper>
          <CalculatorTitle isLandscape={isLandscape} />
          <MemoryInfo data={memoryInfoData} />
          <CalculationsList data={calculationsListData} />
          <CalculatorDisplay data={inputField} />
        </DisplayWrapper>
        <KeyboardWrapper isLandscape={isLandscape}>
          <ButtonsRowWrapper>
            <Button
              handler={() => handleOperationWithMemory('MC')}
              buttonTitle={'MC'}
              optionalStyle={styles.memoryButton}
              isLandscape={isLandscape}
            />
            <Button
              handler={() => handleOperationWithMemory('MR')}
              buttonTitle={'MR'}
              optionalStyle={styles.memoryButton}
              isLandscape={isLandscape}
            />
            <Button
              handler={() => handleOperationWithMemory('M+')}
              buttonTitle={'M+'}
              optionalStyle={styles.memoryButton}
              isLandscape={isLandscape}
            />
            <Button
              handler={() => handleOperationWithMemory('M-')}
              buttonTitle={'M-'}
              optionalStyle={styles.memoryButton}
              isLandscape={isLandscape}
            />
          </ButtonsRowWrapper>
          <ButtonsRowWrapper>
            <Button
              handler={() => handleClearAllButton()}
              buttonTitle={'C'}
              optionalStyle={styles.clearButton}
              isLandscape={isLandscape}
            />
            <Button
              handler={() => handleClearLastButton()}
              buttonTitle={'BS'}
              optionalStyle={styles.clearButton}
              isLandscape={isLandscape}
            />
            <Button
              handler={() => handlePercentButton('%')}
              buttonTitle={'%'}
              optionalStyle={styles.operationButton}
              isLandscape={isLandscape}
            />
            <Button
              handler={() => handleOperationButton('+')}
              buttonTitle={'+'}
              optionalStyle={styles.operationButton}
              isLandscape={isLandscape}
            />
          </ButtonsRowWrapper>
          <ButtonsRowWrapper>
            <Button
              handler={() => handleNumberButton('7')}
              buttonTitle={'7'}
              optionalStyle={styles.numberButton}
              isLandscape={isLandscape}
            />
            <Button
              handler={() => handleNumberButton('8')}
              buttonTitle={'8'}
              optionalStyle={styles.numberButton}
              isLandscape={isLandscape}
            />
            <Button
              handler={() => handleNumberButton('9')}
              buttonTitle={'9'}
              optionalStyle={styles.numberButton}
              isLandscape={isLandscape}
            />
            <Button
              handler={() => handleOperationButton('-')}
              buttonTitle={'-'}
              optionalStyle={styles.operationButton}
              isLandscape={isLandscape}
            />
          </ButtonsRowWrapper>
          <ButtonsRowWrapper>
            <Button
              handler={() => handleNumberButton('4')}
              buttonTitle={'4'}
              optionalStyle={styles.numberButton}
              isLandscape={isLandscape}
            />
            <Button
              handler={() => handleNumberButton('5')}
              buttonTitle={'5'}
              optionalStyle={styles.numberButton}
              isLandscape={isLandscape}
            />
            <Button
              handler={() => handleNumberButton('6')}
              buttonTitle={'6'}
              optionalStyle={styles.numberButton}
              isLandscape={isLandscape}
            />
            <Button
              handler={() => handleOperationButton('x')}
              buttonTitle={'x'}
              optionalStyle={styles.operationButton}
              isLandscape={isLandscape}
            />
          </ButtonsRowWrapper>

          <ButtonsRowWrapper>
            <Button
              handler={() => handleNumberButton('1')}
              buttonTitle={'1'}
              optionalStyle={styles.numberButton}
              isLandscape={isLandscape}
            />
            <Button
              handler={() => handleNumberButton('2')}
              buttonTitle={'2'}
              optionalStyle={styles.numberButton}
              isLandscape={isLandscape}
            />
            <Button
              handler={() => handleNumberButton('3')}
              buttonTitle={'3'}
              optionalStyle={styles.numberButton}
              isLandscape={isLandscape}
            />
            <Button
              handler={() => handleOperationButton('/')}
              buttonTitle={'/'}
              optionalStyle={styles.operationButton}
              isLandscape={isLandscape}
            />
          </ButtonsRowWrapper>
          <ButtonsRowWrapper>
            <Button
              handler={() => handleNumberButton('0')}
              buttonTitle={'0'}
              optionalStyle={styles.numberButton}
              isLandscape={isLandscape}
            />
            <Button
              handler={() => handleNumberButton('.')}
              buttonTitle={'.'}
              optionalStyle={styles.numberButton}
              isLandscape={isLandscape}
            />
            <Button
              handler={() => handlePlusMinusButton('+/-')}
              buttonTitle={'+/-'}
              optionalStyle={styles.operationButton}
              isLandscape={isLandscape}
            />
            <Button
              handler={() => handleOperationButton('=')}
              buttonTitle={'='}
              optionalStyle={styles.operationButton}
              isLandscape={isLandscape}
            />
          </ButtonsRowWrapper>
        </KeyboardWrapper>
      </CalculatorUIWrapper>
    </SafeAreaView>
  );
}

export default CalculatorUI;

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
    color: '#A93226',
    fontSize: 21
  },
  memoryButton: {
    color: 'darkorange',
    fontSize: 19
  }
});
