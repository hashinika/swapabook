import React, { Component } from 'react';
import { Image, StyleSheet, width } from 'react-native';
import { Button, Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import LocationSearch from './LocationSearch';
import DateTimePicker from './DateTimePicker';

export default class SwapComponent extends Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    
    return (
      
      <Container>
          <View style={styles.LocationComponentStyle}>
            <LocationSearch />
          </View>
          <View>
            <DateTimePicker/>
          </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  LocationComponentStyle: {
    height: 300
  },
});

SwapComponent.propTypes = {
};

SwapComponent.navigationOptions = ({navigation}) => {
  return  {
    title: 'Setup a meeting'
  }
};
