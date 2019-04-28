import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, Alert, TouchableOpacity } from 'react-native';
import { Icon, Button, Text } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class HomeHeaderComponent extends Component {
  
  constructor(props){
    super(props);
    
  }

  render() {
    return (
      <View style={styles.gridMain}>
        <Grid >
          <Row>
            <Col id='1' style={styles.columnStyle} size={1}>
              <TouchableOpacity style={styles.btnStyle}
                                onPress={() => {this.props.navigate('User')}}
              >
                <Icon name="person" style={styles.iconStyle} />
              </TouchableOpacity>
            </Col>
            <Col style={styles.gridStyle} size={5}>
              <Text style={styles.textStyle}>
                Swapbook</Text>
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
    backgroundColor: '#004d40',
  },
  gridStyle: {
    paddingTop:25,
    paddingBottom: 10,
    justifyContent: 'center'
  },
  textStyle: {
    color: '#e0f2f1',
    fontSize: 30,
    fontFamily: 'Billabong'
  },
  iconStyle: {
    color: '#e0f2f1'
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
  iconLogoStyle: {
    color: '#e0f2f1',
    fontSize: 20
  },
});
