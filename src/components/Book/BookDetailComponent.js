import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, ScrollView  } from 'react-native';
import { Container, Button, Content, Form, Item, Input, Text, Accordion } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import RatingWidget from '../widgets/Rating/RatingWidget';

export default class BookDetailComponent extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      stars: 1
    };
    this.renderThumbnail = this.renderThumbnail.bind(this);
    this.handleRatingChange =  this.handleRatingChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  
  componentDidMount(){
  
  }
  
  handleRatingChange(stars) {
    this.setState({stars});
  }
  
  handleAdd(){
    const {stars} = this.state;
    this.props.addToCollection()
  }
  
  renderThumbnail() {
    const {imageLinks} = this.props.volumeInfo;
    
    if (imageLinks) {
      return (
        <Image style={{ height: '100%' }} source={{uri: imageLinks.thumbnail}}/>
      );
    } else {
      return (
        <Image style={{ height: '100%' }} source={{uri: 'https://via.placeholder.com/128x195?text=Thumbnail+Not+Found'}}/>
      );
    }
  }
  
  render() {
    console.log('HDV volumeInfo: ', this.props.volumeInfo);
    const {title, authors, publishedDate, averageRating, imageLinks, description} = this.props.volumeInfo;
    return (
      <ScrollView>
      <Container>
        <Grid>
          <Row size={3}>
            <Col style={styles.colOne} >
                <View style={styles.thumbnailContainer}>
                 {this.renderThumbnail()}
                </View>
            </Col>
            <Col style={styles.colTwo}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.author}>{authors[0]}</Text>
              </View>
            </Col>
          </Row>
          <Row size={1}>
            <Col style={styles.colThree}>
              <View style={styles.descriptionContainer}>
                <Accordion dataArray={[{
                  title: 'Description',
                  content: description
                }]} expanded={1}/>
              </View>
            </Col>
          </Row>
          <Row size={1} style={styles.rowFour}>
            <Col style={styles.colFour}>
              <RatingWidget
                disabled={false}
                onUpdate={(val)=>{this.handleRatingChange(val)}}
                defaultValue={1}
                count={5}
                half={false}
                starSize={50}
              />
            </Col>
          </Row>
          <Row size={1} style={styles.rowFive}>
            <Col style={styles.colFive}>
              <Button style={styles.addToCollectionBtn} onPress={() => {this.handleAdd()}}>
                <Text style={styles.btnText}>Add to collection</Text>
              </Button>
            </Col>
          </Row>
        </Grid>
      </Container>
      </ScrollView>
    );
  }
  
}

const styles = StyleSheet.create({
  addToCollectionBtn: {
    width: '80%',
    marginRight: '10%',
    marginLeft: '10%'
  },
  btnText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
  },
  gridMain: {
    backgroundColor: '#263238',
  },
  colOne: {
    backgroundColor: 'red',
    height: '100%'
  },
  colTwo: {
    backgroundColor: 'blue'
  },
  colThree: {
    backgroundColor: 'green',
  },
  colFour: {
    backgroundColor: 'red'
  },
  colFive: {
    backgroundColor: 'orange'
  },
  title : {
    fontSize: 30,
  },
  author : {
    fontSize: 15,
  },
  descriptionContainer: {
    justifyContent: 'space-evenly',
    padding: 10,
  },
  rowOne:{
  },
  rowTwo: {
  },
  rowThree: {
  },
  rowFour: {
  },
  rowFive: {
  },
  thumbnailContainer: {
    flex: 1,
    justifyContent: 'center',
    padding:15
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
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  buttonStyle: {
    height: 50,
    width: '100%',
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 0,
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
  }
});

BookDetailComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

BookDetailComponent.navigationOptions = {
  title: 'Book Details',
};