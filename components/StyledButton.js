import { Text, Pressable, StyleSheet } from 'react-native';

const StyledButton = ({text, handler}) => {
  return (
    <Pressable style={[styles.button, styles.short, styles.white]} onPress={() => handler(text)}>
      <Text style={styles.buttonTextBlue}>{text}</Text>
    </Pressable>
  );
};

const StyledButtonLong = ({text, handler}) => {
  return (
    <Pressable style={[styles.button, styles.long, styles.white]} onPress={() => handler(text)}>
      <Text style={styles.buttonTextBlue}>{text}</Text>
    </Pressable>
  );
};

const StyledButtonBlue = ({text, handler}) => {
  return (
    <Pressable style={[styles.button, styles.short, styles.blue]} onPress={() => handler(text)}>
      <Text style={styles.buttonTextWhite}>{text}</Text>
    </Pressable>
  );
};

const StyledButtonLongBlue = ({text, handler}) => {
  return (
    <Pressable style={[styles.button, styles.long, styles.blue]} onPress={() => handler(text)}>
      <Text style={styles.buttonTextWhite}>{text}</Text>
    </Pressable>
  );
};

const StyledButtonRed = ({text, handler}) => {
  return (
    <Pressable style={[styles.button, styles.short, styles.red]} onPress={() => handler(text)}>
      <Text style={styles.buttonTextWhite}>{text}</Text>
    </Pressable>
  );
};

const StyledButtonLongRed = ({text, handler}) => {
  return (
    <Pressable style={[styles.button, styles.long, styles.red]} onPress={() => handler(text)}>
      <Text style={styles.buttonTextWhite}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderBottomWidth : 4,
  },
  short: {
    width: 65,
    height: 50,
  },
  long: {
    width: 140,
    height: 50,
  },
  white: {
    backgroundColor: 'hsl(30, 25%, 89%)', //Light grayish orange
    borderColor: 'hsl(28, 16%, 65%)', //Grayish orange 
    borderBottomColor : 'hsl(28, 16%, 65%)', //Grayish orange
  },
  blue: {
    backgroundColor: 'hsl(225, 21%, 49%)', //Desaturated dark blue
    borderColor: 'hsl(224, 28%, 35%)', //Desaturated dark blue
    borderBottomColor : 'hsl(224, 28%, 35%)', //Desaturated dark blue
  },
  red: {
    backgroundColor: 'hsl(6, 63%, 50%)', //Red
    borderColor: 'hsl(6, 70%, 34%)', //Dark red
    borderBottomColor : 'hsl(6, 70%, 34%)', //Dark red
  },
  buttonTextBlue: {
    color: 'hsl(221, 14%, 31%)', //Very dark grayish blue
    fontSize: 25,
    fontWeight: 'bold',
    //fontFamily: 'LeagueSpartan-Bold',
  },
  buttonTextWhite: {
    color: 'hsl(0, 0%, 100%)', //White
    fontSize: 20,
    fontWeight: 'bold',
    //fontFamily: 'LeagueSpartan-Bold',
  }
});

export {StyledButton, StyledButtonLong, StyledButtonBlue, StyledButtonLongBlue, StyledButtonRed, StyledButtonLongRed};
export default StyledButton;
