import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, Alert , TouchableOpacity} from 'react-native';
import { Container, Label, Content, Form, Item, Input, Text } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import AlertBox from '../widgets/Alert/AlertBox';

export default class SignUpComponent extends Component {
  
  constructor(props){
    super(props);
    this.state ={
      name:'',
      username: '',
      password: '',
      passwordR: '',
      nameError: false,
      usernameError: false,
      pwordError: false,
      pwordRError: false,
      pwordMismatchError: false,
      customErrorMsg: ''
    };
    this.handleSignup = this.handleSignup.bind(this);
  }
  
  handleNameChange(value){
    if(value !== '') {
      this.setState({
        name: value,
        nameError: false
      })
    } else {
      this.setState({
        nameError: true
      })
    }
  }
  
  handleUsernameChange(value){
    if(value !== '') {
      this.setState({
        username: value,
        usernameError: false
      })
    } else {
      this.setState({
        usernameError: true
      })
    }
  }
  
  handlePasswordChange(value) {
    if(value !== '') {
      this.setState({
        password: value,
        pwordError: false
      })
    } else {
      this.setState({
        pwordError: true
      })
    }
  }
  
  handlePasswordRChange(value) {
    const {password, passwordR} = this.state;
    
    if(value !== '') {
      this.setState({
        passwordR: value,
        pwordRError: false
      })
    } else {
      this.setState({
        pwordRError: true
      })
    }
    
  }
  
  handleSignup () {
    const { name,  username, password, passwordR ,nameError, usernameError, pwordError, pwordRError, pwordMismatchError} = this.state;
    
    if(password !== passwordR) {
      this.setState({
        pwordMismatchError: true,
        pwordError: true,
        pwordRError: true
      });
    } else if (name === '' || username === '' || password === '' ) {
      this.setState({
        customErrorMsg: 'Required fields are missing',
        pwordMismatchError: false,
        pwordError: false,
        pwordRError: false,
      });
    } else {
      this.setState({
        pwordMismatchError: false,
        pwordError: false,
        pwordRError: false,
      });
    }
    
    
    if (! (nameError || usernameError || pwordError || pwordRError || pwordMismatchError)) {
      this.setState({
        customErrorMsg: ''
      });
      this.props.signup({name, username, password});
      
    }
    
  }
  render() {
    const {navigation, errorMessage} = this.props;
    const { nameError, usernameError, pwordError, pwordRError, pwordMismatchError, customErrorMsg} = this.state;
    return (
      <Container>
        <Grid style={styles.gridMain}>
          <Row style={styles.rowOne} size={0.3}>
            <Col style={styles.textColStyle}>
              <View style={styles.textViewStyle}>
                <Text style={styles.textLogoStyle}>
                  Sign Up
                </Text>
              </View>
            </Col>
          </Row>
          <Row style={styles.rowTwo} size={6.5}>
            <Content>
              <Form style={styles.rowTwoContent}>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputContainer}>
                    <Item floatingLabel>
                      <Label style={!nameError? styles.inputStyle : [styles.inputStyle, styles.nameError]} >Name</Label>
                      <Input style={styles.inputStyle}
                             onChangeText={(text) => {this.handleNameChange(text)}}
                      />
                    </Item>
                  </View>
                  <View style={styles.inputContainer}>
                    <Item floatingLabel>
                      <Label style={!nameError? styles.inputStyle : [styles.inputStyle, styles.nameError]} >email</Label>
                      <Input style={styles.inputStyle}
                             onChangeText={(text) => {this.handleNameChange(text)}}
                      />
                    </Item>
                  </View>
                  <View style={styles.inputContainer}>
                    <Item floatingLabel>
                      <Label style={!usernameError? styles.inputStyle : [styles.inputStyle, styles.nameError]} >Username</Label>
                      <Input style={styles.inputStyle}
                             onChangeText={(text) => {this.handleUsernameChange(text)}}
                      />
                    </Item>
                  </View>
                  <View style={styles.inputContainer}>
                    <Item floatingLabel>
                      <Label style={!pwordError? styles.inputStyle : [styles.inputStyle, styles.nameError]} >Password</Label>
                      <Input style={styles.inputStyle}
                             onChangeText={(text) => {this.handlePasswordChange(text)}}
                      />
                    </Item>
                  </View>
                  <View style={styles.inputContainer}>
                    <Item floatingLabel>
                      <Label style={!pwordRError? styles.inputStyle : [styles.inputStyle, styles.nameError]} >Repeat Password</Label>
                      <Input style={styles.inputStyle}
                             onChangeText={(text) => {this.handlePasswordRChange(text)}}
                      />
                    </Item>
                  </View>
                  <View style={styles.alertContainer}>
                    {pwordMismatchError && <Text style={[styles.inputStyle, styles.nameError]}>Passwords do not match.</Text>}
                    {errorMessage && <Text style={styles.inputStyle}>{errorMessage}</Text>}
                    {customErrorMsg!=='' && <Text style={styles.inputStyle}>{customErrorMsg} !</Text>}
                  </View>
                </View>
              </Form>
            </Content>
          </Row>
          <Row style={styles.rowThree} size={1.5}>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonBox}>
                
                <TouchableOpacity 
                  style={[styles.buttonStyle, styles.signupButton]}
                  onPress={() => this.handleSignup()}
                >
                  <Text style={styles.buttonTextStyle}> Sign Up </Text>
                </TouchableOpacity>
  
                <TouchableOpacity style={[styles.buttonStyle]}
                                  onPress={() => this.props.navigate('Login')}
                >
                  <Text style={styles.buttonTextStyle}> Back </Text>
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
    marginTop: 80,
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
    marginBottom: 10,
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
  backButton: {
    height: 25,
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
  nameError: {
    color: '#d73834',
    fontSize: 20
  }
});

SignUpComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

SignUpComponent.navigationOptions = {
  title: null,
  headerLeft: null,
  header:null
};