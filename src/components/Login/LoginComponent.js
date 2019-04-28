import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, Alert , TouchableOpacity, Modal} from 'react-native';
import { Container, Icon, Content, Form, Item, Input, Text, Spinner } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import {setStorageValue, getStorageValue, removeStorageValue} from "../../_helpers/storage.helpers";

const PRIVACY_POLICY = "What is Lorem Ipsum?\n" +
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export default class LoginComponent extends Component {
  
  constructor(props){
    super(props);
    this.state ={
      username: '',
      password: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  
  componentDidMount(){
    getStorageValue('AUTH_TOKEN').then((value) => {
      if (value && value !== ''){
        this.props.navigateToHome();
      }
    });
  }
  
  handleLogin () {
    const {username, password} = this.state;
    this.props.login({username, password});
  }
  render() {
    const {navigation, errorMessage} = this.props;
    
    return (
      <Container>
        <Grid style={styles.gridMain}>
          <Row></Row>
          <Row style={styles.rowOne} size={1}>
            <Col style={styles.textColStyle}>
              <View style={styles.textViewStyle}>
                <Text style={styles.textLogoStyle}>
                  Swapb
                  <Icon name="book" style={styles.iconStyle} />
                  k
                </Text>
              </View>
            </Col>
          </Row>
          <Row style={styles.rowTwo} size={2}>
            <Content>
              <Form style={styles.rowTwoContent}>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputContainer}>
                    <Item>
                      <Input style={styles.inputStyle} placeholder="Username"
                             onChangeText={(text) => {this.setState({username: text})}}
                      />
                    </Item>
                  </View>
                  <View style={styles.inputContainer}>
                    <Item>
                      <Input
                        style={styles.inputStyle}
                        onChangeText={(text) => {this.setState({password: text})}}
                        secureTextEntry={true} placeholder="Password" />
                    </Item>
                  </View>
                  <View>
                    <Text style={{color: 'white'}}
                          onPress={() => Alert.alert(
                              'Privacy Policy',
                              PRIVACY_POLICY,
                              [
                                {text: 'OK', onPress: () => console.log('OK Pressed')},
                              ],
                              {cancelable: false},
                          )}>
                      Privacy Policy
                    </Text>
                  </View>
                  <View style={styles.alertContainer}>
                    {errorMessage && <Text style={styles.inputStyle}>{errorMessage} !</Text>}
                  </View>
                </View>
              </Form>
            </Content>
          </Row>
          <Row style={styles.rowThree} size={1}>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonBox}>
                <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => this.handleLogin()}
                >
                  <Text style={styles.buttonTextStyle}> Log In </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonStyle, styles.signupButton]}
                        onPress={() => this.props.navigate('Signup')}
                >
                  <Text style={styles.buttonTextStyle}> Sign Up </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Row>
        </Grid>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  gridMain: {
    backgroundColor: '#004d40',
  },
  rowOne:{
  },
  rowTwo: {
  },
  rowThree: {
  },
  textColStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textLogoStyle: {
    color: '#e0f2f1',
    fontSize: 60,
    fontFamily: 'Billabong'
  },
  textViewStyle: {
    marginTop: 70,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    padding:20
  },
  logo: {
    margin: 30,
    width:300,
    alignItems: 'center',
    justifyContent:'center',
  },
  inputContainer: {
    margin: 10,
    alignItems: 'center',
    justifyContent:'center',
  },
  alertContainer: {
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
    width: 300,
  },
  rowTwoContent: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonBox: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputStyle: {
    height: 45,
    paddingLeft:20,
    paddingRight:10,
    color: '#e0f2f1'
  },
  buttonContainer: {
    justifyContent: 'center',
    width: '100%',
  },
  buttonStyle: {
    height: 50,
    width: 300,
    marginTop: 5,
    marginBottom: 5,
    borderColor: '#e0f2f1',
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'transparent'
  },
  signupButton: {
    backgroundColor: '#8e2323',
  },
  buttonTextStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
    color: '#e0f2f1',
    fontSize: 20,
  },
  iconStyle: {
    color: '#e0f2f1'
  },
});

LoginComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

LoginComponent.navigationOptions = {
  title: null,
  headerLeft: null,
  header:null
};