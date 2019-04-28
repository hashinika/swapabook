import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, Alert, Modal, Text } from 'react-native';
import {Container, Icon, Spinner} from 'native-base';
import SwipeComponent from '../Swipe/SwipeComponentLink';
import Navigation from '../Navigation/NavigationComponentLink';
import HomeHeaderComponent from '../HomeHeader/HomeHeaderComponentLink';


export default class HomeComponent extends Component {
  
  constructor(props){
    super(props);
    
  }

  render() {
    return (
      <Container>
        <View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.props.loaderVisible}
            onRequestClose={() => {
              console.log('Modal has been closed.');
            }}
            >
            <View style={{
              backgroundColor: '#006255',
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center'
              }}>
              <Spinner color='white' />
            </View>
          </Modal>
        </View>
        <View>
          <HomeHeaderComponent/>
        </View>
        <Container style={styles.containerStyle}>
          <SwipeComponent/>
        </Container>
        <View style={styles.infoBox}>
          <View style={styles.infoBoxText}>
            <View style={styles.iconBar}>
              <Icon name="return-left" style={styles.iconStyle} />
              <Icon name="hand" style={styles.iconStyle} />
              <Icon name="return-right" style={styles.iconStyle} />
            </View>
            <Text style={styles.boxText}>
              Swipe Left to Reject and Right to Accept</Text>
          </View>
        </View>
        <View>
          <Navigation/>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  spinnerContainer: {
    backgroundColor: '#006255',
  },
  rootStyle: {
    backgroundColor: '#006255',
  },
  containerStyle: {
    marginTop:'0%',
    marginBottom:'10%',
    marginLeft:5,
    marginRight:5,
  },
  infoBox: {
    marginLeft: 10,
    marginRight: 10,
    height: 100,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  boxText: {
    fontSize: 18
  },
  infoBoxText: {
    height: 80,
    backgroundColor: '#F6BD08',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconBar: {
    flexDirection: 'row'
  },
  iconStyle: {
    paddingLeft: 10,
    paddingRight: 10,
  }
});

HomeComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

HomeComponent.navigationOptions = {
  title: null,
  headerLeft: null,
  header:null
};