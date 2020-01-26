import React, { Component } from 'react';
import LottieView from 'lottie-react-native';

export default class Ocara extends Component {
    render() {
        return (
            <LottieView source={require('../animations/o-cara.json')} autoPlay loop />
        );
    }
};