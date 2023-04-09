import { Text, Pressable, StyleSheet } from 'react-native';

const StyledButton = ({text, handler}) => {
  return (
    <Pressable style={styles.button} onPress={() => handler(text)}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 35,
    borderColor: '#ccc',
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default StyledButton;
