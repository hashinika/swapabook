import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, Alert } from 'react-native';
import { Container, Button, Content, Form, Item, Input, Text } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import TimerMixin from 'react-timer-mixin';

export default class AlertBox extends Component {
  
  constructor(props){
    super(props);
    this.state ={
      isShow:true
    };
  }
  
  componentDidMount(){
    // setTimeout(() => {
    //   this.setState({
    //     isShow: false
    //   })
    // }, 2000);
  }
  
  render() {
    const {message} =this.props;
    const {isShow} = this.state;
    return (
        <Container style={styles.alert}>
          <View style={styles.messageBox}>
          <Text style={styles.messageText}>{message}</Text>
          </View>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  alert: {
    backgroundColor: '#ff0619',
    textAlign: 'center',
    alignContent:'center'
  },
  messageBox: {
    padding: 10
  },
  messageText: {
    color: '#fff',
  }
});

AlertBox.propTypes = {
  navigation: PropTypes.object.isRequired,
};

AlertBox.navigationOptions = {
  title: null,
  headerLeft: null,
  header:null
};