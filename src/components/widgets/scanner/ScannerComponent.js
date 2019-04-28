import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { View, Icon, Text } from 'native-base';
import { RNCamera } from 'react-native-camera';

export default class ScannerComponent extends Component {
  
  constructor(props){
    super(props);
    this.state ={
      barcode: ''
    }
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
  
  render() {
    return (
      <View style={styles.container}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
              console.log(barcodes);
              this.props.fetchBookDetails(barcodes[0].data);
              this.setState({
                barcode:barcodes[0].data
              });
            }}
          />
          <View style={styles.detailView}>
            <TouchableOpacity
              onPress={this.takePicture.bind(this)}
              style = {styles.capture}
            >
              <Icon name="qr-scanner" style={styles.iconStyle} />
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#004d40',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  detailView: {
    marginTop: 25
  },
  textHeader: {
    color: '#e0f2f1',
    fontSize: 30,
    fontFamily: 'Billabong'
  },
  headerView: {
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }
});

ScannerComponent.navigationOptions = ({navigation}) => {
  return  {
    headerTitle: <View style={ styles.headerView }><Text style={ styles.textHeader }>Scan the book</Text></View>,
    headerStyle: {
      backgroundColor: '#004d40',
      color:'#e0f2f1',
    }
  }
};
