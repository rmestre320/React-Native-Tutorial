import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Cat = props => {
  const name = "Bucky"
  return <Text>Hello, I am your cat {props.name}!</Text>;
};

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + ' ' + secondName + ' ' + thirdName;
};


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>App.js has already been opened</Text>
      <StatusBar style="auto" />
      <Cat name="Bucky"/>
      <Cat/>
      <Text>{getFullName('Ron','Don','Bon')}</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
