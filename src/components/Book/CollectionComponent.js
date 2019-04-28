import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, ScrollView, ImageBackground, TouchableOpacity  } from 'react-native';
import { Container,  Text, Icon } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import RatingWidget from '../widgets/Rating/RatingWidget';

export default class CollectionComponent extends Component {
  
  constructor(props){
    super(props);
    this.renderBookCovers = this.renderBookCovers.bind(this);
    this.renderBookCoversTest = this.renderBookCoversTest.bind(this);
  }
  
  componentDidMount(){
    this.props.getCollection();
  }
  
  renderBookCovers() {
    const {collection} = this.props;
    const COL_PER_ROW = 4;
    let rows = [];

    // Outer loop to create parent
    for (let rowNumber = 0; rowNumber < ( Math.ceil((collection.length/ COL_PER_ROW)) ); rowNumber++) {
      let columnCeiling = (rowNumber + 1) * COL_PER_ROW;
      let columnStartNumber  = rowNumber * COL_PER_ROW;
      let columns = [];
      //Inner loop to create children
      for (let columnNumber = columnStartNumber; columnNumber < columnCeiling; columnNumber++) {
        if(collection[columnNumber]){
          console.log('ColumnNumber: ', collection[columnNumber].smallThumbnail);
          columns.push(
            <Col>
              <View style={styles.thumbnailContainer}>
                <Image style={styles.thumbnail} source={{uri: collection[columnNumber].smallThumbnail? collection[columnNumber].smallThumbnail: 'http://books.google.com/books/content?id=8U2oAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'}}/>
              </View>
            </Col>
          );
        }
        
      }
      //Create the parent and add the children
      rows.push(
        <View>
          <Row style={styles.contentRow}>
            {columns}
          </Row>
          <Row style={styles.shelfRow}>
            <View style={styles.shelfImageContainer}>
              <ImageBackground style={styles.shelfImage}
                               source={require('../../../assets/img/shelf-glass.png')}/>
            </View>
          </Row>
        </View>);
    }
    
    return (
      <View>{rows}</View>
    );

  }
  
  renderBookCoversTest() {
    return (
      <View>
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
      </View>
    )
  }
  render() {
    return (
      <ScrollView style={{height: '100%', backgroundColor: '#d9dbda'}}>
      <Container style={styles.pageStyle}>
        <Grid>
          <View>
            {this.renderBookCovers()}
          </View>
        </Grid>
      </Container>
      </ScrollView>
    );
  }
  
}

const styles = StyleSheet.create({
  bgColor: {
    backgroundColor: '#d9dbda',
  },
  pageStyle: {
    height: '100%',
    backgroundColor: '#d9dbda',
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
  },
  iconStyle: {
    color: '#e0f2f1'
  },
  headerLeft: {
    marginLeft: 15,
    marginRight: 15
  }
});

CollectionComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

CollectionComponent.navigationOptions = ({navigation}) => ({
  headerTitle: <View style={ styles.headerView }><Text style={ styles.textHeader }>My Collection</Text></View>,
  headerStyle: {
    backgroundColor: '#004d40',
    color:'#e0f2f1',
  },
  headerLeft: (
    <View style={ styles.headerLeft }>
      <TouchableOpacity
        onPress={() => {navigation.navigate('Home')}}
        style={styles.btnStyle}>
        <Icon name="home" style={styles.iconStyle} />
      </TouchableOpacity>
    </View>
  )
});