import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Button from './Button';
import ButtonsWrapper from './ButtonsWrapper';
import CalculationsList from './CalculationsList';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorTitle from './CalculatorTitle';
import CalculatorUIWrapper from './CalculatorUIWrapper';

function CalculatorUI({
  calculationsListData,
  inputField,
  handleClearAllButton,
  handleClearLastButton,
  handlePercentButton,
  handleNumberButton,
  handleOperationButton,
  handlePlusMinusButton
}) {
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
    color: '#A93226'
  }
});
