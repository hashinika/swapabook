import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet, Text as TrueText } from 'react-native';
import { Button, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import moment from 'moment';
import AlertBox from '../widgets/Alert/AlertBox';
export default class Summary extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      errorMessage: ''
    };
    this.handleSetupMeeting = this.handleSetupMeeting.bind(this);
  }
  
  handleSetupMeeting() {
    
    const {selectedLocation, selectedDateTime} = this.props.swapDetails;
    const {meetingInit} = this.props;
    const datetime = new Date(selectedDateTime);
    if (!selectedLocation.name) {
      this.setState({
        errorMessage: 'Pick a location'
      })
    } else if (!datetime.getDate()) {
      this.setState({
        errorMessage: 'Pick date and time'
      })
    } else{
      
      this.props.setMeetup({selectedLocation, selectedDateTime: moment(datetime).format("YYYY-MM-DD HH:mm:ss"), meetingId: meetingInit.id });
      this.setState({
        errorMessage: ''
      })
    }
    
  }
  
  render() {
    const {selectedLocation, selectedDateTime} = this.props.swapDetails;
    const datetime = new Date(selectedDateTime);
    const {errorMessage} = this.state;
    return (
      
      <View style={styles.containerStyle}>
          <View style={styles.summmaryBox}>
            <Row size={50}>
              <Col>
                <View style={styles.summmaryBoxTextBox}>
                  <Text style={styles.summmaryBoxText}>Location: {selectedLocation && selectedLocation.name? selectedLocation.name: '---'}</Text>
                  <Text style={styles.summmaryBoxText}>Date & Time: {datetime && datetime.getDate()?  moment(datetime).format("YYYY-MM-DD HH:mm:ss"): '---'}</Text>
                </View>
              </Col>
            </Row>
            <Row size={20}>
              <Col style={styles.errorCol}>
                {errorMessage !== '' &&
                <Text style={styles.errorText}>{errorMessage}!</Text>}
              </Col>
            </Row>
            <Row size={30}>
              <Col style={styles.meetingBtnView}>
                  <TouchableOpacity style={[styles.buttonStyle]}
                                    onPress={() => {this.handleSetupMeeting()}}>
                    <TrueText style={styles.buttonTextStyle}> Setup Meeting </TrueText>
                  </TouchableOpacity>
              </Col>
            </Row>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorCol: {
  },
  errorText: {
    textAlign:'center',
    color: 'red',
    fontSize: 20
  },
  buttonStyle: {
    height: 50,
    width: '100%',
    borderColor: '#e0f2f1',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'transparent',
  },
  buttonTextStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
    color: '#e0f2f1',
    fontSize: 20,
  },
  containerStyle: {
    height: 200,
  },
  colStyle: {
  
  },
  summmaryBox: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingBottom: 20,
    paddingTop: 10,
    backgroundColor: '#212121'
  },
  summmaryBoxTextBox: {
    marginTop: 20
  },
  meetingBtnView: {
    flex:1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 20,
  },
  meetingBtn: {
    marginTop: 10,
    marginBottom: 5,
    justifyContent: "flex-start",
    width: '100%',
  },
  meetingBtnTxt: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
  },
  summmaryBoxText: {
    fontSize: 20,
    color: '#fff'
  },
  headerStyle: {
    fontWeight: '100',
  }
});