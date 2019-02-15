import React, { Component } from 'react';
import { Image, StyleSheet, width } from 'react-native';
import { Button, Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import NavButton from '../widgets/NavButton/NavButton';
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';
import MatchPopUpComponent from '../Book/MatchPopUpComponent';
import RatingWidget from '../widgets/Rating/RatingWidget';
import SideMenu from 'react-native-side-menu';
import Menu from '../widgets/Drawer/Menu';

const cards = [
  {
    text: 'A man with one of those faces',
    name: 'Caimh McDonnell',
    image: 'http://res.cloudinary.com/haswind/image/upload/v1545103057/b86e7084d7e2b739ed33d65ea3c1da77393941bd_s0czuq.jpg',
  },
  {
    text: 'Understanding American Power',
    name: 'Bryan Mabee',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0bfe3a32853065.569640d8e4479.jpg'
  },
  {
    text: 'Pride and Prejudice',
    name: 'Jane Austen',
    image: 'https://cdn.flipsnack.com/blog/wp-content/uploads/2018/06/09181232/Pride-and-prejudice.jpg'
  },
];

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
  
  componentDidMount(){
    this.props.getSwipeList({});
    
  }
  
  onSwipeRight(item) {
    this.setState({
      // isSwipedRight: true,
      isModalVisible: true
    });
    
    // setInterval(() => {
    //   this.setState({
    //     isSwipedRight: false
    //   })
    // }, 500);
    
    console.log('Item right:', item);
    this.props.swipeRight(item);
  }
  
  onSwipeLeft(item) {
    console.log('Item left:', item);
  }
  
  renderCard(item) {
    console.log('HDV item: ', item);
    return (
      <Card style={{ elevation: 3 }}>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: 'http://res.cloudinary.com/haswind/image/upload/v1504502850/teamgrid/hashi/0.jpg'}} />
            <Body>
            <Text style={{fontWeight: 'bold', fontSize:31}}>{item.title}</Text>
            <Text>{item.id}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image style={{ height: 300, flex: 1 }}
                 source={{uri: item.thumbnail}}/>
        </CardItem>
        <CardItem>
          <Icon name="heart" style={{ color: '#ED4A6A' }} />
          <Text>{item.description}</Text>
          <Text>{item.bookQualityRating}</Text>
        </CardItem>
      </Card>
    );
  }
  
  onTouchOutside () {
    this.setState({ isModalVisible: false });
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
    console.log('HDV item clicked!', item);
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  }
  
  render() {
    const {navigation, swipeList} = this.props;
    console.log('HDV this.props.matchBookData', this.props.matchBookData);
    // const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
    
    // if menu is needed  put the following to render
    {/*<SideMenu*/}
      {/*menu={menu}*/}
      {/*isOpen={this.state.isOpen}*/}
      {/*onChange={isOpen => this.updateMenuState(isOpen)}*/}
    {/*> </SideMenu>*/}
    return (
      
        <Container style={{ backgroundColor: this.state.isSwipedRight? 'green': '#D0D0D0', marginTop:50 }}>
        <View>
          <MatchPopUpComponent
            navigateToSwapLocationPage={this.props.navigateToSwapLocationPage}
            data={this.props.matchBookData}
            visible={this.state.isModalVisible}
            onTouchOutside = {() => { this.onTouchOutside() }}
          />
        </View>
        <View >
          { swipeList && swipeList.length > 0 &&
            <DeckSwiper
              dataSource={swipeList}
              onSwipeRight={(item) => {this.onSwipeRight(item)}}
              onSwipeLeft={(item) => {this.onSwipeLeft(item)}}
              renderItem={item => this.renderCard(item)}
            />
          }
  
          <Button
            onPress={this.toggle}/>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    left: 0,
    top: 0,
    opacity: 1,
    backgroundColor: 'black',
    width: '100%',
    height: '100%'
  }
});

SwipeComponent.propTypes = {
};

SwipeComponent.navigationOptions = ({navigation}) => {
  return  {
    title: 'Home',
    headerRight: <NavButton navigation={navigation}/>
  }
};
