import React from 'react';
import {View, Text, Button} from 'react-native';

export default class Detail extends React.Component {
  render() {
    const {navigation, route} = this.props;
    const {itemId, otherParam} = route.params;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>This is the detail page</Text>
        <Text>Item id {itemId}</Text>
        <Text>Other Params {otherParam}</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}
