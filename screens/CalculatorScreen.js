import { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import StyledButton from '../components/StyledButton';

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
    <View style={styles.container} testID='calculator-screen'>
      <TextInput style={styles.result} value={display} editable={false} testID='calculator-input' />
      <View style={styles.row}>
        <StyledButton text='1' handler={handleNumberPress} />
        <StyledButton text='2' handler={handleNumberPress} />
        <StyledButton text='3' handler={handleNumberPress} />
        <StyledButton text='+' handler={handleOperatorPress} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  result: {
    width: '80%',
    height: 80,
    fontSize: 30,
    textAlign: 'right',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 10,
  },
});

export default CalculatorScreen;
