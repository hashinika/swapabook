import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import LoginComponent from '../components/LoginComponentLink';
import MainScreen from '../components/MainScreen';
import ProfileScreen from '../components/ProfileScreen';
import SplashScreen from '../components/Splash/SplashScreenLink';
import HomeComponent from '../components/Home/HomeComponentLink';
import SwipeComponent from '../components/Swipe/SwipeComponentLink';
import ScannerComponent from '../components/widgets/scanner/ScannerComponentLink';
import BookDetailComponent from '../components/Book/BookDetailComponentLink';
import CollectionComponent from '../components/Book/CollectionComponentLink';
import NavButton from '../components/widgets/NavButton/NavButton';
import AlertBox from '../components/widgets/Alert/AlertBox';
import SwapComponent from '../components/Swap/SwapComponentLink';

import LoginScreen from '../components/LoginScreen';
const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const RootNavigator = createStackNavigator({
  Login: { screen: LoginComponent },
  Home: {screen: HomeComponent},
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
  SplashScreen: {screen: SplashScreen},
  SwipeComponent: {screen: SwipeComponent},
  ScannerComponent: {screen: ScannerComponent},
  NavButton: {screen: NavButton},
  AlertBox: {screen: AlertBox},
  BookDetailComponent: {screen: BookDetailComponent},
  CollectionComponent: {screen: CollectionComponent},
  SwapComponent: {screen: SwapComponent}
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };