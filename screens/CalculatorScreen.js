import { useState, useRef} from 'react';
import { StyleSheet, View, TextInput} from 'react-native';
import {StyledButton, StyledButtonBlue, StyledButtonLongBlue, StyledButtonLongRed} from '../components/StyledButton';

const CalculatorScreen = () => {
  const [display, setDisplay] = useState('0');
  const [memory, setMemory] = useState('');
  const [fontSize, setFontSize] = useState(45);

  const handleTextInput = (text) => {
    if (text.length > 15) {
      // Prevent more than 15 characters from being entered
      return false;
    } else if (text.length > 12) {
      // Shrink the text when 12 characters are entered
      setFontSize(30); // Set the font size to 30
    } else {
      setFontSize(45); // Set the font size back to 45
    }
    return true;
  };

  // triggered when a number is pressed
  const handleNumberPress = (number) => {
    if (handleTextInput(memory + number)){
      if (display === '0') {
        setDisplay(number);
      } else {
        setDisplay(display + number);
      }
      setMemory(memory + number);
    }
  };

  const handleDelete = () => {
    if (handleTextInput(memory.slice(0, -1))){
      if(memory.length <= 1){
        handleClearPress();
      } else {
        var newMem = memory.slice(0, -1);
        setDisplay(newMem);
        setMemory(newMem);
      }
    }
  };

  /* ========== CREDIT ==========
   * "if (/[- + * /]$/.test(memory))" achieved by help from ChatGPT 
   * both the regular expression and use of .test function to check for duplicate operator use were recommended by ChatGPT
   * */

  // triggered when an operator is pressed
  const handleOperatorPress = (operator) => {
    if (handleTextInput(memory + operator)) {
      if (operator === 'x') {
        operator = '*';
      }
      var newMemory;
      if (/[-+*/]$/.test(memory)) { // Check if the last character is an operator
        newMemory = memory.slice(0, -1) + operator; // Remove the last operator and add the new one
      } else {
        newMemory = memory + operator;
      }
      setMemory(newMemory);
      setDisplay(newMemory);
    }
  };

  // triggered when an decimal is pressed
  const handleDecimalPress = (decimal) => {
    if (handleTextInput(memory + decimal)){
      var mathWithTrailDec = memory + decimal + '0';
      var mathWithLeadDec = memory + '0' + decimal + '0';
      if (isValidMath(mathWithTrailDec)){
        setMemory(memory + decimal);
        setDisplay(memory + decimal);
      }
      else if (isValidMath(mathWithLeadDec)){
        setMemory(memory + '0' + decimal);
        setDisplay(memory + '0' + decimal);
      } 
    }
  };

  // triggered when the equal sign is pressed
  const handleEqualPress = () => {
    if (isValidMath(memory)){
      const res = eval(memory);
      if (res === Infinity){
        setDisplay('Error');
        setMemory('Error');
      } else {
        setDisplay(res + '');
        setMemory(res + '');
      }
    } else {
      setDisplay('Error');
      setMemory('Error');
    }
  };

  // triggered when the clear button is pressed
  const handleClearPress = () => {
    setDisplay('0');
    setMemory('');
    //set font size back to 45
    setFontSize(45);
  };

  /* ========== CREDIT ==========
   * Regular expressions and logic in isValidMath and isValidNumber generated by ChatGPT to aid with decimal handling 
  */

  const isValidMath = (s) => {
    // define the regular expression pattern
    //regular expression for valid math equation without trailing decimal
    //const pattern = /^\s*\d+(\.\d+)?\s*([+\-*/]\s*\d+(\.\d+)?\s*)*$/;

    //modified regular expression to account for accidental decimal at the end of an expression
    //e.g. 6.2 + 5. would be the same as 6.2 + 5 which evaluates to 11.2 
    const pattern = /^\s*\d+(\.\d+)?\s*([+\-*/]\s*\d+(\.\d+)?\s*)*\.?\s*$/;
  
    // match the string against the pattern
    const match = s.match(pattern);
  
    // return true if the string matches the pattern, false otherwise
    return Boolean(match);
  }

  return (
    <View style={styles.subContainer} testID='calculator-screen'>
      <TextInput 
        style={[styles.result, { fontSize: fontSize }]} // Pass the font size as a style prop
        value={display} 
        onChangeText={handleTextInput}
        testID='calculator-input' 
      />
      <View style={styles.buttonWrapper}>
        <View style={styles.row}>
          <StyledButton text='7' handler={handleNumberPress} />
          <StyledButton text='8' handler={handleNumberPress} />
          <StyledButton text='9' handler={handleNumberPress} />
          <StyledButtonBlue text='DEL' handler={handleDelete}/>
        </View>
        <View style={styles.row}>
          <StyledButton text='4' handler={handleNumberPress} />
          <StyledButton text='5' handler={handleNumberPress} />
          <StyledButton text='6' handler={handleNumberPress} />
          <StyledButton text='+' handler={handleOperatorPress} />
        </View>
        <View style={styles.row}>
          <StyledButton text='1' handler={handleNumberPress} />
          <StyledButton text='2' handler={handleNumberPress} />
          <StyledButton text='3' handler={handleNumberPress} />
          <StyledButton text='-' handler={handleOperatorPress} />
        </View>
        <View style={styles.row}>
          <StyledButton text='.' handler={handleDecimalPress} />
          <StyledButton text='0' handler={handleNumberPress} />
          <StyledButton text='/' handler={handleOperatorPress} />
          <StyledButton text='x' handler={handleOperatorPress} />
        </View>
        <View style={styles.row}>
          <StyledButtonLongBlue text='RESET' handler={handleClearPress} />
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
    color: 'hsl(0, 0%, 100%)', //White
    textAlign: 'right',
    fontFamily: 'LeagueSpartan-Bold',
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
