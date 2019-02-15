import React, { Component } from 'react';
import { Image, StyleSheet, width, ListView  } from 'react-native';
import { View, Header, Item, Input, Icon, Button, Text } from 'native-base';

export default class DateTimePicker extends Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    
    return (
      <View style={styles.containerStyle}>
        <View>
          <Text>DateTimePicker</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#00d511',
    height: '100%'
  },
  headerStyle: {
    fontWeight: '100',
    color: 'red'
  }
});