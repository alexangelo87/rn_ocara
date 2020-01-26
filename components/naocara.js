import React, { Component } from 'react';
import LottieView from 'lottie-react-native';

export default class Naocara extends Component {
    render() {
        return (
            <LottieView source={require('../animations/nao-cara.json')} autoPlay loop />
        );
    }
};