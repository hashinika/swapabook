import React, { Component } from 'react';
import { Image, StyleSheet, width, ListView  } from 'react-native';
import { View, Header, Item, Input, Icon, Button, Text } from 'native-base';

export default class LocationSearch extends Component {
  
  constructor(props){
    super(props);
    this.state ={
      searchValue: ''
    }
  }
  
  render() {
    
    return (
      <View style={styles.containerStyle}>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search"  value={this.state.searchValue} onChangeText={(text) => {this.setState({searchValue: text})}}/>
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <View>
          <Text>Hello</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#d5d5d5',
    height: '100%'
  },
  headerStyle: {
    fontWeight: '100',
    color: 'red'
  }
});