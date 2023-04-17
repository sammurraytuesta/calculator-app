import { useState } from 'react';
import { StyleSheet, View, TextInput} from 'react-native';
import {StyledButton, StyledButtonBlue, StyledButtonLongBlue, StyledButtonLongRed} from '../components/StyledButton';

const CalculatorScreen = () => {
  const [display, setDisplay] = useState('0');
  const [memory, setMemory] = useState('');

  // triggered when a number is pressed
  const handleNumberPress = (number) => {
    if (display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
    setMemory(memory + number);
  };

  // triggered when an operator is pressed
  const handleOperatorPress = (operator) => {
    setMemory(memory + operator);
    setDisplay(memory + operator);
  };

  // triggered when the equal sign is pressed
  const handleEqualPress = () => {
    const res = eval(memory);
    setDisplay(res + '');
    setMemory(res + '');
  };

  // triggered when the clear button is pressed
  const handleClearPress = () => {
    setDisplay('0');
    setMemory('');
  };

  return (
    <View style={styles.subContainer} testID='calculator-screen'>
      <TextInput style={styles.result} value={display} editable={false} testID='calculator-input' />
      <View style={styles.buttonWrapper}>
        <View style={styles.row}>
          <StyledButton text='1' handler={handleNumberPress} />
          <StyledButton text='2' handler={handleNumberPress} />
          <StyledButton text='3' handler={handleNumberPress} />
          <StyledButtonBlue text='+' handler={handleOperatorPress} />
        </View>
        <View style={styles.row}>
          <StyledButton text='4' handler={handleNumberPress} />
          <StyledButton text='5' handler={handleNumberPress} />
          <StyledButton text='6' handler={handleNumberPress} />
          <StyledButton text='-' handler={handleOperatorPress} />
        </View>
        <View style={styles.row}>
          <StyledButton text='7' handler={handleNumberPress} />
          <StyledButton text='8' handler={handleNumberPress} />
          <StyledButton text='9' handler={handleNumberPress} />
          <StyledButton text='*' handler={handleOperatorPress} />
        </View>
        <View style={styles.row}>
          <StyledButton text='C' handler={handleClearPress} />
          <StyledButton text='0' handler={handleNumberPress} />
          <StyledButton text='=' handler={handleEqualPress} />
          <StyledButton text='/' handler={handleOperatorPress} />
        </View>
        <View style={styles.row}>
          <StyledButtonLongBlue text='C' handler={handleClearPress} />
          <StyledButtonLongRed text='=' handler={handleEqualPress} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    backgroundColor: 'hsl(223, 31%, 20%)', //Very dark desaturated blue
    borderRadius: 5,
    padding: 20,
    paddingBottom: 10,
    width: '80%',
  },
  result: {
    width: '80%',
    height: 80,
    fontSize: 30,
    color: 'hsl(0, 0%, 100%)', //White
    textAlign: 'right',
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor: 'hsl(224, 36%, 15%)', //Very dark desaturated blue
    borderRadius: 5,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
});

export default CalculatorScreen;
