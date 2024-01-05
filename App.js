import { useState, Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button, Alert } from 'react-native';

const Cat = props => {
  const name = "Bucky"
  return <Text>Hello, I am your cat {props.name}!</Text>;
};

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + ' ' + secondName + ' ' + thirdName;
};
const BasicButton = props => {
  //props.title = props.title ? "Press Me" : "a";
  return <Button
    onPress={() => {
      console.log('You tapped the button!');
    }}
    title={props.title}
    
/>
};

const AlertButton = props => {
  return <Button
    onPress={() => {
      Alert.alert('Why did you press me??');
    }}
    title = {props.title}
  
  />
};

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>App.js has already been opened</Text>
      <StatusBar style="auto" />
      <Cat name="Bucky"/>
      <Text>{getFullName('Ron','Don','Bon')}</Text>
      <PizzaTranslator/>
      <BasicButton title="Press me"/>
      <AlertButton title="Don't press me"/>
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
