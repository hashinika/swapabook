import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

export default class ScannerComponent extends Component {
  
  constructor(props){
    super(props);
  }
  
  componentDidMount(){
    this.props.testLogin(2);
  }
  
  render() {
    return (
      <Container>
        <View>
          <Text>Scanner Component</Text>
        </View>
      </Container>
    );
  }
}

