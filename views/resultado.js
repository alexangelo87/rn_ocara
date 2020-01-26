import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';
import Scanning from '../components/scanning';

export default class Resultado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      resultado: 'carregando...',
    };
  }

  componentDidMount() {
    let data = this.props.navigation.getParam('data');
    axios
      .post('https://af3b2085.ngrok.io', {
        foto: data.base64,
      })
      .then(response => {
        this.setState({loading: false});
        if (response.length) {
          this.setState({resultado: 'Você NÃO é o cara'});
        } else {
          this.setState({resultado: 'Você é o cara'});
        }
      })
      .catch(err => {
        this.setState({resultado: 'Erro'});
        console.log(err);
      });
  }
  render() {
    if (this.state.loading) {
      return (
        <View style={{flex: 1, backgroundColor: 'black'}}>
          <Scanning />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={{color:'white', fontSize: 25}}>{this.state.resultado}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignContent: 'center',
    color: 'white'
  },
});
