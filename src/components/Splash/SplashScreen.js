import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';

export default class SplashScreen extends Component {
  
  constructor(props){
    super(props);
  }
  
  componentDidMount(){
    this.props.testLogin(2);
  }
  
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button>
            <Text>Click Me! {this.props.testValue}</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  logo: {
    alignSelf: 'center'
  },
});