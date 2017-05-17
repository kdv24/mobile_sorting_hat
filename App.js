import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pictures from './Pictures.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>The Sorting Hat!!!!!</Text>
        <Text style={styles.subheader}>by Abeer and Kelly</Text>
        <Text style={styles.subheader}>... so it's awesome</Text>
        <Pictures/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0099CC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 36,
    color: '#fff'
  },
  subheader: {
    fontSize: 24,
    color: '#fff'
  }
});
