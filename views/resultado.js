import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';
import Scanning from '../components/scanning';
import ResultadoNegativo from '../components/resultado-negativo';
import ResultadoPositivo from '../components/resultado-positivo';

export default class Resultado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      resultado: null,
      erro: false
    };
  }

  componentDidMount() {
    let data = this.props.navigation.getParam('data');
    axios
      .post('https://api-ocara.herokuapp.com/', {
        foto: data.base64,
      })
      .then(response => {
        
        console.log(response.data)
        this.setState({loading: false});
        if (response.data.length > 0) {
          this.setState({resultado: <ResultadoNegativo />});
        } else {
          this.setState({resultado: <ResultadoPositivo />});
        }
      })
      .catch(err => {
        this.setState({loading: false});
        this.setState({erro: true});
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
    } else if(this.state.loading === false && this.state.erro === false) {
      return (
        this.state.resultado
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={{color:'white', fontSize: 25, margin:16}}>Não foi possível fazer a verificação, ente novamente.</Text>
        </View>
      );
    }
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignContent: 'center',
    color: 'white',
    justifyContent: 'center'
  },
});
