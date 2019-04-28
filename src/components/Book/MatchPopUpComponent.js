import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, Alert, TouchableOpacity, Text as TrueText } from 'react-native';
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
        <DialogContent style={{backgroundColor: '#fff'}}>
          <View style={styles.container}>
           <Grid style={styles.grid}>
             <Row style={styles.headerRow}>
               <Col size={25}></Col>
               <Col size={50}>
                 <View>
                   <TrueText style={styles.headerRowText}> We have a match !</TrueText>
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
                 <Row style={styles.textView}>
                   <Col>
                     <Text style={styles.titleStyle}>{title}</Text>
                     <Text style={styles.authorStyle}>{author}</Text>
                     <View style={styles.descStyleView}>
                       <Text style={styles.descStyle} note numberOfLines={5}>
                         {description}
                       </Text>
                     </View>
                   </Col>
                 </Row>
                 <Row>
                   <Col>
                     <RatingWidget
                       disabled={true}
                       defaultValue={bookQualityRating}
                       count={5}
                       half={false}
                       starSize={20}
                     />
                   </Col>
                 </Row>
                 <Row>
                   <Row>
                     <Col style={styles.btnColStyle}>
                       <TouchableOpacity style={[styles.buttonStyle]}
                                         onPress={() => {this.handleSetupSwap()}}
                       >
                         <Text style={styles.buttonTextStyle}> Setup Swap </Text>
                       </TouchableOpacity>
                     </Col>
                   </Row>
                 </Row>
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
  titleStyle:{
    fontSize:20,
    color: '#fafafa'
  },
  authorStyle: {
    color: '#f5f5f5'
  },
  descStyleView: {
    padding: 5,
  },
  descStyle:{
    color: '#f5f5f5'
  },
  btnColStyle: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    marginTop:2
  },
  buttonStyle: {
    height: 35,
    width: '100%',
    borderColor: '#e0f2f1',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'transparent'
  },
  buttonTextStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
    color: '#e0f2f1',
    fontSize: 20,
  },
  swapButton: {
    height: 40,
    width: '100%'
  },
  swapButtonText: {
    flex:1,
    textAlign: 'center'
  },
  headerRow: {
    height: 25,
    width: '100%',
  },
  headerRowText: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 0,
    width: '100%',
    color: '#fff',
    fontFamily: 'Billabong'
  },
  container: {
    width: 350,
    height: 350,
  },
  grid: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#004d40'
  },
  colOne: {
    margin: 5
  },
  colTwo: {
  
  },
  thumbnailContainer: {
    padding: 5,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  textView: {
    padding: 5,
    height: 150,
  }
});
