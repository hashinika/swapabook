import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
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
    const d = new Date(selectedDateTime);
    console.log('HDV selectedDateTime: ', selectedDateTime);
    if (!selectedLocation.name) {
      this.setState({
        errorMessage: 'Pick a location'
      })
    } else if (!d.getDate()) {
      this.setState({
        errorMessage: 'Pick date and time'
      })
    } else{
      
      this.props.setMeetup({selectedLocation, selectedDateTime});
      this.setState({
        errorMessage: ''
      })
    }
    
  }
  
  render() {
    const {selectedLocation, selectedDateTime} = this.props.swapDetails;
    const datetime = new Date(selectedDateTime);
    const {errorMessage} = this.state;
    console.log('HDV this.props.swapDetails', this.props.swapDetails);
    return (
  
      <Grid style={styles.containerStyle}>
        
        <View style={styles.colStyle} >
          <View style={styles.summmaryBox}>
            <View style={styles.summmaryBoxTextBox}>
              <Text style={styles.summmaryBoxText}>Location: {selectedLocation && selectedLocation.name? selectedLocation.name: '---'}</Text>
              <Text style={styles.summmaryBoxText}>Date & Time: {datetime && datetime.getDate()?  moment(datetime).format("YYYY-MM-DD HH:mm:ss"): '---'}</Text>
            </View>
            {errorMessage !== '' && <AlertBox message={errorMessage}/>}
            <View style={styles.meetingBtnView}>
              <Button style={styles.meetingBtn} block rounded onPress={() => {this.handleSetupMeeting()}}>
                <Text style={styles.meetingBtnTxt}>Setup Meeting</Text>
              </Button>
            </View>
          </View>
        </View>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    height: '100%',
  },
  colStyle: {
    marginTop: 10,
    marginBottom: 5,
    justifyContent: "flex-start",
    width: '100%',
  },
  summmaryBox: {
    justifyContent: 'center',
    width: '100%',
    height: 150,
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  meetingBtnView: {
    flex:1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
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
    fontSize: 18
  },
  headerStyle: {
    fontWeight: '100',
  }
});