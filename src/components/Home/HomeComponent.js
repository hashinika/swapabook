import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, Alert } from 'react-native';
import { Container} from 'native-base';
import SwipeComponent from '../Swipe/SwipeComponentLink';
import Navigation from '../Navigation/NavigationComponentLink'


export default class HomeComponent extends Component {
  
  constructor(props){
    super(props);
    
  }

  render() {
    return (
      <Container>
        <SwipeComponent/>
        <Navigation/>
      </Container>
    );
  }
}

HomeComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

HomeComponent.navigationOptions = {
  title: null,
  headerLeft: null,
  header:null
};