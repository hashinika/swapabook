import React, { Component } from 'react';
import { Image } from 'react-native';
import { Button, Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';


export default class NavButton extends Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    const {navigation} = this.props;
    return (
      <View >
        <Button onPress={() => navigation.dispatch({ type: 'ScannerComponent' })}>
          <Text>Scan</Text>
        </Button>
      </View>
    );
  }
}

NavButton.propTypes = {
};

NavButton.navigationOptions = {
  header: null
};
