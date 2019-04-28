import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Text  } from 'react-native';
import { Container, Button, Label, Accordion, Text as TextBase } from 'native-base';
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
    this.props.addToCollection({
      ...this.props.volumeInfo,
      bookQualityRating: stars
    });
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
    const {title ='Title not found', authors='Author not found', description='Description not found'} = this.props.volumeInfo;
    return (
      <ScrollView>
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
                <Text style={styles.author}>{authors[0]}</Text>
              </View>
            </Col>
          </Row>
          <Row size={1} style={styles.rowThree}>
            <Col style={styles.colThree}>
              <View style={styles.descriptionContainer}>
                <Label style={styles.textDescTitle}>Description</Label>
                <TextBase note numberOfLines={5}>{description}</TextBase>
              </View>
            </Col>
          </Row>
          <Row size={0.4} style={styles.rowFour}>
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
          <Row size={0.4} style={styles.rowFive}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyle} onPress={() => {this.handleAdd()}}>
                <Text style={styles.btnText}>Add to collection</Text>
              </TouchableOpacity>
            </View>
          </Row>
        </Grid>
      </Container>
      </ScrollView>
    );
  }
  
}

const styles = StyleSheet.create({
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

BookDetailComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

BookDetailComponent.navigationOptions = {
  headerTitle: <View style={ styles.headerView }><Text style={ styles.textHeader }>Book Details</Text></View>,
  headerStyle: {
    backgroundColor: '#004d40',
    color:'#e0f2f1',
  }
};