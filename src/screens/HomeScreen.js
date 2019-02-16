import React, { Component } from 'react';
import { Text } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Home',
  };

  render() {
    return (
      <Text>Home Screen</Text>
    );
  }
}
