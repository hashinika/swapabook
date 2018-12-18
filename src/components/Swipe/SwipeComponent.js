import React, { Component } from 'react';
import { Image } from 'react-native';
import { Button, Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import NavButton from '../widgets/NavButton/NavButton';

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
  }
  
  componentDidMount(){
    this.props.testLogin(2);
  }
  
  render() {
    const {navigation} = this.props;
    
    return (
      <Container style={{ backgroundColor: '#D0D0D0', marginTop:50 }}>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: 'http://res.cloudinary.com/haswind/image/upload/v1504502850/teamgrid/hashi/0.jpg'}} />
                    <Body>
                    <Text style={{fontWeight: 'bold', fontSize:31}}>{item.text}</Text>
                    <Text>{item.name}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }}
                         source={{uri: item.image}}/>
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>@Hashinika</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}

SwipeComponent.propTypes = {
};

SwipeComponent.navigationOptions = ({navigation}) => {
  return  {
    title: 'Home',
    headerRight: <NavButton navigation={navigation}/>
  }
};
