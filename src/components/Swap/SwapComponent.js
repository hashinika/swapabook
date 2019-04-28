import React, { Component } from 'react';
import { Image, StyleSheet, width } from 'react-native';
import { Button, Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import LocationSearch from './LocationSearch';
import DateTimePickerComponent from './DateTimePickerComponent';
import Summary from './Summary';

export default class SwapComponent extends Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      
      <View style={styles.headerStyle}>
          <View>
            <LocationSearch
              setSelectedLocation={this.props.setSelectedLocation}
              swapDetails={this.props.swapDetails}
              fetchLocations={this.props.fetchLocations} />
          </View>
          <View>
            <DateTimePickerComponent setSelectedDateTime={this.props.setSelectedDateTime}/>
          </View>
          <View >
              <Summary
                meetingInit= {this.props.matchBookData.meetingInit}
                setMeetup={this.props.setMeetup}
                swapDetails={this.props.swapDetails}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textHeader: {
    color: '#e0f2f1',
    fontSize: 30,
    fontFamily: 'Billabong'
  },
  headerView: {
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  headerStyle: {
    backgroundColor: '#004d40',
    color:'#e0f2f1',
  },
});

SwapComponent.propTypes = {
};

SwapComponent.navigationOptions = ({navigation}) => {
  return  {
    headerTitle: <View style={ styles.headerView }><Text style={ styles.textHeader }>Setup meeting</Text></View>,
    headerStyle: {
      backgroundColor: '#004d40',
      color:'#e0f2f1',
    },
  }
};
