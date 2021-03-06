import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, Alert } from 'react-native';
import { Container, Button, Content, Form, Item, Input, Text } from 'native-base';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class RatingWidget extends Component {
  
  constructor(props){
    super(props);
    
  }
  
  render() {
    const {disabled,onUpdate, defaultValue , count, half, starSize} = this.props;
    return (
      <View style={{alignItems:'center'}}>
        {disabled? <Text></Text>: <Text style={styles.textStyle}>Rate the condition of the book.</Text>}
        <Stars
          disabled={disabled}
          update={(val)=>{onUpdate(val)}}
          default={defaultValue}
          count={count}
          half={half}
          starSize={starSize}
          fullStar={<Icon size={starSize} name={'star'} style={[styles.myStarStyle]}/>}
          emptyStar={<Icon size={starSize} name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
          halfStar={<Icon  size={starSize} name={'star-half'} style={[styles.myStarStyle]}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: '#e0f2f1',
  },
  textStyle: {
    color: '#e0f2f1'
  }
});

RatingWidget.propTypes = {
};

RatingWidget.navigationOptions = {
  title: null,
  headerLeft: null,
  header:null
};