import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, Alert , TouchableOpacity} from 'react-native';
import { Container, Icon,  Content, Card, CardItem, Text, Body } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class UserComponent extends Component {
  
  constructor(props){
    super(props);
    
    this.handleLogout = this.handleLogout.bind(this);
  }
  
  componentDidMount(){
    this.props.getUser();
  }
  
  
  handleLogout () {
    this.props.logout();
  }
  render() {
    const {navigation, errorMessage, userDetails} = this.props;

    return (
      <Container style={styles.gridMain}>
        <Content padder>
          <Card transparent={true}>
              <View style={styles.centerAlign}>
                <Text style={styles.scoreTitle}>Your Score</Text>
                <View style={styles.scoreCard}>
                  <Text style={styles.score}>{userDetails.score || 0}</Text>
                </View>
              </View>
          </Card>
        </Content >
          <Content padder>
            <Card>
              <CardItem header bordered>
                <Text style={styles.headText}>Profile Details</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text style={styles.txtStyle}>Name : {userDetails.name}</Text>
                  <Text style={styles.txtStyle}>Email : {userDetails.email}</Text>
                </Body>
              </CardItem>
              <CardItem footer bordered>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={[styles.buttonStyle]}
                                    onPress={this.handleLogout}>
                    <Text style={styles.buttonTextStyle}>Sign Out </Text>
                  </TouchableOpacity>
                </View>
              </CardItem>
            </Card>
          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headText: {
    fontSize: 20,
    color: 'black'
  },
  txtStyle: {
    fontSize: 20
  },
  btnView: {
    justifyContent: 'center',
    alignItems:'center',
  },
  centerAlign: {
    justifyContent: 'center',
    alignItems:'center',
  },
  scoreCard: {
    marginTop: 5,
    marginBottom: 20,
    borderColor: '#e0f2f1',
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'transparent',
    paddingTop:40,
    width: '80%'
  },
  userName:{
    color: '#fafafa',
    fontSize: 40,
    fontFamily: 'Billabong'
  },
  scoreTitle: {
    color: '#fafafa',
    fontSize: 30,
  },
  score: {
    color: '#fafafa',
    fontSize: 100,
    fontFamily: 'Billabong'
  },
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
    width: '100%',
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
    backgroundColor: '#8e2323',
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
  iconStyle: {
    color: '#e0f2f1'
  },
  headerLeft: {
    marginLeft: 15,
    marginRight: 15
  }
});

UserComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

UserComponent.navigationOptions = ({navigation}) => ({
  headerTitle: <View style={ styles.headerView }><Text style={ styles.textHeader }> Your Profile </Text></View>,
  headerStyle: {
    backgroundColor: '#004d40',
    color:'#e0f2f1',
  },
  headerLeft: (
    <View style={ styles.headerLeft }>
      <TouchableOpacity
        onPress={() => {navigation.navigate('Home')}}
        style={styles.btnStyle}>
        <Icon name="home" style={styles.iconStyle} />
      </TouchableOpacity>
    </View>
  )
});