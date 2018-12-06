import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const cards = [
  {
    text: 'Book One',
    name: 'One',
    image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/63581319/original/b86e7084d7e2b739ed33d65ea3c1da77393941bd/guide-you-on-your-marketing-branding-or-advertising.jpg',
  },
  {
    text: 'Book Two',
    name: 'Two',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0bfe3a32853065.569640d8e4479.jpg'
  },
  {
    text: 'Book Three',
    name: 'Three',
    image: 'https://marketplace.canva.com/MACBTyJGXXY/1/0/thumbnail_large/canva-purple-paint-strokes-abstract-art-creativity-book-cover-MACBTyJGXXY.jpg'
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
    return (
      <Container>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} />
                    <Body>
                    <Text>{item.text}</Text>
                    <Text note>NativeBase 1</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }}
                         source={{uri: item.image}}/>
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}

