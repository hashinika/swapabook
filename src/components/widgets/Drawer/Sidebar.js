import React, { Component } from 'react';
import { Image, StyleSheet, width } from 'react-native';
import { Button, Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';



export default class Sidebar extends Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <View>
        <Text>
          This is a sidebar
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    left: 0,
    top: 0,
    opacity: 1,
    backgroundColor: 'black',
    width: '100%',
    height: '100%'
  }
});