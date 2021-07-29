import React from 'react';
import {View, Text, Button} from 'react-native';

export default class Feed extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Login Page</Text>
        <Button title="Go to Otp" onPress={() => navigation.navigate('Otp')} />
      </View>
    );
  }
}
