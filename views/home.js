import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Question from  '../components/question'

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
          <View style={{flex:2}}>
            <Question />
          </View>
          <View style={{flex:1}}>
            <Text style={styles.text}>Você é o cara?</Text>
          </View>
        </View>
        <View style={styles.button}>
          <Button
            title="Verificar"
            color="purple"
            onPress={() => this.props.navigation.navigate("Camera")}
          />
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
    flex:1
  },
});
