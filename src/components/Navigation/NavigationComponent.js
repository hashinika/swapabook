import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, Alert } from 'react-native';
import { Container, Text } from 'native-base';


export default class NavigationComponent extends Component {
  
  constructor(props){
    super(props);
    
  }

  render() {
    return (
      <Container style={styles.gridMain}>
        <Text>
          NavBar
        </Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  gridMain: {
    backgroundColor: '#263238',
  },
});
