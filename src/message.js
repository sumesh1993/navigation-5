import React from 'react';
import {View, Text, Button} from 'react-native';

export default class Message extends React.Component {
  render() {
    const {navigation, route} = this.props;
    const {itemId} = route.params;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>
          Tab 2 {'->'} {itemId}
        </Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}
