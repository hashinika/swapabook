import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Text  } from 'react-native';
import { Container, Button, Label, Accordion, Text as TextBase, Header } from 'native-base';
import RatingWidget from '../widgets/Rating/RatingWidget';
import moment from 'moment';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class MeetingModalComponent extends Component {
  
  constructor(props){
    super(props);
    this.renderThumbnail = this.renderThumbnail.bind(this);
  }
  
  renderThumbnail() {
    const {thumbnail} = this.props.selectedMeetingDetails;
    
    if (thumbnail) {
      return (
        <Image style={{ height: '100%' }} source={{uri: thumbnail}}/>
      );
    } else {
      return (
        <Image style={{ height: '100%' }} source={{uri: 'https://via.placeholder.com/128x195?text=Thumbnail+Not+Found'}}/>
      );
    }
  }
  
  handleApprove() {
    const {id} = this.props.selectedMeetingDetails;
    this.props.handleApprove(id);
    this.props.closeModal();
  }
  
  render() {
    const {title, author, description, bookQualityRating, isAccepted} = this.props.selectedMeetingDetails;
    return (
      <ScrollView>
        <Header style={styles.headerStyle}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonCloseStyle} onPress={() => {this.props.closeModal()}}>
              <Text style={styles.btnText}>Close </Text>
            </TouchableOpacity>
          </View>
        </Header>
        <Container style={styles.gridMain}>
          <Grid>
            <Row size={1.5}>
              <Col style={styles.colOne} >
                <View style={styles.thumbnailContainer}>
                  {this.renderThumbnail()}
                </View>
              </Col>
              <Col style={styles.colTwo}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{title}</Text>
                  <Text style={styles.author}>{author}</Text>
                </View>
              </Col>
            </Row>
            <Row size={0.4} style={styles.rowFour}>
              <Col style={styles.colFour}>
                <RatingWidget
                    disabled={true}
                    defaultValue={bookQualityRating}
                    count={5}
                    half={false}
                    starSize={50}
                />
              </Col>
            </Row>

            {
              this.props.showApprovalBtn &&
              <Row size={0.4} style={styles.rowFive}>
                <View style={styles.buttonContainer}>
                  {!isAccepted && <TouchableOpacity style={styles.buttonStyle} onPress={() => {this.handleApprove()}}>
                    <Text style={styles.btnText}>Approve Meeting</Text>
                  </TouchableOpacity>}

                </View>
              </Row>
            }

            <Row size={1} style={styles.rowThree}>
              <Col style={styles.colThree}>
                <View style={styles.descriptionContainer}>
                  <Label style={styles.textDescTitle}>Description</Label>
                  <TextBase note numberOfLines={4}>{description}</TextBase>
                </View>
              </Col>
            </Row>
          </Grid>
        </Container>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#004d40',
  },
  buttonCloseStyle: {
    height: 50,
    width: 100,
    marginTop: 5,
    marginBottom: 5,
    borderColor: '#e0f2f1',
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "left",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'transparent'
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
  addToCollectionBtn: {
    width: '80%',
    marginRight: '10%',
    marginLeft: '10%'
  },
  btnText: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
    color: '#e0f2f1',
    fontSize: 20,
  },
  gridMain: {
    backgroundColor: '#004d40',
  },
  colOne: {
  },
  colTwo: {
  },
  colThree: {
  
  },
  colFour: {
  },
  colFive: {
  },
  title : {
    fontSize: 30,
    color: '#e0f2f1',
  },
  author : {
    fontSize: 15,
    color: '#e0f2f1',
  },
  descriptionContainer: {
    justifyContent: 'space-evenly',
    margin: 10,
  },
  textDescTitle: {
    fontWeight: 'bold',
    color: '#e0f2f1',
  },
  textDesc: {
    color: '#e0f2f1',
  },
  rowOne:{
  },
  rowTwo: {
  },
  rowThree: {
  },
  rowFour: {
    height: 200
  },
  rowFive: {
  },
  thumbnailContainer: {
    justifyContent: 'center',
    padding: 20
  },
  titleContainer : {
    flex: 1,
    justifyContent: 'center',
    padding:15
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
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonTextStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
  },
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
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
