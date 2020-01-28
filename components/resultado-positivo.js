import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ocara from './ocara';

export default class ResultadoPositivo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 3}}>
          <Ocara />
        </View>
        <View style={{flex: 1}}>
          <Text style={{color: 'white', fontSize: 25, margin: 16, textAlign: 'center'}}>Parabéns! Você é o cara!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignContent: 'center',
    color: 'white',
    justifyContent: 'center',
  },
});
