import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, Alert } from 'react-native';
import NavigationBar from 'react-native-navbar';

export default function App() {
  // this is a hook. It takes two arguments 
  const [outputText, changeOutputText] = useState('This is the Initial State ');

 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{outputText}</Text>
      <View style={styles.button}>
        <Button 
          color="black"
          title="1688"
          onPress={() => changeOutputText('This is the changed state')}/>
        </View>
        <View style={styles.button}>
        <Button 
          color="black"
          title="1588"
          onPress={() => changeOutputText('This is the changed text')}/>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    color: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  text: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#FDCB43',
    borderRadius: 3,
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 25,
    paddingLeft: 25,
    marginTop: 20,
    width: 300
  }
});
// /Users/jameshotchkiss/Library/Android/sdk
