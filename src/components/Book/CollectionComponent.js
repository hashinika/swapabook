import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, ScrollView, ImageBackground  } from 'react-native';
import { Container, Button, Content, Form, Item, Input, Text, Accordion } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import RatingWidget from '../widgets/Rating/RatingWidget';

export default class CollectionComponent extends Component {
  
  constructor(props){
    super(props);
    this.renderBookCovers = this.renderBookCovers.bind(this);
  }
  
  componentDidMount(){
    this.props.getCollection();
  }
  
  renderBookCovers() {
    const {collection} = this.props;
    
    return (
      <View>
        {collection.map(item => {
          return (
            <Image style={{ width: 20 }} source={{uri: item.smallThumbnail}}/>
          )
        })}
      </View>
    );
  }
  
  render() {
    console.log('HDV collection: ', this.props.collection);
    return (
      <ScrollView style={{height: '100%'}}>
      <Container style={styles.pageStyle}>
        <ImageBackground style={styles.shelfImage}
                         source={require('../../../assets/img/wooden-texture.jpg')}>
        {/*{this.renderBookCovers()}*/}
        <Grid>
          <Row style={styles.contentRow}>
            <Col>
              <View style={styles.thumbnailContainer}>
                <Image style={styles.thumbnail} source={{uri: 'http://books.google.com/books/content?id=8U2oAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'}}/>
              </View>
            </Col>
            <Col>
              <View style={styles.thumbnailContainer}>
                <Image style={styles.thumbnail} source={{uri: 'http://books.google.com/books/content?id=8U2oAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'}}/>
              </View>
            </Col>
            <Col>
              <View style={styles.thumbnailContainer}>
                <Image style={styles.thumbnail} source={{uri: 'http://books.google.com/books/content?id=8U2oAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'}}/>
              </View>
            </Col>
            <Col>
              <View style={styles.thumbnailContainer}>
                <Image style={styles.thumbnail} source={{uri: 'http://books.google.com/books/content?id=8U2oAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'}}/>
              </View>
            </Col>
          </Row>
          <Row style={styles.shelfRow}>
            <View style={styles.shelfImageContainer}>
              <ImageBackground style={styles.shelfImage}
                             source={require('../../../assets/img/shelf.png')}/>
            </View>
          </Row>
  
          <Row style={styles.contentRow}>
            <Col>
              <View style={styles.thumbnailContainer}>
                <Image style={styles.thumbnail} source={{uri: 'http://books.google.com/books/content?id=8U2oAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'}}/>
              </View>
            </Col>
            <Col>
              <View style={styles.thumbnailContainer}>
                <Image style={styles.thumbnail} source={{uri: 'http://books.google.com/books/content?id=8U2oAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'}}/>
              </View>
            </Col>
            <Col>
              <View style={styles.thumbnailContainer}>
                <Image style={styles.thumbnail} source={{uri: 'http://books.google.com/books/content?id=8U2oAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'}}/>
              </View>
            </Col>
            <Col>
              <View style={styles.thumbnailContainer}>
                <Image style={styles.thumbnail} source={{uri: 'http://books.google.com/books/content?id=8U2oAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'}}/>
              </View>
            </Col>
          </Row>
          <Row style={styles.shelfRow}>
            <View style={styles.shelfImageContainer}>
              <ImageBackground style={styles.shelfImage}
                               source={require('../../../assets/img/shelf.png')}/>
            </View>
          </Row>
  
          <Row style={styles.contentRow}>
            <Col>
              <View style={styles.thumbnailContainer}>
                <Image style={styles.thumbnail} source={{uri: 'http://books.google.com/books/content?id=8U2oAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'}}/>
              </View>
            </Col>
            <Col>
              <View style={styles.thumbnailContainer}>
                <Image style={styles.thumbnail} source={{uri: 'http://books.google.com/books/content?id=8U2oAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'}}/>
              </View>
            </Col>
            <Col>
              <View style={styles.thumbnailContainer}>
                <Image style={styles.thumbnail} source={{uri: 'http://books.google.com/books/content?id=8U2oAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'}}/>
              </View>
            </Col>
            <Col>
              <View style={styles.thumbnailContainer}>
                <Image style={styles.thumbnail} source={{uri: 'http://books.google.com/books/content?id=8U2oAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'}}/>
              </View>
            </Col>
          </Row>
          <Row style={styles.shelfRow}>
            <View style={styles.shelfImageContainer}>
              <ImageBackground style={styles.shelfImage}
                               source={require('../../../assets/img/shelf.png')}/>
            </View>
          </Row>
  
          <Row style={styles.contentRow}>
            <Col>
              <View style={styles.thumbnailContainer}>
                <Image style={styles.thumbnail} source={{uri: 'http://books.google.com/books/content?id=8U2oAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'}}/>
              </View>
            </Col>
            <Col>
              <View style={styles.thumbnailContainer}>
                <Image style={styles.thumbnail} source={{uri: 'http://books.google.com/books/content?id=8U2oAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'}}/>
              </View>
            </Col>
            <Col>
              <View style={styles.thumbnailContainer}>
                <Image style={styles.thumbnail} source={{uri: 'http://books.google.com/books/content?id=8U2oAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'}}/>
              </View>
            </Col>
            <Col>
              <View style={styles.thumbnailContainer}>
                <Image style={styles.thumbnail} source={{uri: 'http://books.google.com/books/content?id=8U2oAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'}}/>
              </View>
            </Col>
          </Row>
          <Row style={styles.shelfRow}>
            <View style={styles.shelfImageContainer}>
              <ImageBackground style={styles.shelfImage}
                               source={require('../../../assets/img/shelf.png')}/>
            </View>
          </Row>
        </Grid>
        </ImageBackground>
      </Container>
      </ScrollView>
    );
  }
  
}

const styles = StyleSheet.create({
  pageStyle: {
    //backgroundImage
    // backgroundColor: 'brown'
    height: '100%'
  },
  thumbnailContainer: {
    padding:5,
  },
  thumbnail: {
    width: 95,
    height: 150,
  },
  contentRow: {
    padding: 0,
    margin: 0,
    // backgroundColor: "red",
    height: 155
  },
  shelfRow: {
    padding: 0,
    margin: 0,
    // backgroundColor: "blue",
    height: 50,
  },
  shelfImageContainer: {
    // backgroundColor: "yellow",
    width: '100%',
    height: 150,
  },
  shelfImage: {
    flex: 1,
    // backgroundColor: "green",
  }
});

CollectionComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

CollectionComponent.navigationOptions = {
  title: "My Collection"
};