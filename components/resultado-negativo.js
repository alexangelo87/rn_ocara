import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Naocara from './naocara';

export default class ResultadoNegativo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 3}}>
            <Naocara />
        </View>
        <View style={{flex: 1}}>
          <Text style={{color: 'white', fontSize: 25, margin: 16, textAlign: 'center'}}>
            Infelizmente você NÃO é o cara.
          </Text>
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
    },
  });