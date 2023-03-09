import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import Voice from '@react-native-voice/voice';
import Main from './src/views/main';

export default function App() {
  const [started, setStarded] = useState(true);
  const [results, setResults] = useState([]);

  useEffect(()=> {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return ()=> {
      Voice.destroy().then(Voice.removeAllListeners);
    }
  },[])

  const startSpeechToText = async () => {
    await Voice.start("pt-BR");
    setStarded(true);
  }

  const stopSpeechToText = async () => {
    await Voice.stop();
    setStarded(false);
  }

  const onSpeechError = (err:any) => {
    console.log(err);
  }

  const onSpeechResults = (result:any) => {
    // Alternative 
    const results = result.value;

    const changedResult = results.join(" ");
    const convertToArray = changedResult.split(" ");

    setResults(convertToArray);

    // Alternative Secondary setResult(result.value)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Main 
        speechs={results} 
        startSpeechToText={startSpeechToText} 
        stopSpeechToText={stopSpeechToText}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#8968CD'
  },
});
