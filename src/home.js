import React from 'react';
import {View, Text, Button} from 'react-native';

export default class Home extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Tab 2</Text>
        <Button
          title="Go to Details"
          onPress={() =>
            navigation.navigate('Detail', {
              itemId: 86,
              otherParam: 'anything you want here',
            })
          }
        />
      </View>
    );
  }
}
