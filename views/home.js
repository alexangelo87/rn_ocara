import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import Question from  '../components/question'

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (  
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <View style={{flex:1}}>
          <View style={{flex:3}}>
            <Question />
          </View>
          <View style={{flex:1}}>
            <Text style={styles.text}>Você é o cara?</Text>
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("Camera")}>
            <Text style={{color:'white', alignSelf: 'center', padding: 10, fontSize: 20}}>VERIFICAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 25,
  },
  button: {
    margin: 16,
    flex:0,
    backgroundColor: '#29b6f6',
    borderRadius: 20
  },
});
