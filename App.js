import Header from './screens/Header';
import CalculatorScreen from './screens/CalculatorScreen';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useFonts} from 'expo-font';

const App = () => {
  const [fontsLoaded] = useFonts({
    'LeagueSpartan-Regular': require('./assets/fonts/League_Spartan/static/LeagueSpartan-Regular.ttf'),
    'LeagueSpartan-Bold': require('./assets/fonts/League_Spartan/static/LeagueSpartan-Bold.ttf'),
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <CalculatorScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(222, 26%, 31%)', //Very dark desaturated blue
  }
});

export default App;
