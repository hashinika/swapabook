import React, { Component } from 'react';
import { Image, StyleSheet, width, ListView, FlatList, TouchableWithoutFeedback   } from 'react-native';
import { View, Header, Item, Input, Icon, Button, Text, Content, List, ListItem, } from 'native-base';

import {getCurrentLocation} from '../../_helpers';

export default class LocationSearch extends Component {
  
  constructor(props){
    super(props);
    this.state ={
      searchValue: '',
      currentLocation: {},
      location:{}
    }
    
    this.handleSearch = this.handleSearch.bind(this);
    this.renderList = this.renderList.bind(this);
    this.onPressItem = this.onPressItem.bind(this);
  }
  
  handleSearch(searchValue) {
    this.setState({searchValue});
    
    if (searchValue && searchValue.length >3) {
      getCurrentLocation().then((position) => {
        console.log('HDV position:', position);
        this.setState({
          currentLocation: {
            latitude: position.latitude,
            longitude: position.longitude
          }
        });
  
        this.props.fetchLocations( {
          searchValue,
          position
        });
      });
      
      
    }
  }

  renderList(item) {
    return (
      <ListItem onPress= {() => this.onPressItem(item)}>
        <Text>{item.name}</Text>
      </ListItem>
    );
  }
  
  onPressItem(location) {
    
    if(location) {
      this.props.setSelectedLocation(location);
    }
    
  }
  
  render() {
    console.log('HDV swaps swapDetails :', this.props.swapDetails);
    const {locationList} = this.props.swapDetails;
    return (
      <View style={styles.containerStyle}>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search for a venue"  value={this.state.searchValue} onChangeText={(text) => this.handleSearch(text)}/>
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          {locationList
          && locationList.length>0 &&
          <FlatList
            data={locationList}
            renderItem={({item}) => this.renderList(item)}
          />
          }
          
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 350
  },
  headerStyle: {
    fontWeight: '100',
  }
});