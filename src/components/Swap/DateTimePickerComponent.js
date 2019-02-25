import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Button } from 'native-base';

import DateTimePicker from 'react-native-modal-datetime-picker';

export default class DateTimePickerComponent extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      datetime: ''
    };
    
    this._showDateTimePicker = this._showDateTimePicker.bind(this);
    this._hideDateTimePicker = this._hideDateTimePicker.bind(this);
    this._handleDatePicked = this._handleDatePicked.bind(this);
    
  }
  
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  
  _handleDatePicked = (datetime) => {
    
  
    const d = new Date(datetime);
    this.setState({
      datetime: d.getDate()
    });
  
    this.props.setSelectedDateTime(d);
    console.log('A date has been picked: ', d);
    this._hideDateTimePicker();
  };
  
  render() {
    
    return (
      <View style={styles.containerStyle}>
        <View>
          <View style={styles.meetingBtnView}>
            <Button style={styles.meetingBtn} block  onPress={this._showDateTimePicker}>
              <Text style={styles.meetingBtnTxt}>Pick a date and time</Text>
            </Button>
          </View>
          <DateTimePicker
            mode="datetime"
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
          />
        </View>
        <View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
  },
  meetingBtnView: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  meetingBtn: {
    marginTop: 5,
    marginBottom: 5,
    justifyContent: "flex-start",
    width: '100%',
  },
  meetingBtnTxt: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
  },
  headerStyle: {
    fontWeight: '100',
    color: 'red'
  }
});