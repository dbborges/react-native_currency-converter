import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Conversor from './src/conversor';

class App extends Component{
  render() {
    return(
      <View style={styles.container}>
        <Conversor currencyOne="USD" currencyTwo="BRL" />
        <Conversor currencyOne="EUR" currencyTwo="BRL" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default App;
