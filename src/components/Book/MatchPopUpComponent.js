import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, Alert } from 'react-native';
import { Container, Button, Content, Form, Item, Input, Text } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';
import RatingWidget from '../widgets/Rating/RatingWidget';

export default class AlertBox extends Component {
  
  constructor(props){
    super(props);
    this.handleSetupSwap = this.handleSetupSwap.bind(this);
  }
  
  componentDidMount(){
  }

  // ISBN_10: "1451648545"
  // ISBN_13: "9781451648546"
  // author: "Walter Isaacson"
  // bookQualityRating: 4
  // category: "Biography & Autobiography"
  // createdAt: "2019-01-17T12:23:16.000Z"
  // description: "Draws on more than forty interviews with Steve Jobs, as well as interviews with family members, friends, competitors, and colleagues to offer a look at the co-founder and leading creative force behind the Apple computer company."
  // id: 12
  // language: "en"
  // pageCount: "630"
  // publishedDate: "2011"
  // publisher: "Simon and Schuster"
  // smallThumbnail: "http://books.google.com/books/content?id=8U2oAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
  // subTitle: ""
  // thumbnail: "http://books.google.com/books/content?id=8U2oAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  // title: "Steve Jobs"
  // updatedAt: "2019-01-17T12:23:16.000Z"
  // userId: 1
  // webReaderLink: "http://books.google.com/books?id=8U2oAAAAQBAJ&printsec=frontcover&dq=isbn:9781451648546&hl=&cd=1&source=gbs_api"
  
  handleSetupSwap() {
    this.props.onTouchOutside();
    this.props.navigateToSwapLocationPage('SwapComponent');
  }
  
  render() {
    const {ISBN_10, ISBN_13, author, bookQualityRating, category,
      createdAt, description, id, language, pageCount, publishedDate, publisher,
      smallThumbnail, subTitle, thumbnail, title, updatedAt, userId, webReaderLink
    } = this.props.data;
    return (
      <Dialog
        visible={this.props.visible}
        onTouchOutside={() => {
          this.props.onTouchOutside();
        }}
        dialogAnimation={new SlideAnimation({
          slideFrom: 'bottom',
        })}
      >
        <DialogContent>
          <View style={styles.container}>
           <Grid style={styles.grid}>
             <Row style={styles.headerRow}>
               <Col size={25}></Col>
               <Col size={50}>
                 <View>
                   <Text style={styles.headerRowText}> We have a match !</Text>
                 </View>
               </Col>
               <Col size={25}></Col>
             </Row>
             <Row>
               <Col style={styles.colOne} size={45}>
                 <View style={styles.thumbnailContainer}>
                   <Image
                     style={styles.thumbnail}
                     source={{uri: thumbnail ? thumbnail : "http://books.google.com/books/content?id=8U2oAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"}}/>
                 </View>
               </Col>
               <Col style={styles.colTwo} size={55}>
                 <View style={styles.textView}>
                   <Text>{title}</Text>
                   <Text>{author}</Text>
                   <Text>
                     {description}
                   </Text>
                 </View>
                 <View>
                   <RatingWidget
                     disabled={true}
                     defaultValue={bookQualityRating}
                     count={5}
                     half={false}
                     starSize={20}
                   />
                 </View>
                 
                 <View>
                   
                   <Col>
                     <Button
                       onPress={() => {this.handleSetupSwap()}}
                       style={styles.swapButton}>
                       <Text>Setup Swap</Text>
                     </Button>
                   </Col>
                 </View>
               </Col>
             </Row>
           </Grid>
          </View>
        </DialogContent>
      </Dialog>
    );
  }
}

const styles = StyleSheet.create({
  swapButton: {
    height: 25,
  },
  headerRow: {
    height: 25,
    width: '100%',
  },
  headerRowText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    width: 200,
    backgroundColor: 'yellow',
  },
  container: {
    width: 350,
    height: 300,
    backgroundColor: 'blue'
  },
  grid: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: 'red'
  },
  colOne: {
    backgroundColor: 'purple'
  },
  colTwo: {
    backgroundColor: 'green'
  },
  thumbnailContainer: {
    padding: 5,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  textView: {
    height: 150,
  }
});
