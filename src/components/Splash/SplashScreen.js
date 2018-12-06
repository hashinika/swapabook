import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class SplashScreen extends Component {
  
  constructor(props){
    super(props);
  }
  
  componentDidMount(){
    this.props.testLogin(2);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Test {this.props.testValue}
        </Text>
      </View>
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