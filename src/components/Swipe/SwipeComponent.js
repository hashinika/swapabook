import React, { Component } from 'react';
import { Image, StyleSheet, width } from 'react-native';
import { Button, Container, Text as TextBase, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import MatchPopUpComponent from '../Book/MatchPopUpComponent';
import RatingWidget from '../widgets/Rating/RatingWidget';


export default class SwipeComponent extends Component {
  
  constructor(props){
    super(props);
    this.onSwipeRight = this.onSwipeRight.bind(this);
    this.onSwipeLeft = this.onSwipeLeft.bind(this);
    this.renderCard = this.renderCard.bind(this);
    this.onTouchOutside =  this.onTouchOutside.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isSwipedRight: false,
      isModalVisible: false,
      isOpen: false,
      selectedItem: 'About',
    };
  }

  
  onSwipeRight(item) {
    this.setState({
      isModalVisible: true
    });

    this.props.swipeRight(item);
  }
  
  onSwipeLeft(item) {
    console.log('Item left:', item);
  }
  
  renderCard(item) {
    return (
      <Card style={styles.cardStyle}>
        <CardItem header bordered style={styles.cardItemStyle}>
          <Body>
            <Text style={styles.textHead}>{item.user.name}</Text>
          </Body>
          <Text style={styles.textHead}>Score: {item.user.score || 0}</Text>
        </CardItem>
        <CardItem cardBody bordered style={styles.cardItemStyle}>
          <Grid>
            <Row style={styles.gridStyle}>
              <Col style={styles.imageColStyle} size={5}>
                <Image style={styles.imageStyle} source={{uri: item.thumbnail}}/>
              </Col>
              <Col style={styles.contentColStyle} size={7}>
                <Row style={styles.rowOne} size={80}>
                  <Col>
                    <Text style={styles.titleStyle}>{item.title}</Text>
                    <Text style={styles.authorStyle}>{item.author}</Text>
                    <TextBase style={styles.descStyle} note numberOfLines={5}>{item.description}</TextBase>
                  </Col>
                </Row>
                <Row style={styles.rowTwo} size={20}>
                  <Col>
                    <RatingWidget
                      disabled={true}
                      defaultValue={item.bookQualityRating}
                      count={5}
                      half={false}
                      starSize={25}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </CardItem>
        <CardItem header bordered style={styles.cardItemStyle}>
        </CardItem>
      </Card>
    );
  }
  
  onTouchOutside () {
    this.props.closeMeetupModal();
  }
  
  // menu methods
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  
  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }
  
  onMenuItemSelected = item => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  };
  
  render() {
    const {navigation, swipeList, matchBookData, isModalOpen} = this.props;

    return (
      
        <Container style={styles.mainContainer}>
          <View style={styles.mainView}>
            <View>
              <MatchPopUpComponent
                navigateToSwapLocationPage={this.props.navigateToSwapLocationPage}
                data={matchBookData}
                visible={isModalOpen}
                onTouchOutside = {() => { this.onTouchOutside() }}
              
              />
            </View>
            <View >
              { swipeList && swipeList.length > 0 &&
                <DeckSwiper
                  ref={(c) => this._deckSwiper = c}
                  dataSource={swipeList}
                  onSwipeRight={(item) => {this.onSwipeRight(item)}}
                  onSwipeLeft={(item) => {this.onSwipeLeft(item)}}
                  renderItem={item => this.renderCard(item)}
                />
              }
              <Button
                onPress={this.toggle}/>
            </View>
          </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  cardStyle: {
    elevation: 3,
  },
  textHead: {
    color: '#fafafa',
    fontSize:20
  },
  textHeadLeft: {
    color: '#fafafa',
    textAlign: 'right'
  },
  cardItemStyle:{
    backgroundColor:'#004d40',
  },
    gridStyle: {
      padding: 10
    },
    imageColStyle:{
      padding: 10
    },
    contentColStyle:{
      padding: 10
    },
    titleStyle:{
      fontSize:25,
      color: '#fafafa'
    },
    authorStyle: {
      color: '#f5f5f5'
    },
    descStyle:{
      color: '#f5f5f5'
    },
    imageStyle:{
      flex:1,
      height: 250
    },
    mainContainer : {
      paddingTop: 30,
      paddingBottom: 30
    }
});

