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
import SwipeComponent from '../components/Swipe/SwipeComponentLink';
import ScannerComponent from '../components/widgets/scanner/ScannerComponentLink';
import BookDetailComponent from '../components/Book/BookDetailComponentLink';
import NavButton from '../components/widgets/NavButton/NavButton';
import AlertBox from '../components/widgets/Alert/AlertBox';

import LoginScreen from '../components/LoginScreen';
const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const RootNavigator = createStackNavigator({
  Login: { screen: LoginComponent },
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
  SplashScreen: {screen: SplashScreen},
  SwipeComponent: {screen: SwipeComponent},
  ScannerComponent: {screen: ScannerComponent},
  NavButton: {screen: NavButton},
  AlertBox: {screen: AlertBox},
  BookDetailComponent: {screen: BookDetailComponent}
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };