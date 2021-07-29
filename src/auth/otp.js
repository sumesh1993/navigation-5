import React from 'react';
import {View, Text, Button} from 'react-native';

export default class Otp extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>OTP Page</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}
