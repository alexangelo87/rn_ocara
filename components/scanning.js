import React, { Component } from 'react';
import LottieView from 'lottie-react-native';
import { View, StyleSheet} from 'react-native';

export default class Scanning extends Component {
    render() {
        return (
            <LottieView source={require('../animations/face-scanning.json')} autoPlay loop />
        );
    }
};




