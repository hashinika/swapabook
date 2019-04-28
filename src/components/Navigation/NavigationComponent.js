import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, Alert, TouchableOpacity } from 'react-native';
import { Icon, Button, Text } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class NavigationComponent extends Component {
  
  constructor(props){
    super(props);
    
  }

  render() {
    return (
      <View style={styles.gridMain}>
        <Grid>
          <Row>
            <Col id='1' style={styles.columnStyle}>
              <TouchableOpacity
                onPress={() => {this.props.navigate('CollectionComponent')}}
                style={styles.btnStyle}>
                <Icon name="grid" style={styles.iconStyle} />
              </TouchableOpacity>
            </Col>
            <Col id='2' style={styles.columnStyle}>
              <TouchableOpacity
                style={styles.btnStyle}>
                <Icon name="home" style={styles.iconActiveStyle} />
              </TouchableOpacity>
            </Col>
            <Col id='3' style={styles.columnStyle}>
              <TouchableOpacity
                onPress={() => {this.props.navigate('ScannerComponent')}}
                style={styles.btnStyle}>
                <Icon name="qr-scanner" style={styles.iconStyle} />
              </TouchableOpacity>
            </Col>
            <Col id='4' style={styles.columnStyle}>
              <TouchableOpacity
                onPress={() => {this.props.navigate('MeetingComponent')}}
                style={styles.btnStyle}>
                <Icon name="calendar" style={styles.iconStyle} />
              </TouchableOpacity>
            </Col>
          </Row>
        </Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gridMain: {
    height: 60,
    backgroundColor: '#263238',
  },
  iconStyle: {
    color: '#e0f2f1'
  },
  iconActiveStyle: {
    color: '#b6c8c7'
  },
  columnStyle: {
    backgroundColor: '#004d40',
  },
  btnStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
