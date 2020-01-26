import React, { Component } from 'react';
import LottieView from 'lottie-react-native';

export default class Question extends Component {
    render() {
        return (
            <LottieView source={require('../animations/question.json')} autoPlay loop />
        );
    }
};