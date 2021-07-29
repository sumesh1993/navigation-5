import React from 'react';
import {View, Text, Button, ActivityIndicator} from 'react-native';

export default class Otp extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Splash Screen</Text>
        <ActivityIndicator animating size="small" />
      </View>
    );
  }
}
