import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Button, Content, Form, Item, Input, Text } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class LoginComponent extends Component {
  
  constructor(props){
    super(props);
    this.state ={
      barcode: ''
    }
  }
  
  componentDidMount(){
  
  }
  
  render() {
    return (
      <Container>
        <Grid style={styles.gridMain}>
          <Row style={styles.rowOne} size={1}>
            <View style={styles.imageContainer}>
            <Image style={styles.logo}
                   source={require('../../assets/img/logo.png')}/>
            </View>
            
          </Row>
          <Row style={styles.rowTwo} size={2}>
            <Content>
              <Form>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputContainer}>
                    <Item rounded>
                      <Input style={styles.inputStyle} placeholder="Username" />
                    </Item>
                  </View>
                  <View style={styles.inputContainer}>
                    <Item rounded>
                      <Input
                        style={styles.inputStyle}
                        secureTextEntry={true} placeholder="Password" />
                    </Item>
                  </View>
                </View>
              </Form>
            </Content>
          </Row>
          <Row style={styles.rowThree} size={1}>
            <View style={styles.buttonContainer}>
              <Button style={[styles.buttonStyle]}>
                <Text style={styles.buttonTextStyle}> Log In </Text>
              </Button>
              <Button style={[styles.buttonStyle, {backgroundColor: 'red'}]}>
                <Text style={styles.buttonTextStyle}> Sign Up </Text>
              </Button>
            </View>
          </Row>
        </Grid>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  gridMain: {
    backgroundColor: '#263238',
  },
  rowOne:{
  },
  rowTwo: {
  },
  rowThree: {
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    margin: 50,
    width:null,
    alignItems: 'center',
    justifyContent:'center',
  },
  inputContainer: {
    margin: 10,
    alignItems: 'center',
    justifyContent:'center',
    
  },
  inputWrapper: {
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  inputStyle: {
    height: 45,
    paddingLeft:20,
    paddingRight:10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  buttonStyle: {
    height: 50,
    width: '100%',
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 0,
  },
  buttonTextStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
  }
});

LoginComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

LoginComponent.navigationOptions = {
  title: null,
  headerLeft: null,
  header:null
};