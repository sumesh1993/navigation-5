import React, {createRef} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ActionSheet from 'react-native-actions-sheet';

const options = {
  mediaType: 'photo',
  cameraType: 'back',
  includeBase64: false,
};
const actionSheetRef = createRef();
export default class Feed extends React.Component {
  handleCameraPress() {
    launchCamera(options, response => {
      console.log('launchCamera', response);
      actionSheetRef.current?.hide();
    });
  }

  handleGalleryPress() {
    launchImageLibrary(options, response => {
      console.log('launchImageLibrary', response);
      actionSheetRef.current?.hide();
    });
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Tab 1</Text>
        <TouchableOpacity
          onPress={() => {
            console.log('actionSheetRef', actionSheetRef);
            actionSheetRef.current?.show();
          }}>
          <Text>Open ActionSheet</Text>
        </TouchableOpacity>
        <ActionSheet ref={actionSheetRef}>
          <View style={{height: 100}}>
            <Button
              title="Open Camera"
              onPress={() => this.handleCameraPress()}
            />
            <Button
              title="Open Gallery"
              onPress={() => this.handleGalleryPress()}
            />
          </View>
        </ActionSheet>
      </View>
    );
  }
}
