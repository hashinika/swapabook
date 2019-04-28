import React, { Component } from 'react';
import { StyleSheet, View, Image, Alert, TouchableOpacity, Modal, TouchableHighlight , Text} from 'react-native';
import { Thumbnail, Header, Content, List, ListItem, Text as TextBase,  Left, Body, Right, Button, CheckBox } from 'native-base';
import moment from 'moment';
import MeetingModalComponent from './MeetingModalComponent';
export default class MeetingComponent extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      selectedMeetingDetails: {},
      showApprovalBtn: false
    };
    
    this.closeModal = this.closeModal.bind(this);
    this.renderUpcomingMeetings = this.renderUpcomingMeetings.bind(this);
    this.renderMyApprovedOrPendingMeetings = this.renderMyApprovedOrPendingMeetings.bind(this);
  }
  
  componentDidMount(){
    this.props.fetchMeetingData();
  }

  renderMyApprovedOrPendingMeetings() {
    const { myApprovedOrPendingMeetings } = this.props.swapDetails;
    
    return (
      <View style={styles.list}>
        {
          myApprovedOrPendingMeetings.map(meeting=> {
            return (
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={{ uri: meeting.smallThumbnail ? meeting.smallThumbnail : 'https://via.placeholder.com/128x195?text=Thumbnail+Not+Found' }} />
                </Left>
                <Body>
                  <View style={styles.bodyStyle}>
                    <Text style={styles.titleStyle}>{meeting.title}</Text>
                    <Text style={styles.contentStyle}>{meeting.location_name}</Text>
                    <Text style={styles.contentStyle}>{moment( new Date(meeting.selectedDateTime)).format("YYYY-MM-DD HH:mm")}</Text>
                    {(meeting.isAccepted && (meeting.isAccepted === '1'))? <Text style={styles.contentStyle}>Approved</Text>: <Text style={styles.contentStyle}>Pending your approval</Text>}
                  </View>
                </Body>
                <Right>
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => {
                      this.props.showHideAcceptModal(true);
                      this.setState({selectedMeetingDetails:meeting, showApprovalBtn: true
                      })
                    }}>
                    <Text style={styles.buttonTextStyle}> View </Text>
                  </TouchableOpacity>
                </Right>
              </ListItem>
            );
          })}
      </View>
    );
    
  }
  renderUpcomingMeetings() {
    const { pendingMeetingData } = this.props.swapDetails;
    //smallThumbnail, title, description
    return (
      <View style={styles.list}>
        {
          pendingMeetingData.map(meeting=> {
            return (
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={{ uri: meeting.smallThumbnail ? meeting.smallThumbnail : 'https://via.placeholder.com/128x195?text=Thumbnail+Not+Found' }} />
                </Left>
                <Body>
                <View style={styles.bodyStyle}>
                  <Text style={styles.titleStyle}>{meeting.title}</Text>
                  <Text style={styles.contentStyle}>{meeting.location_name}</Text>
                  <Text style={styles.contentStyle}>{moment( new Date(meeting.selectedDateTime)).format("YYYY-MM-DD HH:mm")}</Text>
                  {meeting.isApproved? <Text style={styles.contentStyle}>Approved</Text>: <Text style={styles.contentStyle}>Pending approval</Text>}
                </View>
                </Body>
                <Right>
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => {
                      this.props.showHideAcceptModal(true);
                      this.setState({selectedMeetingDetails:meeting, showApprovalBtn: false})
                    }}>
                    <Text style={styles.buttonTextStyle}> View </Text>
                  </TouchableOpacity>
                </Right>
              </ListItem>
            );
        })}
      </View>
    );
  }
  
  closeModal() {
    this.props.fetchMeetingData();

  }

  render() {
    const {pendingMeetingData, myApprovedOrPendingMeetings, isAcceptModalOpen} = this.props.swapDetails;
    
    return (
          <Content style={styles.containerStyle}>
            <View>
              <Modal
                animationType="slide"
                transparent={false}
                visible={isAcceptModalOpen}

                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                }}>
                <MeetingModalComponent
                  closeModal= {this.closeModal}
                  selectedMeetingDetails={this.state.selectedMeetingDetails}
                  showApprovalBtn={this.state.showApprovalBtn}
                  handleApprove={this.props.handleApprove}
                />
              </Modal>
            </View>
            <List>
              <ListItem itemDivider>
                <Text>Upcoming Meetings</Text>
              </ListItem>
              { pendingMeetingData && pendingMeetingData.length > 0 && this.renderUpcomingMeetings()}
              <ListItem itemDivider>
                <Text>Your Approval Pending Meetings</Text>
              </ListItem>
              { myApprovedOrPendingMeetings && myApprovedOrPendingMeetings.length >0 && this.renderMyApprovedOrPendingMeetings()}
            </List>
          </Content>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    height: 50,
    width: 70,
    borderColor: '#e0f2f1',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'transparent'
  },
  buttonTextStyle: {
    color: '#000',
    fontSize: 18
  },
  containerStyle: {
    backgroundColor: '#004d40'
  },
  list: {
    backgroundColor: '#9e9e9e'
  },
  listApproved: {
    backgroundColor: '#e0e0e0'
  },
  bodyStyle: {
    paddingTop: 10,
  },
  titleStyle: {
    color: '#000',
    fontSize: 18
  },
  contentStyle: {
    color: '#000',
    fontSize: 15
  },
  gridMain: {
    backgroundColor: '#38000c',
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
  }
});

MeetingComponent.navigationOptions = ({navigation}) => {
  return  {
    headerTitle: <View style={ styles.headerView }><Text style={ styles.textHeader }>View all meetings</Text></View>,
    headerStyle: {
      backgroundColor: '#004d40',
      color:'#e0f2f1',
    }
  }
};
